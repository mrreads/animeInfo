let searchInput = document.querySelector('input#search');
let searchResult = document.querySelector('.search-result');

let request = new XMLHttpRequest();

searchInput.addEventListener('input', () =>
{
    request.open('GET', `https://api.jikan.moe/v3/search/anime?q=${searchInput.value}&page=1`, true);

    request.onload = () => 
    {        
        data = JSON.parse(request.responseText)["results"];

        searchResult.innerHTML = '';
        data.forEach(anime =>
        {
            searchResult.innerHTML = searchResult.innerHTML + 
            `
            <div class="anime">
                <img src="${ anime.image_url }">
                <h2> ${ anime.title } </h2>
                <p> Episodes: ${ anime.episodes }</p>
            </div>
            `;                
        });
    }

    request.send();
});