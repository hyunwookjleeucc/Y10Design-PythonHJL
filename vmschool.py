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


financial = int(input("How much money do you have? \n"))
answer = int(input("Choose one of the options above \n"))

if answer == 1:
   waterans = int(input("How many bottles would you like? \n"))
   watertotal = int(2*int(waterans))
   change1 = int(int(financial) - int(watertotal))
   if financial < watertotal:
   	print("You don't have enough money.")
   else:
   	print("The total price is $" + str(watertotal) + " Your change is $" + str(change1))


elif answer == 2:
   vwans = int(input("How many bottles would you like? \n"))
   vwtotal = int(3*int(vwans))
   change2 = int(int(financial) - int(vwtotal))
   if financial < vwtotal:
   	print("You don't have enough money.")
   else:
   	print("The total price is $" + str(vwtotal))

elif answer == 3:
	gbans = int(input("How many bars would you like? \n"))
	gbtotal = float(1.4*int(gbans))
	change3 = int(int(financial) - int(gbtotal))
	if financial < gbtotal:
		print("You don't have enough money.")
	else:
		print("The total price is $" + str(gbtotal) + " Your change is $" + str(change2))

elif answer == 4:
	creatineans = int(input("How many grams of creatine would you like to have? \n"))
	creatinetotal = float(0.5*int(creatineans))
	change4 = int(int(financial) - int(creatinetotal))
	if financial < creatinetotal:
		print("You don't have enough money.")
	else:
		print("The total price is $" + str(creatinetotal) + "Your change is $" + str(change3))

	creatinefact = int(input("Do you want to know something about creatine? 1 = yes, 2 = no. "))
	if creatinefact == 1:
		web.open("https://www.webmd.com/vitamins/ai/ingredientmono-873/creatine")
	if creatinefact == 2:
		print("Well you should know anyways!")
		web.open("https://www.webmd.com/vitamins/ai/ingredientmono-873/creatine")

elif answer == 5:
	snackans = int(input("How many servings would you like to have? \n"))
	snacktotal = int(3*int(snackans))
	change5 = int(int(financial) - int(snacktotal))
	if financial < snacktotal:
		print("You don't have enough money.")
	else:
		print("The total price is $" + str(snacktotal) + " Your change is $" + str(change5))

print("Thank you for shopping!")

input("Press ENTER to quit the program")