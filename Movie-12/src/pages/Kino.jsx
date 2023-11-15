import { Link } from "react-router-dom";
import { useState } from "react";
import spider from "../img/spider.jpg"
import { BiSolidLike } from "react-icons/bi";
function Kino() {
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

  const deleteTodo = (id) => {
    setMovie((prev) => {
      return prev.filter((event) => {
        return event.id !== id;
      });
    });
  };

  return (
    <div className="    w-96  shadow-xl transition duration-300  hover:bg-slate-800">
      {movie.map((movie) => {
        return (
          <div className="items-center" key={movie.id}>
            <figure className="px-10 pt-10 ">
              <img
                src={movie.img}
                alt="Shoes"
                className="rounded-xl h-[300px] w-[318px]"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-center mt-4  group-hover:text-slate-600 text-slate-200 text-3xl">
                {movie.Title}
              </h2>
              <div className="px-5 gap-20  group-hover:text-slate-700 py-2 text-xl flex justify-between mt-5">
                <span>
                <BiSolidLike />
                </span>
                <span className="flex gap-2">
                  {movie.Ratings}
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAixJREFUSEutlb1rU1EYxn/PtRZx0OIm1FrRRe/NVJycRYVSHIqLYHExS21uiqKgQwRFhNLcxA5KQRcHRdShKig4ulkHc6OLYor9A6qD4Efzyk0/SNNbe6I9cJZznvf5na/3PaKNZuV92xK5Rj5+cw2TqzDRWZS50ACElRuucc4AKxzopMubbRjP1btVeP/TBeIOiDJZsFsLpnZGYXVywwBWwKPL/wTqXQTUmKvuVYH6ehCnHVgpOIHxYKWZDSqsPtoYQBRUgKDF7I3C+OA/A8wQ40E3nh1BSj9v02nq9orReFbC0mCycX8HHv3g9YIlvQe0B+gBOtZb4eL8L+AL2GekGVANrMa8PVNjpVHmLrIhRzNHmSbJVbLLl2yRfx100TH67zJxTbn4ciMpm5UWZYbBbv4HxJJCorAyseSx6playR/CdAfw2gTVkZ1Urnq/OS41DywK+oHHwGZHyA9gUGH8tFW/ZqJZMSgjzroBFCms5FOf6VoGFgUvgcNuAF4ojI+2C5gDtjsCviqMu5wBNrF/N7831RzNF2Set0sj7xbKeVNLv+Ri5jiyJy3apP6PLY6dAzpXzNdtQKPVKTdAKbiKcalJ/JCO+fMa/jCTjDV2ON8xhtngssa4onxccANE/nPQMWAas5zy1ddpx2VF/xBSCehDTCkXDzgCMm+RFRmJ761VJZeMGrWs7J/CNJxWvldncvJ77ezbouz093Yu2W73bU2LcfrR2gG1av8AkdK34oZGcAAAAAAASUVORK5CYII="
                    alt=""
                  />
                </span>
                <span>{movie.Year}</span>
              </div>
              <div>
                <Link to="/kino2" className="btn btn-outline bg-black">
                  Читать далее...
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Kino;
