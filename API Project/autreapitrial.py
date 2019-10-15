#October 8, 2019
#Hyunwook Justin Lee
#Upper Canada College

import requests
import json
import pprint
 

def writeHTML(data):
	myfile = open("autre.html","w")
	myfile.write("<h1>CryptoCurrencies Information API </h1>")
	myfile.write("<p>Copy and paste to <a href='https://jsonprettyprint.com'>JSON editor</a> for pretty format.</p>")
	myfile.write(data)
	myfile.close()

def main():
	response = requests.get("https://gnews.io/api/v3/topics/sports?token=ecefef12cbb0cc5ec58073fc7c157829")
	
	if (response.status_code == 200):

		data = response.content
		data_as_str = data.decode()
		writeHTML(data_as_str)
		datajson = response.json()
		pprint.pprint(datajson)
			
	else:
		data = "Error has occured"
		writeHTML(data)

main()