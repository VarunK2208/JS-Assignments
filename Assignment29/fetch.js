function Quotesfetch() {                                    //creating a function for fetching quotes
    fetch("https://dummyjson.com/quotes")                       //fetching data from API 
    .then(response => response.json())                              //converting data to JSON
    .then(data => {                                                   //storing data in a variable
        let quotesHTML = "";                                              //quotesHTML variable to store HTML of quotes
        for (var i = 0; i < data.quotes.length; i++) {                     //looping through each quote
            quotesHTML += `"${data.quotes[i].quote}" - ${data.quotes[i].author}<br>`;           //extracting quote and author and adding to HTML
        }
        document.getElementById("quotes").innerHTML = quotesHTML;               //by DOM manipulation, adding quotes to the webpage
    })
    .catch(error => console.log(error));               //throwing error if there is any
}
Quotesfetch();
