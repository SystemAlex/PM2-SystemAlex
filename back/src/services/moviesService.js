const moviesService = {
    getMovies: () => {
        const movies = [
            {
                title: "Guardians of the Galaxy Vol. 2",
                year: 2017,
                director: "James Gunn",
                duration: "2h 16min",
                genre: ["Action", "Adventure", "Comedy"],
                rate: 7.7,
                poster:
                    "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
            },
            {
                title: "Star Wars: Episode IV - A New Hope",
                year: 1977,
                director: "George Lucas",
                duration: "2h 1min",
                genre: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
                rate: 8.7,
                poster:
                    "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
            },
            {
                title: "The Lord of the Rings: The Fellowship of the Ring",
                year: 2001,
                director: "Peter Jackson",
                duration: "2h 58min",
                genre: ["Action", "Adventure", "Drama", "Fantasy"],
                rate: 8.8,
                poster:
                    "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
            },
            {
                title: "The Avengers",
                year: 2012,
                director: "Joss Whedon",
                duration: "2h 23min",
                genre: ["Action", "Sci-Fi"],
                rate: 8,
                poster:
                    "https://m.media-amazon.com/images/M/MV5BNGE0YTVjNzUtNzJjOS00NGNlLTgxMzctZTY4YTE1Y2Y1ZTU4XkEyXkFqcGc@._V1_QL75_UX190_CR0,0,190,281_.jpg",
            },
            {
                title: "Mission: Impossible - Ghost Protocol",
                year: 2011,
                director: "Brad Bird",
                duration: "2h 12min",
                genre: ["Action", "Adventure", "Thriller"],
                rate: 7.4,
                poster:
                    "https://m.media-amazon.com/images/M/MV5BMTY4MTUxMjQ5OV5BMl5BanBnXkFtZTcwNTUyMzg5Ng@@._V1_QL75_UX190_CR0,0,190,281_.jpg",
            },
        ];

        return movies;
    }
}

module.exports = moviesService;