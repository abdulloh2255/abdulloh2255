import React from "react";
import { useCollection } from "../hooks/useCollection";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { toast } from "react-toastify";

function Home() {
  const { documents } = useCollection("book");

  const hendleDelete = async (id) => {
    await deleteDoc(doc(db, "book", id));

    toast.error("You delete an item");
  };

  return (
    <div>
      <div className="hero img  text-white">
        <div
          className="hero min-h-screen text-white"
          style={{
            backgroundImage:
              "url(https://www.mbfs.com/static/img/homepageDesktop.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold text-white">
                Hello there
              </h1>
              <p className="mb-5 text-white">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Pictures</button>
            </div>
          </div>
        </div>

        <div>
          {" "}
          {documents && (
            <>
              <ul>
                {documents.map((doc) => {
                  return (
                    <li key={doc.id}>
                      <h1>Title: {doc.Title}</h1>
                      <p>
                        Years: <em>{doc.Year}</em>
                      </p>
                      <p>Compony: {doc.Compony}</p>
                      <button
                        onClick={() => hendleDelete(doc.id)}
                        className="btn btn-outline btn-error"
                      >
                        Error
                      </button>
                    </li>
                  );
                })}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
