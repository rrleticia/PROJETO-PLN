from entities.cart import Cart
from entities import food

class RecipeMakerApp:

    def __init__(self):
        self.cart = Cart()
        # self.foods = food.foods_set
    
    def add_food_to_cart(self, food: food.Food):
        self.cart.add_food(food)

    def remove_food_from_cart(self, food: food.Food):
        self.cart.remove_food(food)

    def get_food_by_name(self, name: str):
        for food in self.foods:
            if food.get_name() == name:
                return food
        
        return None
    
    def get_food_by_id(self, ID: int):
        for food in self.foods:
            if food.get_ID() == ID:
                return food
            
        return None
    
    def get_foods_by_category(self, category:str) -> list[str]:
        foods_set = {}
        for food in self.foods:
            if food.get_category() == category:
                foods_set.add(food)

        return foods_set
    
