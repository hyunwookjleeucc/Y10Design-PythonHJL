#September 20, 2019
#Hyunwook Justin Lee
#Upper Canada College

import webbrowser as web

print("Hi, welcome to the Vending Machine!")
print("1. Coca Cola")
print("2. Pepsi")
print("3. Honest Tea")
print("4. Raw creatine")
print("5. Aramark Special Jerk Chicken")
print(" ")
print("Choose one of the options above")

answer = int(input("What would you like to have? \n"))
financial = int(input("How much money do you have?"))

if answer == 1:
   print("The price for 1 can of Coca Cola is $2.00")
   cocaans = int(input("How many cans would you like?"))
   cocatotal = int(2*int(cocaans))
   if financial < cocatotal:
   	print("You don't have enough money.")
   else:
   	print("The total price is $" + str(cocatotal))

elif answer == 2:
   print("The price for 1 can of pepsi is $2.00")
   pepsians = int(input("How many cans would you like?"))
   pepsitotal = int(2*int(pepsians))
   if financial < pepsitotal:
   	print("You don't have enough money.")
   else:
   	print("The total price is $" + str(pepsitotal))

elif answer == 3:
	honestans = int(input(("The price for one bottle of Honest Tea is $2.50. Would you like the Aramark version?" + "\n" + "Press 1 to yes 2 to select normal.  ")))
	if honestans == 1:
		print("The price for 1 bottle of Honest Tea is now $50.00")
		honestans2 = int(input("How many bottles would you like? "))
		honesttotal1 = int(50*int(honestans2))
		if financial < honesttotal1:
			print("You don't have enough money.")
		else:
			print("The total price is $" + str(honesttotal1))
	elif honestans == 2:
		honestans3 = int(input("How many bottles would you like? "))
		honesttotal2 = int(2*int(honestans3))
		if financial < honesttotal2:
			print("You don't have enough money.")
		else:
			print("The total price is $" + str(honesttotal2))

elif answer == 4:
	creatineans = int(input("The price for 1 gram of creatine is $0.50" + "\n" + "How many grams of creatine would you like to have? "))
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
	aramarkans = int(input("The price for 1 serving of Aramark Special Jerk Chicken is $32000.00" + "\n" + "How many servings would you like to have? "))
	aramarktotal = int(32000*int(aramarkans))
	if financial < aramarktotal:
		print("You don't have enough money.")
	else:
		print("The total price is $" + str(aramarktotal))

print("Thank you for shopping!")

input("Press ENTER to quit the program")
