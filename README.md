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


# Environment -
To run your query on the server , you should make **post** requests to `http://localhost:26062/calculateCost`

**Input/Output**
1. Input : The body of the request is a json where the key is the code of the product and the value is the number of items .
Example
```
{
	"CF":13
}

```
2. Output : the output is a json that contains the total cost and the optimal way to divide the amount into packs .
Example output for the previous Input 
```
{
    "Orders": [
        {
            "order": "13 CF",
            "totalCost": 25.85,
            "optimalPacks": [
                {
                    "packLimit": 3,
                    "used": 1,
                    "pricePerPack": 5.95
                },
                {
                    "packLimit": 5,
                    "used": 2,
                    "pricePerPack": 9.95
                }
            ]
        }
    ]
}
```
This means the totalCost: 25.85,and the packs used are 1 of pack that carries 3, and 2 of the packs that carries 5 .
- 2 x 5 $9.95
- 1 x 3 $5.95

**Solution**
1. Solution Logic is using **Dynamic Programming** algorithm to find the minumum number of packs to form the desired target amount . 
the magic is in the helper method .
