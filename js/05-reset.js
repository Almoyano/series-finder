function handleReset() {
  favoritesSeries = [];
  localStorage.clear("favoriteSeries");
  renderSeriesFavorites();
}

resetButton.addEventListener("click", handleReset);
