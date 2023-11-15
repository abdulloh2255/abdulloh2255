import React from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function Home() {
  const { data, isPending, error } = useFetch();

  if (isPending) {
    return (
      <span className="loading loading-dots loading-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
    );
  }
  return (
    <div className="w-full">
      <div
        className="hero min-h-screen "
        style={{
          backgroundImage:
            "url(https://github.com/Kirlovon/Kinopoisk-Watch/raw/master/assets/image.webp)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold text-gray-300">
              Привет разработчик
            </h1>
            <p className="mb-5  text-gray-300">
              КиноПоиск — крупнейший русскоязычный сервис о кино. Его запустили
              в 2003 году Виталий Таций и Дмитрий Суханов.
            </p>
            <Link to="/kino" className="btn btn-primary">
              Начинать
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
