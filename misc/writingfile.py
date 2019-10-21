#October 2, 2019
#Hyunwook Justin Lee
#Upper Canada College

athletics = str(input("What is your favorite sport? "))
music = str(input("What is your favorite music? "))
composer = str(input("Who is your favorite classical music composer? "))

f = open("info.txt", "a")
f.write ("\n" + athletics)
f.write ("\n" + music)
f.write ("\n" + composer)
f.close()

f = open("info.txt", "r")
print (f.read())

input("Press ENTER to quit the program")