Welcome to my solution to Hexad task by me Hazem !


# Overview
Background:
A bakery used to base the price of their produce on an individual item cost. So if a customer ordered
10 cross buns then they would be charged 10x the cost of single bun. The bakery has decided to start
selling their produce prepackaged in bunches and charging the customer on a per pack basis. So if the
shop sold vegemite scroll in packs of 3 and 5 and a customer ordered 8 they would get a pack of 3 and
a pack of 5. The bakery currently sells the following products:
Name Code Packs
Vegemite Scroll VS5 3 @ $6.99
5 @ $8.99
Blueberry Muffin MB11 2 @ $9.95
5 @ $16.95
8 @ $24.95
Croissant CF 3 @ $5.95
5 @ $9.95
9 @ $16.99

Task:
Given a customer order you are required to determine the cost and pack breakdown for each product. To save on shipping space each order should contain the minimal number of packs.
Input:
Each order has a series of lines with each line containing the number of items followed by the
product code. An example input:
10 VS5
14 MB11
13 CF
Output:
A successfully passing test(s) that demonstrates the following output:
10 VS5 $17.98
2 x 5 $8.99
14 MB11 $54.8
1 x 8 $24.95
3 x 2 $9.95
13 CF $25.85
2 x 5 $9.95
1 x 3 $5.95


# Getting started
Before you start you should have a recent version of `npm` and `node`
installed.
To start the server go into the `server` directory and run
```
  npm install
  node index.js
```
To see whether the server works check <http://localhost:3000> and see if you
get a JSON object with a example tracking data.

To build the client go into the directory `client` and run
```
npm install
npm run start
```
Then the font-end should automatically open in your browser (localhost:8080). Make sure that
the server is still running! Now you sould see a visual representation of the
tracking data on a map.

It should look like this: ![Screenshot](./screenshot.png)

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
