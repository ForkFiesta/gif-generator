function search(keyword) {
  const API_KEY = "z2Nzye6agLAw7MOxLKJ9iYWN0XXV0Dzp";
  const img = document.querySelector("img");
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${keyword}`,
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    });
}

const button = document.querySelector("button");

button.addEventListener("click", (event) => {
  event.preventDefault();
  let searchItem = document.querySelector("input").value.trim();
  search(searchItem);
});
