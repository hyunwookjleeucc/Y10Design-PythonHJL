'''
myapi.py 
- simple program to demo using a web API with requests Python module
- secondary function to demo how to write out received data to an HTML file 
'''

import requests
import json
import pprint

# Find APIs at - https://apilist.fun/
# some will require an API key, boo hiss!

# cool geo example
# https://geo-info.co/?ref=apilist.fun
# example - https://geo-info.co/43.65,-79.40

# cool funny example
# https://funtranslations.com/api/chef
# https://api.funtranslations.com/translate/chef.json?text=I%20like%20upper%20canada%20college

def writeHTML(data):
	myfile = open("exampleapi.html","w")
	myfile.write("<h1>JSON file returned by API call</h1>")
	myfile.write("<p>Copy and paste to <a href='https://jsoneditoronline.org/'>JSON editor</a> for pretty format.</p>")
	myfile.write(data)
	myfile.close()

def main():
	# use API to get place info
	response = requests.get("https://financialmodelingprep.com/api/cryptocurrency?datatype=json")

	# if API call is correct
	if (response.status_code == 200):
		data = response.content
		datajson = response.json()
		dataPoints = datajson['BTC']
		pprint.pprint(datajson)

		for point in dataPoints:
			print(f"{point['ticker']}: \n\tPrice; {point['price']} \n\tChange; {point['changes']}\n")
			
		else:
			data = "Error has occured"
			writeHTML(data)

main()