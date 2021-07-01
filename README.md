# deviceApp_FrontEnd

## Installation Setps
    - git clone https://github.com/bhosale05/deviceApp_FrontEnd.git
    - npm Install

## Executation setps
    - npm run serve 

## Dependecny
    - deviceApp_restAPI is should be running on port 3000

## SatrtUp Point of app 
    - Running url localhost:8080, then goto the signin page, if user don't have accound then click on sign up and add user then sign in to app
    - After signin Successfully, then goto show device deatis page. display all devices available on DB on screen
    - Each device card have checkIn/CheckOut toggle for checkout the device, if alreaddy checkout device then show C.D. on card, if not checkout the device then click on toggle and checkout, at the time of checkout device add lastcheckedoutby, lastcheckedoutdate and ischeckedout is updated
    - user checkout the device in between 09:00:00 AM to 17:00:00 PM
    - user wants to remove device deatils then click on remove button and delete device from DB and screen.
    - user wants to signout the app then click on signout button in header and signout successfully