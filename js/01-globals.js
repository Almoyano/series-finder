"use strict";

const keepSeries = JSON.parse(localStorage.getItem("favoriteSeries"));
const paletteList = document.querySelector(".js-palette-serie");
const form = document.querySelector(".js-form");
const searchInput = document.querySelector(".js-search");
const favoriteSerie = document.querySelector(".js-favoriteserie");
const resetButton = document.querySelector(".js-reset");

let globalData = [];
let favoritesSeries = [];
