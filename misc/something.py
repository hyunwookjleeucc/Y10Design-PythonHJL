#September 16, 2019
#Hyunwook Justin Lee
#Upper Canada College

import webbrowser as web

print("1. Weather")
print("2. Classes")
print("3. The King of Albania from 1922 to 1939")
print(" ")
print("Choose one of the options above")

answer = int(input("What do you wish to know about? \n"))

if answer == 1:
   web.open('https://www.google.ca/search?client=opera&q=toronto+weather&sourceid=opera&ie=UTF-8&oe=UTF-8')
elif answer == 2:
    dayx = int(input("Which day is it?"))
    if dayx == 1 or 3 or 5 or 7:
    	print("Math, Writer's Craft, Physics, English")
    elif dayx ==2 or 4 or 6 or 8:
    	print("Coding, French, PhysEd, History")
elif answer == 3:
    print ("King Zog I")
else:
    print ("This is not a valid choice")


# This is a way to gracefuuly exit the program
input("Press ENTER to quit the program")