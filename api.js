fetch('https://type.fit/api/quotes', {
  method: 'GET',
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    const randomQuotes = getRandomQuotes(data, 1);
    displayQuotes(randomQuotes);
  })
  .catch(function (error) {
    console.error('Error:', error);
  });

// Function to get a specified number of random quotes
function getRandomQuotes(quotes, limit) {
  const shuffled = quotes.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, limit);
}

// Function to display quotes on the page
function displayQuotes(quotes) {
  const quotesContainer = document.getElementById('quotes');
  quotes.forEach((quote) => {
    const quoteElement = document.createElement('p');
    quoteElement.textContent = `"${quote.text}" - ${quote.author || 'Unknown'}`;
    quotesContainer.appendChild(quoteElement);
  });
}
