from settings.style_variables import *

class RecipeMaker:
    '''
    The RecipeMaker main class, it composes a query to be sent
    to chat gpt API.
    '''
    
    def __init__(self):
        pass

    def compose_query(self, json: dict[str: any]):
        '''
        This method is used to compose the query regarding the recipe,
        it makes a query based on giving clear instructions and an example
        of how the query output should be.

        Parameters
        ----------
        json: dict[str: any]
            A dictionary that represents the request sent to the server.
        
        Returns
        -------
        message: str
            A message that represents the final query that will be sent to
            the chat gpt API.
        '''

        # Compose a string with all foods
        foods_list = [food for food in json['foods']]
        foods_string = ", ".join(foods_list)

        options = json['options']

        # Composes sentences based on options provided
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
                    <li style="font-family: {P_FONT}; font-size:1rem;"><b>Rice vinegar.</b></li>
                
                    ## <span style="color: {TITLE_COLOR}; font-family: {P_FONT}">**How to prepare:**</span>
                    <li style="font-family: {P_FONT}; font-size:1rem;">Cut the salmon;</li>
                    <li style="font-family: {P_FONT}; font-size:1rem;">Wash the rice;</li>
                    <li style="font-family: {P_FONT}; font-size:1rem;">Cook the rice;</li>

                    <p style="font-family: {P_FONT}; font-size:1rem;>This is an example of how a text should be.</p>
                    """

        return message