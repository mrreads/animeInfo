
class Handler
{
    constructor(params) 
    {
        this.request = new XMLHttpRequest();
        this.data;
    }

    searchAnime(name, element, page = 1)
    {
        this.request.open('GET', `https://api.jikan.moe/v3/search/anime?q=${name}&page=${page}`, true);

        this.request.onload = () => 
        {
            this.data = JSON.parse(this.request.responseText)["results"];
            console.log(this.data);

            element.innerHTML = '';
            this.data.forEach(anime =>
            {
                element.innerHTML = element.innerHTML + 
                `
                <div class="anime">
                    <img src="${ anime.image_url }">
                    <h2> ${ anime.title } </h2>
                    <p> Episodes: ${ anime.episodes }</p>
                </div>
                `;                
            });
        }

        this.request.send();
    }

    getAnime(id)
    {
        this.request.open('GET', `https://api.jikan.moe/v3/anime/${id}`);
        this.request.send();

        this.request.onreadystatechange = function () 
        {
            if (this.request.readyState === 4) 
            {
                return JSON.parse(this.responseText);
            }
        };

        
    }
}

let animeInfo = new Handler();