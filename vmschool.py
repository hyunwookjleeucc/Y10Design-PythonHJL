#September 20, 2019
#Hyunwook Justin Lee
#Upper Canada College

import webbrowser as web

print("Hi, welcome to the Vending Machine!")
print("1. Water: $2.00 Stock: 10")
print("2. Vitamin Water: $3.00 Stock: 8")
print("3. Granola Bar: $1.40 Stck: 20")
print("4. Creatine: $0.50 per gram Stock: 1000 grams")
print("5. Healthy Snackz $3.00 Stock: 20 bags")
print(" ")


financial = int(input("How much money do you have? \n"))
answer = int(input("Choose one of the options above \n"))


if answer == 1:
   waterans = int(input("How many bottles would you like? \n"))
   watertotal = int(2*int(waterans))
   wstockleft = int(10-int(waterans))
   change1 = int(int(financial) - int(watertotal))
   if financial < watertotal:
   	print("You don't have enough money.")
   else:
   	if waterans > 10:
   		print("We don't have that many bottles of water!")
   	else:
   		print("The total price is $" + str(watertotal) + " and your change is $" + str(change1) + ".")
   		print("Now there are " + str(wstockleft) + " bottles of water left.")


elif answer == 2:
   vwans = int(input("How many bottles would you like? \n"))
   vwtotal = int(3*int(vwans))
   vwstockleft = int(8-int(vwans))
   change2 = int(int(financial) - int(vwtotal))
   if financial < vwtotal:
   		print("You don't have enough money.")
   else:
   		if vwans > 8:
   			print("We don't have that many bottles of Vitmain Water!")
   		else:
   			print("The total price is $" + str(vwtotal) + " and your change is $" + str(change2) + ".")
   			print("Now there are " + str(vwstockleft) + " bottles of vitamin water left.")

elif answer == 3:
	gbans = int(input("How many bars would you like? \n"))
	gbtotal = float(1.4*int(gbans))
	gbstockleft = int(20-int(gbans))
	change3 = int(int(financial) - int(gbtotal))
	if financial < gbtotal:
		print("You don't have enough money.")
	else:
		if gbans > 20:
			print("We don't have that many granola bars!")
		else:
			print("The total price is $" + str(gbtotal) + " and your change is $" + str(change3) + ".")
			print("Now there are " + str(gbstockleft) + " granola bars left.")

elif answer == 4:
	creatineans = int(input("How many grams of creatine would you like to have? \n"))
	creatinetotal = float(0.5*int(creatineans))
	creastockleft = int(1000-int(creatineans))
	change4 = int(int(financial) - int(creatinetotal))
	if financial < creatinetotal:
		print("You don't have enough money.")
	else:
		if creatineans > 1000:
			print("We don't have that many grams of Creatine!")
		else:
			print("The total price is $" + str(creatinetotal) + " and your change is $" + str(change4) + ".")
			print("Now there are " + str(creastockleft) + " grams of Creatine left.")

	creatinefact = int(input("Do you want to know something about creatine? 1 = yes, 2 = no. "))
	if creatinefact == 1:
		web.open("https://www.webmd.com/vitamins/ai/ingredientmono-873/creatine")
	if creatinefact == 2:
		print("Well you should know anyways!")
		web.open("https://www.webmd.com/vitamins/ai/ingredientmono-873/creatine")

elif answer == 5:
	snackans = int(input("How many bags would you like to have? \n"))
	snacktotal = int(3*int(snackans))
	snkstockleft = int(20 - int(snackans))
	change5 = int(int(financial) - int(snacktotal))
	if financial < snacktotal:
		print("You don't have enough money.")
	else:
		if snackans > 20:
			print("We don't have that many bags!")
		else:
			print("The total price is $" + str(snacktotal) + " and your change is $" + str(change5) + ".")
			print("Now there are " + str(snkstockleft) + " bags of Healthy Snackz left.")

print("Thank you for shopping!")

input("Press ENTER to quit the program")