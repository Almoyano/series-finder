function handleSubmit(event) {
  event.preventDefault();
  fetch("//api.tvmaze.com/search/shows?q=" + searchInput.value)
    .then((response) => response.json())
    .then((data) => {
      globalData = data;
      renderSeries();
    });
}

form.addEventListener("submit", handleSubmit);
