class Handler
{
    constructor(params) 
    {
        this.request = new XMLHttpRequest();
    }

    searchAnime(name, page = 1)
    {
        this.request.open('GET', `https://api.jikan.moe/v3/search/anime?q=${name}&page=${page}`);

        this.request.onreadystatechange = function () 
        {
            if (this.readyState === 4) 
            {
                return JSON.parse(this.responseText);
            }
        };

        this.request.send();
    }

    
}

let animeInfo = new Handler();