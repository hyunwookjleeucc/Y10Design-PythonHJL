#October 8, 2019
#Hyunwook Justin Lee
#Upper Canada College

import requests
import json
import pprint

 

def writeHTML(dataPointCity, dataPointTS, dataPointTP, dataPointAQ):

    myfile = open("jsonapi.html","w+")
    myfile.write("""


	<!DOCTYPE html>
    <html>
    <link href="https://fonts.googleapis.com/css?family=Proxima+Nova" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Proxima Nova">

    <head>
        <title>HJL</title>

        <link rel="stylesheet" href="json copy.css">

        <link rel='icon' href='favicon (1).ico' type='image/x-icon'/ >
        <meta name="viewport" content="width=device-width, initial-scale=1">


        <ul>

            <li><a class="active" href="index.html">HOME</a></li>
            <li><a href="hyunwookjleeucc.github.io" id="special"class="left" style="float:left;">JLEE</a></li>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <button onclick="document.getElementById('id01').style.display='block'" style="width:auto;">Login</button>
        </ul>

    </head>

    <body>
        
        <div class="header3" class="center" id="home">

            <p id="big" class=center><b>The Air Quality API</b></p>
            <p></p>

        </div>

        <div class="video">
            <iframe width="420" height="315"src="https://www.youtube.com/embed/zIH0NimCHZ8?autoplay=0">
            </iframe>
        </div>
  
    <p class ="headingtext">Introduction to the Air Quality Index (AQI)</p>
        <div class = "bodytext">
            
            <p>Air pollution is a mix of particles and gases that can reach harmful concentrations both outside and indoors. Its effects can range from higher disease risks to rising temperatures. Soot, smoke, mold, pollen, methane, and carbon dioxide are a just few examples of common pollutants.

            </p>

            <p>An air quality index (AQI) is used by government agencies to communicate to the public how polluted the air currently is or how polluted it is forecast to become. Public health risks increase as the AQI rises.
            </p> 


        </div>
    <p class = "headingtext">Information of your current location</p>

    <p class = "bodytext">Location: """+ str(dataPointCity) +"""</p>
    <p class = "bodytext">Timestamp of Data: """+ str(dataPointTS) + """</p>
    <p class = "bodytext">Current Temperature: """+ str(dataPointTP)+ "˚C""""</p>
    <p class = "bodytext">Air Quality Index: """+ str(dataPointAQ)+"""</p>

    <div class="footer">
        <a href="mailto:justin.lee22@ucc.on.ca">Contact Me</a>
    </div>


    </body>
    </html>""")
    myfile.close()


def main():
     
    response = requests.get("http://api.airvisual.com/v2/nearest_city?key=f0213f5e-54c4-4605-b743-6e616656d762")


    if (response.status_code == 200):

        data = response.content
        data_as_str = data.decode()
        print(data_as_str)
        datajson = response.json()

        dataPointCity = datajson['data']['city']
        dataPointTS = datajson['data']['current']['weather']['ts']
        dataPointTP = datajson['data']['current']['weather']['tp']
        dataPointAQ = datajson['data']['current']['pollution']['aqius']
        # dataPoints = datajson['data']
        
        # myfile = open("mainnapi.html","w")
        #dataPointCity = datajson['data']
        print("****")
        
        print("1. Your current city")
        print("2. The timestamp of your data")
        print("3. The current temperature of your location")
        print("4. Air Quality Index of your location")
        info = int(input("What do you want to know about? \n"))
        
        if info == 1:
            datajson = response.json()
            dataPointCity = datajson['data']['city']
            print ("Your current city is :" + dataPointCity)
            writeHTML(dataPointCity, dataPointTS, dataPointTP, dataPointAQ)
            

        elif info == 2:
            datajson = response.json()
            dataPointTS = datajson['data']['current']['weather']['ts']
            print ("Data is from :" + dataPointTS)
            writeHTML(dataPointCity, dataPointTS, dataPointTP, dataPointAQ)
        

        elif info == 3:
            datajson = response.json()
            dataPointTP = datajson['data']['current']['weather']['tp']
            print ("Temperature :" + str(dataPointTP) + "˚C")
            writeHTML(dataPointCity, dataPointTS, dataPointTP, dataPointAQ)
            

        elif info == 4:
            datajson = response.json()
            dataPointAQ = datajson['data']['current']['pollution']['aqius']
            print ("Air Quality Index is :" + str(dataPointAQ))
            writeHTML(dataPointCity, dataPointTS, dataPointTP, dataPointAQ)
        

    else:
        data = "Error has occured"
        # writeHTML(data)



main()
