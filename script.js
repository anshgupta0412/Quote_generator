document.addEventListener('DOMContentLoaded', () => {
    const quoteText = document.getElementById('quote');
    const quoteAuthor = document.getElementById('author');
    const button = document.querySelector('button');
    async function getQuote() {
      try {
        const response = await fetch('https://www.goodreads.com/quotes');
        if (!response.ok) throw new Error('Failed to fetch quote');
        const data = await response.json();
        quoteText.textContent = `"${data.content}"`;
        quoteAuthor.textContent = `— ${data.author}`;
      } catch (error) {
        quoteText.textContent = 'Oops! Could not fetch a quote.';
        quoteAuthor.textContent = '';
        console.error(error);
      }
    }
  
    button.addEventListener('click', getQuote);
  
    // Load an initial quote
    getQuote();
  });
  