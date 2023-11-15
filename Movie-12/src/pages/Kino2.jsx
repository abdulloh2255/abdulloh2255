import React from "react";
import { useState } from "react";
import spider from "../img/spider.jpg";

function Kino2() {
  const [movie, setMovie] = useState([
    {
      id: 1,
      img: spider,
      Title: "The Death of Spiderman",
      Year: "2015",
      Rated: "N/A",
      Released: "23 Apr 2015",
      Runtime: "N/A",
      Genre: "Animation, Short",
      Director: "Rogelio Castañeda",
      Writer: "N/A",
      Actors: "Gustavo Ancarani, Nicolas Ancarani, Xavier Hernandez",
      Plot: "N/A",
      Language: "Spanish",
      Country: "Mexico",
      Awards: "N/A",
      Poster: "N/A",
      Ratings: [7.6],
      Metascore: "N/A",
      imdbRating: "N/A",
      imdbVotes: "N/A",
      imdbID: "tt5921428",
      Type: "movie",
      DVD: "N/A",
      BoxOffice: "N/A",
      Production: "N/A",
      Website: "N/A",
      Response: "True",
    },
  ]);

  const deleteMovie = (id) => {
    setMovie((prev) => {
      return prev.filter((event) => {
        return event.id !== id;
      });
    });
  };

  return (
    <div>
      {movie.map((movie) => {
        return (
          <div key={movie.id}>
            <div className="card lg:card-side bg-base-100 shadow-xl transition duration-300  hover:bg-slate-800">
              <figure className="px-10 pt-10 p-10">
                <img
                  className="w-[500px] h-[450px] "
                  src={movie.img}
                  alt="Album"
                />
              </figure>
              <div className="card-body text-white">
                <h1 className="card-title">Title | {movie.Title}</h1>
                <hr />
                <br />
                <h2 className="card-year"> Year | {movie.Year}</h2>
                <hr />
                <br />
                <h3 className="card-released">Released | {movie.Released}</h3>
                <hr />
                <br />
                <h4 className="card-genre">Genre | {movie.Genre}</h4>
                <hr />
                <br />
                <h5 className="card-director">Director | {movie.Director}</h5>
                <hr />
                <br />
                <h6 className="card-language">Language | {movie.Language}</h6>
                <hr />
                <br />
                <p className="card-actors font-bold text-white">
                  Actors | {movie.Actors}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Kino2;
