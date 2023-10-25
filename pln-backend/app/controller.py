import openai
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from api_credentials import API_KEY

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

        with open("recipe.html", "w") as f:
            f.write(response)
            
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
                that matches my ingredients and mark in a bold tag which
                ones I'm missing for that certain recipe you have.
                
                The output should be in HTML format, according to this structure:
                RECIPE NAME: The name of the recipe
                INGREDIENTS: Each of the ingredients, listed by "-"
                HOW TO PREPARE: A step by step guide with informations
                regarding how to prepare the recipe

                Here's an example of what I want:

                RECIPE NAME: Sushi Rolls
                INGREDIENTS:
                - Salmon;
                - Rice;
                - Seaweed sheets.
                HOW TO PREPARE:
                1. Cut the salmon;
                2. Wash the rice;
                3. Cook the rice.
                """

    return message

if __name__ == '__main__':
    app.run()