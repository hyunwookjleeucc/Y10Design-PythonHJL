#October 8, 2019
#Hyunwook Justin Lee
#Upper Canada College

import requests
import json
import pprint
 

def writeHTML(data):
    myfile = open("mainnapi.html","w")
    myfile.write("<h1>Air Quality API</h1>")
    myfile.write("<p>Copy and paste to <a href='https://jsonprettyprint.com'>JSON editor</a> for pretty format.</p>")
    myfile.write(data)
    myfile.close()

def main():
    response = requests.get("http://api.airvisual.com/v2/nearest_city?key=f0213f5e-54c4-4605-b743-6e616656d762")

    if (response.status_code == 200):

        data = response.content
        data_as_str = data.decode()
        writeHTML(data_as_str)
        
        #dataPoints = datajson['data']

        datajson = response.json()
        myfile = open("apicopy.html","w")
        #dataPointCity = datajson['data']
        print("****")
        
        print("1. Your current city")
        print("2. The timestamp of your data")
        print("3. The current temperature of your location")
        print("4. Air Quality Index of your location")
        info = int(input("What do you want to know about? \n"))
        
        if info == 1:
            dataPointCity = datajson['data']['city']
            print ("Your current city is :" + dataPointCity)
            print("****")
            myfile.write("Your current city is :" + dataPointCity + "\n Temperature :" + str(dataPointTP))
            main()

        elif info == 2:
            dataPointTS = datajson['data']['current']['weather']['ts']
            print ("Data is from :" + dataPointTS)
            print("****")
            myfile.write("Data is from :" + dataPointTS)
            main()

        elif info == 3:
            dataPointTP = datajson['data']['current']['weather']['tp']
            print ("Temperature :" + str(dataPointTP) + "˚C")
            print("****")
            myfile.write("Temperature :" + str(dataPointTP))
            main()

        elif info == 4:
            dataPointAQ = datajson['data']['current']['pollution']['aqius']
            print ("Air Quality Index is :" + str(dataPointAQ))
            print("****")
            myfile.write("Air Quality Index is :" + str(dataPointAQ))

            main()

        


        '''
        pprint.pprint(datajson)

        for point in dataPoints:
            print(f"{point['aqius']}: \n\tLocation; {point['city']} \n\tTemperature; {point['tp']} \n\tTime Stamp; {point['ts']}\n")
        ''' 

    else:
        data = "Error has occured"
        writeHTML(data)



main()