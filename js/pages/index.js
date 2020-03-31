let searchInput = document.querySelector('input#search');
let searchResult = document.querySelector('.search-result');

searchInput.addEventListener('input', () =>
{
    animeInfo.searchAnime(`${searchInput.value}`, searchResult);
});