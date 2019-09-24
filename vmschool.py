#September 20, 2019
#Hyunwook Justin Lee
#Upper Canada College

import webbrowser as web

print("Hi, welcome to the Vending Machine!")
print("1. Water: $2.00")
print("2. Vitamin Water: $3.00")
print("3. Granola Bar: $1.40")
print("4. Creatine: $0.50 per gram")
print("5. Healthy Snack $3.00")
print(" ")
print("Choose one of the options above")

answer = int(input("What would you like to have? \n"))
financial = int(input("How much money do you have? \n"))

if answer == 1:
   waterans = int(input("How many bottles would you like? \n"))
   watertotal = int(2*int(waterans))
   if financial < watertotal:
   	print("You don't have enough money.")
   else:
   	print("The total price is $" + str(watertotal))


elif answer == 2:
   vwans = int(input("How many cans would you like? \n"))
   vwtotal = int(3*int(vwans))
   if financial < vwtotal:
   	print("You don't have enough money.")
   else:
   	print("The total price is $" + str(vwtotal))

elif answer == 3:
	gbans = int(input("How many bottles would you like? \n"))
	gbtotal = int(1.4*int(gbans))
	if financial < gbtotal:
		print("You don't have enough money.")
	else:
		print("The total price is $" + str(gbtotal))

elif answer == 4:
	creatineans = int(input("How many grams of creatine would you like to have? \n"))
	creatinetotal = int(0.5*int(creatineans))
	if financial < creatinetotal:
		print("You don't have enough money.")
	else:
		print("The total price is $" + str(creatinetotal))

	creatinefact = int(input("Do you want to know something about creatine? 1 = yes, 2 = no. "))
	if creatinefact == 1:
		web.open("https://www.webmd.com/vitamins/ai/ingredientmono-873/creatine")
	if creatinefact == 2:
		print("Well you should know anyways!")
		web.open("https://www.webmd.com/vitamins/ai/ingredientmono-873/creatine")

elif answer == 5:
	snackans = int(input("How many servings would you like to have? \n"))
	snacktotal = int(3*int(snackans))
	if financial < snacktotal:
		print("You don't have enough money.")
	else:
		print("The total price is $" + str(snacktotal))

print("Thank you for shopping!")

input("Press ENTER to quit the program")