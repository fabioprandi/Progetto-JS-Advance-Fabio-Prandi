const button = document.getElementById('button');
const input = document.getElementById('textbox');

button.addEventListener('click', () => {
  const searchText = input.value;
  fetch('https://openlibrary.org/search.json' + encodeURIComponent(searchText))
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });
});
