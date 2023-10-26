import openai
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from api_credentials import API_KEY
from style_variables import *

app = Flask(__name__)
CORS(app)
openai.api_key = API_KEY

cors = CORS(app, resources={
    r"/api/*": {
        "origins": "http://localhost:5173/",
        "methods": ["GET", "POST"],
        "allow_headers": ["Content-Type"]
    }
})

# Sends query to chat gpt and returns its response
@app.route("/recipemaker/query", methods=['POST'])
@cross_origin()
def send_query():
    json = request.get_json()
    json_data = json["data"]

    message = compose_query(json_data)

    messages = [ {"role": "system", "content":  
              "You are a intelligent assistant."} ]

    messages.append( 
            {"role": "user", "content": message}, 
        )
    chat = openai.ChatCompletion.create( 
            model="gpt-3.5-turbo", messages=messages
        )

    try:
        response = chat.choices[0].message.content

        messages.append({"role": "assistant", "content": response})
        response_dict = {"recipe" : response}

        return jsonify(response_dict)
    
    except Exception as e:
        error = {"error message" : f"{str(e)}"}
        return jsonify(error)

def compose_query(json: dict[str: any]):

    # Compose a string with all foods
    foods_list = [food for food in json['foods']]
    foods_string = ", ".join(foods_list)

    options = json['options']

    sentences = ""
    professional = "chef"
    if options["difficult"]:
        sentences += f"\n-I want a {options['difficult']} level recipe in terms of difficulty."
    
    if options["nutrition"]:
        professional = "nutritionist"
        sentences += f"\n-I want a recipe that goes according to the nutrition value: {options['nutrition']}"

    if options["drink"]:
        sentences += f"""\n-I want a {options['drink']} drink to go with the recipe,
                            please sepparate the drink recommendation and put it after
                            the recipe. Then, tell me why you think that is a great
                            drink to go with the suggested recipe."""

    message = f"Act as a {professional} and suggest me a recipe according to the following recommendations:"
    message += sentences

    message += f"""\nNow, suggest me the best possible recipe,
                according to what I described knowing that I 
                have the following ingredients: {foods_string}.
                If you feel like the ingredients are not enough
                to make a recipe, give me the closest recipe 
                that matches my ingredients. The ingredients you can't
                find on the list I provided have to be marked in bold.
                
                The output should be in MARKDOWN format, according to the following structure:
                - Each section (Recipe Name, Ingredients, How to Prepare and Drink) should be
                encapsulated with a span tag with the style attribute according to style="font-family: {P_FONT}; color:{TITLE_COLOR};"
                - Each text should be enclosed within a <p></p> html tag and should have the
                style attribute according to style="font-family: {P_FONT}; font-size: 1rem;"

                Here's an example of what I want:

                ## <span style="color: {TITLE_COLOR}; font-family: {P_FONT};">**Recipe Name**: Sushi Rolls</span>
                ## <span style="color: {TITLE_COLOR}; font-family: {P_FONT}">**Ingredients**:</span>
                <li style="font-family: {P_FONT}; font-size:1rem;">Salmon;</li>
                <li style="font-family: {P_FONT}; font-size:1rem;">Rice;</li>
                <li style="font-family: {P_FONT}; font-size:1rem;">Seaweed sheets;</li>
                <li style="font-family: {P_FONT}; font-size:1rem;"><b>Rice vinegar.</b></li>;
            
                ## <span style="color: {TITLE_COLOR}; font-family: {P_FONT}">**How to prepare:**</span>
                <li style="font-family: {P_FONT}; font-size:1rem;">Cut the salmon</li>;
                <li style="font-family: {P_FONT}; font-size:1rem;">Wash the rice</li>;
                <li style="font-family: {P_FONT}; font-size:1rem;">Cook the rice</li>;

                <p style="font-family: {P_FONT}; font-size:1rem;>This is an example of how a text should be.</p>
                """

    return message

if __name__ == '__main__':
    app.run()