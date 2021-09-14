if (keepSeries) {
  favoritesSeries = keepSeries;
  renderSeriesFavorites();
}

function addListenersToCards() {
  const allCards = document.querySelectorAll(".js-card");

  for (const card of allCards) {
    card.addEventListener("click", handleClickCard);
  }
}
addListenersToCards();

function handleClickCard(event) {
  const whereIAddedTheEvent = event.currentTarget;
  const selectedId = parseInt(whereIAddedTheEvent.dataset.id);
  const serieFavoriteInfo = favoritesSeries.find(
    (serie) => serie.show.id === selectedId
  );
  if (serieFavoriteInfo === undefined) {
    const serieInfo = globalData.find((serie) => serie.show.id === selectedId);
    favoritesSeries.push(serieInfo);
  } else {
    const idSerie = favoritesSeries.indexOf(serieFavoriteInfo);
    favoritesSeries.splice(idSerie, 1);
  }

  renderSeriesFavorites();

  localStorage.setItem("favoriteSeries", JSON.stringify(favoritesSeries));
}

function renderSeriesFavorites() {
  favoriteSerie.innerHTML = "";
  for (const show of favoritesSeries) {
    console.log(show.show.name);
    favoriteSerie.innerHTML += `<li data-id="${show.show.id}" class="palette-list-item favorite">
            <h2 class="item-name">${show.show.name}</h2></li>`;

    if (show.show.image === null) {
      favoriteSerie.innerHTML += `<img
        class="item-imagen-box"
        src="https://via.placeholder.com/210x295/ffffff/666666/?
          text=TV"
        alt="${show.show.name}"
      />;`;
    } else {
      favoriteSerie.innerHTML += `<img
        class="item-imagen-box"
        src="${show.show.image.medium}"
        alt="${show.show.name}"
      />;`;
    }
  }
  addListenersToCards();
}
