import requests
from tkinter import *
import webbrowser

def getStuff():
    request = requests.get("https://api.worldtradingdata.com/api/v1/stock?symbol=" + e1.get() + "&api_token=LR1vMZpzySAxp2C30GtVNzo7FCgNCkDMue8Bq52EeXJQ0kwsLD4KAYtTKq0w")
    datajson = request.json()
    print(str(datajson))
    writeitOut(datajson)

def writeitOut(datajson):
    dataAAPL=datajson['data']
    #pricecdata
    priceAAPL=dataAAPL[0]['price']
    #dailyhigh data
    dayhighAAPL=dataAAPL[0]['day_high']
    #day low
    daylowAAPL=dataAAPL[0]['day_low']
    #52week high
    fiftyhighAAPL=dataAAPL[0]['52_week_high']
    #52week low
    fiftylowAAPL=dataAAPL[0]['52_week_low']
    ofile=open("poopypants.html","w")
    ofile.write("<h2>" + "price is:" + priceAAPL + "</h2>")
    ofile.write("<h2>" + "The Day high was:" + dayhighAAPL + "</h2>")
    ofile.write("<h2>" + "The Day low was:" + daylowAAPL + "</font>" + "</h2>")
    ofile.write("<h2>" + "The 52 week high is:" + fiftyhighAAPL + "</h2>")
    ofile.write("<h2>" + "The 52 week low is:" + fiftylowAAPL + "</h2>")
    ofile.close()

def openIt():
    webbrowser.open("file:///Users/nikola.radan/Documents/Y10-Design%20Folder/poopypants.html")
   
win=Tk()
e1=Entry(win)
#img = Image("IMG_2018.JPG")
b1=Button(win,text="get data", command=getStuff)
b2=Button(win,text="website",command=openIt)
e1.grid(row=2,column=0)
b1.grid(row=3,column=0)
b2.grid(row=4,column=0)
Label_1=Label(win, text="Welcome to my Stock interface!", bg="blue", fg="white", font="Verdana 32 bold italic")
Label_1.grid(row=0,column=0)
Label_1=Label(win, text="Chose a stock!", bg="blue", fg="white", font="Verdana 10 bold italic")
Label_1.grid(row=1,column=0)
#imglabel = Label(win, image=img)
#imglabel.grid(row=5, column=0)