Welcome to my solution to Hexad task by me Hazem !


# Overview



# Getting started
Before you start you should have a recent version of `npm` and `node`
installed.
To start the server go into the `server` directory and run
```
  npm install
  npm start
```
To see whether the server works check <http://localhost:26062> and see if you
get `Hello World` message.

To run the tests go run
```
npm test
```


# Task 1 - Splitting data into segments
**Motivation**
As you can see when clicking on the red line on the map the tracking data
spans multiple days. It's unclear when a trip starts or ends. To give dispatchers
a better overview over the trips the driver has taken in recent history it
would be helpful to split the tracking data into trips and display them
separatly on the map.

**Solution**
1. Change the server (`server/index.js`) so that the tracking data is
split into multiple arrays (segments). Check Helper.locations_To_Segments function

2. Adapt the front-end (`client/src/map_container.js`) so that the different
segments are displayed on the map in a different style. For example use
different colors for different segment.(Done )
