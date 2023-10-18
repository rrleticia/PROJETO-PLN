import openai
from flask import Flask, request, jsonify

from api_credentials import API_KEY

app = Flask(__name__)
openai.api_key = API_KEY

# Sends query to chat gpt and returns its response
@app.route("/recipemaker/query")
def send_query():
    json = request.get_json()
    message = json['query']

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

if __name__ == '__main__':
    app.run()