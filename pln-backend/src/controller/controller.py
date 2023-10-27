from recipemaker.recipe_maker_app import RecipeMaker
from flask_cors import CORS, cross_origin
from flask import Flask, request, jsonify
from settings.api_credentials import API_KEY
import openai

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

recipe_maker = RecipeMaker()

# Sends query to chat gpt and returns its response
@app.route("/recipemaker/query", methods=['POST'])
@cross_origin()
def send_query():
    json = request.get_json()
    json_data = json["data"]

    message = recipe_maker.compose_query(json_data)

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

if __name__ == '__main__':
    app.run()