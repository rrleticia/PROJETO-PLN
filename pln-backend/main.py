from flask import Flask

app = Flask(__name__)

@app.route("/home")
def hello_page():
    return "<p>First page of the application</p>"

@app.route("/appname/query")
def query():
    pass

if __name__ == '__main__':
    app.run()