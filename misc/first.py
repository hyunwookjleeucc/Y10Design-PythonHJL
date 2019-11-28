
radius = input("What is the radius of the base of your cylinder? ")
height = input("What is the height of the cylinder? ")

volume = int(radius)*int(radius)*3.14*int(height)
volume = round(volume, 2)

print("The volume of your cylinder is " + str(volume))