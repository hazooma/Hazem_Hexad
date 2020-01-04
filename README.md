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


# Task -
To run your query on the server , you should make post requests to `http://localhost:26062/calculateCost`

**Input/Output**
1. Input : The body of the request is a json where the key is the code of the product and the value is the number of items .
Example
```
{
	"CF":13
}
```
**Solution**
1. Change the server (`server/index.js`) so that the tracking data is
split into multiple arrays (segments). Check Helper.locations_To_Segments function

2. Adapt the front-end (`client/src/map_container.js`) so that the different
segments are displayed on the map in a different style. For example use
different colors for different segment.(Done )
