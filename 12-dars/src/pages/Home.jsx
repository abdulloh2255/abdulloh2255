import { Link } from "react-router-dom";
import { FaClock } from "react-icons/fa6";
import { useCollection } from "../hooks/useCollection";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

function Home() {
  const { documents: cooks, error } = useCollection("cooks");

  const handleDelete = (id) => {
    deleteDoc(doc(db, "books", id))
      .then((result) => {
        console.log(result);
      })

      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {" "}
      <div className="flex site-container">
        {cooks &&
          cooks.map((cook) => {
            return (
              <div>
                <div className="site-container gap-[20px] ">
                  <div
                    onClick={() => handleDelete(cook.id)}
                    key={cook.id}
                    className="card  w-96 bg-base-100 shadow-xl"
                  >
                    <figure>
                      <img
                        className="object-cover w-full h-[250px]"
                        src="https://cdn.tasteatlas.com/images/dishes/27db9824904b49ec8e4164ce73bafb12.jpg?w=600"
                        alt="Shoes"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{cook.title}</h2>
                      <h3 className="flex gap-2 items-center">
                        <FaClock /> {cook.minute}
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Et, ab cupiditate fugiat sunt enim, in velit hic iusto
                        qui, ea dolore culpa pariatur aut voluptas? Error,
                        aspernatur doloribus. Dolorem, nemo?
                      </p>
                      <div className="card-actions justify-end">
                        <Link onClick="id" to="/card2" className="btn glass">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className="site-container">
        {" "}
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://img.povar.ru/mobile/d3/9d/fc/40/somsa_samosa-4902.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body text-white">
            <h2 className="card-title">Somsa</h2>
            <h3 className="flex gap-2 items-center">
              <FaClock /> minute 45
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              iste magnam sapiente? Laudantium possimus quod asperiores deserunt
              neque omnis placeat numquam, sapiente totam repellat temporibus et
              expedita nemo assumenda veritatis.
            </p>
            <div className="card-actions justify-end">
              <Link to="/card2" className="btn glass">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
