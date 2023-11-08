# Recipe Maker

#### This repository refers to a project made for the Natural Language Processing course conducted by the Professors Leandro Balby Marinho and Ítallo de Sousa Silva at the Federal University of Campina Grande (UFCG).

Hello there! Recipe Maker is a web application that uses Open AI's Chat GPT API in order to make it suggest a recipe for users based on the ingredients they have available. The way it works is: there is an empty field on the center of the screen in which users can input the name of the ingredients they have. 
The user can also select options regarding the nutrition value, a side drink to go with the recipe and also how hard they want the recipe to be. After that, just hit the search button and the app will return you a Recipe based on the ingredients you provided.
### 1. How to run the project

#### 1.1 Backend
1. Install python's necessary packages through the following command:

    ```pip install -f requirements.txt```

2. Inside the directory *pln-backend*, execute the command to install the packages, *note that this does require pip installed*:

    `pip install -e .`

3. Go to the controller folder and run the command:

    `python controller.py` or `python3 controller.py`

#### 1.2 Frontend

1. Install the necessary package dependencies from node:

   npm install

2. Inside the folder pln-frontend, run the script to start the application:

   npm run dev

3. Go to the link and use the application.

   http://localhost:5173/
