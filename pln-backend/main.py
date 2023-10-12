from flask import Flask

app = Flask(__name__)

@app.route("/home")
def hello_page():
    return "<p>First page of the application</p>"

@app.route("/recipemaker/query")
def send_query():
    pass

@app.route("/recipemaker/fetch/cart")
def fetch_cart():
    pass

@app.route("/recipemaker/fetch/foods")
def fetch_foods():
    pass

if __name__ == '__main__':
    app.run()