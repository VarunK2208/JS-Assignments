let timeout;
document.getElementById('search').addEventListener('input', function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        document.getElementById('results').innerHTML = `<li>Result for "${this.value}"</li>`;
    }, 500);
});