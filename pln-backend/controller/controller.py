from flask import Flask
from app.recipe_maker_app import RecipeMakerApp

app = Flask(__name__)
recipe_app = RecipeMakerApp()

@app.route("/home")
def hello_page():
    return "<p>First page of the application</p>"

# Sends query to chat gpt and returns its response
@app.route("/recipemaker/query")
def send_query():
    pass

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