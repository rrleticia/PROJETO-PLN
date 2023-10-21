import openai
from flask import Flask, request, jsonify
from flask_cors import CORS,cross_origin

from api_credentials import API_KEY

app = Flask(__name__)
CORS(app)
openai.api_key = API_KEY
from flask_cors import CORS

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
    foods_list = [food for food in json_data['foods']]

    foods_string = ""
    for food in foods_list:
        foods_string += f"{food},"

    options = json_data['options']

    message = "Act as a chef and suggest me a recipe according to the following recommendations:"
    for op in options.keys():
        sentences = ""
        if options[op] and op == "difficult":
            sentences += f"\nI want a recipe of the difficulty {options[op]}."
        elif options[op] and op == "nutrition":
            sentences += f"\nI want a recipe that goes according to the nutrition value: {options[op]}"
        elif options[op] and op =="drink":
            sentences += f"\nI want a drink {options[op]} to go with the recipe, please sepparate the drink recommendation from the recipe and tell me why you think that is a great drink recommendation."

    message += f"\nNow, suggest me the best possible recipe, according to what I described knowing that I have the following ingredients: {foods_string}. If you feel like there's any ingredient missing, please tell me which ones I'm missing for the recipe you have."

    messages = [ {"role": "system", "content":  
              "You are a intelligent assistant."} ]

    messages.append( 
            {"role": "user", "content": message}, 
        )
    chat = openai.ChatCompletion.create( 
            model="gpt-3.5-turbo", messages=messages
        )
    print("-"*90)
    try:
        response = chat.choices[0].message.content
        print(f"O tipo da resposta é: {type(response)}")
        messages.append({"role": "assistant", "content": response})
        response_dict = {"recipe" : response}
        print(f"respondi {response_dict}")
        return jsonify(response_dict)
    except Exception as e:
        print("Error!")
        print("*" * 90)
        error = {"error message" : f"{str(e)}"}
        print(error)
        return jsonify(error)

if __name__ == '__main__':
    app.run()