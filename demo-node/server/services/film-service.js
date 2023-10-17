let id = 1
    const films = [
        {
            id: id++, title: "Film1", director: "Director 1" 
        },
        {
            id: id++, title: "Film2", director: "Director 2" 
        },
        {
            id: id++, title: "Film3", director: "Director 3" 
        },
        {
            id: id++, title: "Film4", director: "Director 4" 
        },
        {
            id: id++, title: "Film5", director: "Director 5" 
        },
    ]
    function findFilms() {
        return films
    }


    function findFilm(id) {
        if (!Number.isInteger(id)) {
            throw new Error(`Invalid films id '${id}'`)
        }
        for (const film of films) {
            if (film.id === id) {
                return film
            }
        }
    }

function createFilm(title, director) {
    const id = id++;
    const film = {id, title, direcotr}
}
export default {
    findFilms,
    findFilm
}