#October 8, 2019
#Hyunwook Justin Lee
#October 8, 2019

import requests
import json
import pprint
 

def writeHTML(data):
	myfile = open("exampleapi.html","w")
	myfile.write("<h1>JSON file returned by API call</h1>")
	myfile.write("<p>Copy and paste to <a href='jsonprettyprint.com'>JSON editor</a> for pretty format.</p>")
	myfile.write(data)
	myfile.close()

def main():
	response = requests.get("https://financialmodelingprep.com/api/v3/cryptocurrencies")
	
	if (response.status_code == 200):

		data = response.content
		datajson = response.json()
		dataPoints = datajson['cryptocurrenciesList']
		pprint.pprint(datajson)

		for point in dataPoints:
			print(f"{point['ticker']}: \n\tName; {point['name']} \n\tPrice; {point['price']} \n\tChange; {point['changes']}\n")
			
	else:
		data = "Error has occured"
		writeHTML(data)

main()