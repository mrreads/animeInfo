let categories = document.querySelector('.categories');

let request = new XMLHttpRequest();

let anime, temp;

function renderCategory(genre_id)
{
    request.open('GET', `https://api.jikan.moe/v3/genre/anime/${genre_id}/1`, true);
    
    request.onload = () => 
    {
        
        categories.innerHTML = categories.innerHTML + `<h3> ${ JSON.parse(request.responseText)["mal_url"].name } </h3>`;
        temp = document.createElement('div');
        temp.classList.add('search-result');

        data = JSON.parse(request.responseText)["anime"];

        data.forEach(anime =>
        {
            temp.innerHTML = temp.innerHTML +
            `
            <div class="anime">
                <img src="${ anime.image_url }">
                <h2> ${ anime.title } </h2>
                <p> Episodes: ${ anime.episodes }</p>
            </div>
            `;  
        });
        
        categories.append(temp);

        if (genre_id != 7)
        {
            
            renderCategory(genre_id + 1)
        }
        
    }
    
    request.send();
}

renderCategory(1);
