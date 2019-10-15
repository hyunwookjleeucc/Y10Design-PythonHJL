import requests
import json
import pprint

# Find APIs at - https://apilist.fun/

def main():

    # use API to get appropriate website info
    # this required signing up but it is free!
    myrequest = requests.get("https://gnews.io/api/v3/topics/sports?token=e5509443651c0842b01c9142e25ef5f0")
    
    
    # The type of the return value of .json() is a dictionary, 
    # so you can access values in the object by key.

    data_json = myrequest.json()

    x = data_json['articleCount']
    print (x)

    y = data_json['timestamp']
    print (y)

    # trying to grab a specific field from one of the articles....
    #z = data_json['articles'][2]

    z = data_json['articles'][2]['url']
    pp = pprint.PrettyPrinter(indent=4)
    pp.pprint(z)
    #print (z)
    
 
# Here is the call to the MAIN function after we have defined when 
# the function defintions are above

main()