//using fetch APi

function RandomFt() {
    return fetch("https://dog.ceo/api/breeds/image/random") 
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json(); 
        })
        .then(data => console.log("Dog Image URL:", data.message)) 
        .catch(error => console.error("Fetch error:", error.message));
}

// Call the function
RandomFt();
