//using fetch APi

function RandomFt() {
    return fetch("https://dummyjson.com/products") //fetched products from api
        .then(response => {
            if (!response.ok) {    //if returns false if it doesnt fetch api
                throw new Error(`HTTP error! Status: ${response.status}`);  //throws error 
            }
            return response.json(); //comes in json format
        })
        .then(data => console.log("Products:", data.products))  //fetches data from above url 
        .catch(error => console.error("Fetch error:", error.message)); // throws error if we make ani manipulations in data 
}

RandomFt();
