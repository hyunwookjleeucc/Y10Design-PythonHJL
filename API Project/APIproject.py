#October 8, 2019
#Hyunwook Justin Lee
#Upper Canada College

import requests
import json
import pprint
list1=[]
list2=[]

def writeHTML(datajson):
    print('l')
    myfile = open("APIproject.html","w")
    myfile.write("<!DOCTYPE HTML><html><head></head><body><script src=" 'https://cdn.jsdelivr.net/npm/chart.js@2.8.0' "></script><script src=" 'https://canvasjs.com/assets/script/canvasjs.min.js' "></script><script>var ctx = document.getElementById('chartjs-0').getContext('2d');var chart = new Chart(ctx, {type: 'bar',data: {labels: [")
    for i in range(len(datajson['data'])):
        if i !=0:
            myfile.write("," + datajson['data'][i]['pollution'])
        else:
            myfile.write(datajson['data'][i]['pollution'])
    myfile.write("],datasets: [{label: 'Stock Price',data: [")
    for i in range(len(datajson['data'])):
        if i !=0:
            myfile.write("," + datajson['data'][i]['price'])
        else:
            myfile.write(int(datajson['data'][i]['price']))
    myfile.write("],pointRadius:0}]},options: {}});</script></body></html>")
   
    myfile.close()

def main():
    response = requests.get("http://api.airvisual.com/v2/nearest_city?key=f0213f5e-54c4-4605-b743-6e616656d762")

    if (response.status_code == 200):
        datajson = response.json()
        writeHTML(str(datajson))

main()