async function RandomFt() {   //async function is used 
    try {
        const response = await fetch("https://dummyjson.com/products"); // Fetching products

        if (!response.ok) {  // Check if the response is successful
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json(); // Convert response to JSON
        console.log("Products:", data.products); // Log products
    } catch (error) {
        console.error("Fetch error:", error.message); // Handle errors
    }
}

RandomFt();

//we used async/await as it returns promise automatically 
// await waits until the fetches the API and then gets the response
//errr handling done by both try and catch instead of catch thus makes it easy to debug 