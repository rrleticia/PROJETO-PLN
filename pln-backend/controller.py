import openai
from flask import Flask, request, jsonify
from app.recipe_maker_app import RecipeMakerApp
from api_credentials import API_KEY

app = Flask(__name__)
recipe_app = RecipeMakerApp()
openai.api_key = API_KEY

# Sends query to chat gpt and returns its response
@app.route("/recipemaker/query")
def send_query():
    json = request.get_json()
    message = json['query']
    print(message)

    messages = [ {"role": "system", "content":  
              "You are a intelligent assistant."} ]
    
    messages.append( 
            {"role": "user", "content": message}, 
        )
    chat = openai.ChatCompletion.create( 
            model="gpt-3.5-turbo", messages=messages
        )
    
    reply = chat.choices[0].message.content
    messages.append({"role": "assistant", "content": reply})
    return jsonify(reply)

# Fetches cart data
@app.route("/recipemaker/fetch/cart")
def fetch_cart():
    pass

# Fetches all available foods
@app.route("/recipemaker/fetch/foods")
def fetch_foods():
    pass

if __name__ == '__main__':
    app.run()