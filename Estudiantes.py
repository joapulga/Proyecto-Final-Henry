from Personas import *

class Estudiante(Persona):
    
    def __init__(self, name, lastName, number):
        super().__init__(name, lastName)
        self.number = number
        

persona1 = Estudiante('Juan', 'Velez', 2345)

print(persona1.name)