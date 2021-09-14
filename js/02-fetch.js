function renderSeries() {
  paletteList.innerHTML = "";
  for (const show of globalData) {
    console.log(show.show.name);
    paletteList.innerHTML += `<li data-id="${show.show.id}" class="palette-list-item js-card">
          <h2 class="item-name">${show.show.name}</h2></li>`;

    if (show.show.image === null) {
      paletteList.innerHTML += `<img
      class="item-imagen-box"
      src="https://via.placeholder.com/210x295/ffffff/666666/?
        text=TV"
      alt="${show.show.name}"
    />;`;
    } else {
      paletteList.innerHTML += `<img
      class="item-imagen-box"
      src="${show.show.image.medium}"
      alt="${show.show.name}"
    />;`;
    }
  }
  addListenersToCards();
}
