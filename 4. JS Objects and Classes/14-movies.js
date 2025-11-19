function solve(input){
    const patterns = [
        /^addMovie (?<name>.+)$/,
        /^(?<name>.+) directedBy (?<director>.+)$/,
        /^(?<name>.+) onDate (?<date>.+)$/
    ];

    const movies = {};

    for (const el of input){
        let match;
        if ((match = el.match(patterns[0])) !=null){
            const name = match.groups["name"];
            movies[name] = {name};
        } else if ((match = el.match(patterns[1])) !=null){
            const name = match.groups["name"];
            const director = match.groups["director"];
            if (movies.hasOwnProperty(name)){
                movies[name].director = director
            }
            
        }else if ((match = el.match(patterns[2])) !=null){
            const name = match.groups["name"];
            const date = match.groups["date"];

            if (movies.hasOwnProperty(name)){
                movies[name].date = date;
            }
            
        }
    }

    for(const movie of Object.values(movies)){
        if (movie.name && movie.director && movie.date){
            console.log(JSON.stringify(movie));
        }
    }
}

solve(["addMovie Fast and Furious", "addMovie Godfather", "Inception directedBy Christopher Nolan", "Godfather directedBy Francis Ford Coppola", "Godfather onDate 29.07.2018", "Fast and Furious onDate 30.07.2018", "Batman onDate 01.08.2018", "Fast and Furious directedBy Rob Cohen"]);
solve(["addMovie The Avengers", "addMovie Superman", "The Avengers directedBy Anthony Russo", "The Avengers onDate 30.07.2010", "Captain America onDate 30.07.2010", "Captain America directedBy Joe Russo"]);
