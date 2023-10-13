from entities import food

class Cart:

    def __init__(self):
        self.foods = set()
    
    def add_food(self, food: food.Food):
        self.foods.add(food)

    def remove_food(self, food: food.Food):
        self.foods.remove(food)
