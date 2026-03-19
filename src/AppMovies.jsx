import React, {useState} from 'react';
import Poster from "./Poster";

import Matrix from './media/matrix.jpeg'
import One from './media/OnePlusOne.jpeg'
import Terminator from './media/Terminator.jpeg'
import FF from './media/f&f.jpeg'


export const MOVIES = [
    {
        id: 1,
        name: 'Fast & Furious',
        description: 'Cars, speed, danger',
        img: FF,
        thumbnail: ''
    },

    {
        id: 2,
        name: 'Terminator',
        description: 'Danger, Future, Thriller',
        img: Terminator,
        author: {name: "James Cameron"}
    },

    {
        id: 3,
        name: 'Matrix',
        description: 'Fantasy, SciFi',
        img: Matrix,
        author: {name: 'Lana Vachovsky'},
    },

    {
        id: 4,
        name: '1 + 1',
        description: 'Comedy',
        img: One,
        author: {name: 'Rodriges'},
    }
]


const AppMovies = () => {
    const [dark, setDark] = useState(false);

    return (
        <div className={dark ? 'app-container dark' : 'app-container'}>
            <div className="app-header">
                <h1>My Movies</h1>
                <button className="theme-btn" onClick={() => setDark(!dark)}>
                    {dark ? '☀ Day' : '☾ Night'}
                </button>
            </div>
            <div className="movies-grid">
                {MOVIES.map((movie) => (
                    <Poster
                        key={movie.id}
                        name={movie.name}
                        description={movie.description}
                        author={movie.author}
                        img={movie.img}
                    />
                ))}
            </div>
        </div>
    );
};

export default AppMovies
