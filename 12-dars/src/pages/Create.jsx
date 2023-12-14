import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
function Create() {
  const [title, setTitle] = useState();
  const [time, setTime] = useState();
  const [ingredients, setIngredients] = useState();
  const [img, setImg] = useState();
  const [method, setMethod] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const docRef = await addDoc(collection(db, "cooks"), {
      title,
      time,
      ingredients,
      img,
      method,
    });
    console.log('Document written with ID:', docRef.id )
    setTitle('')
    setTime('')
    setIngredients('')
    setImg('')
    setMethodnpm('')

  };
  return (
    <form onSubmit={handleSubmit}>
      <div className=" flex flex-col items-center py-[50px]">
        <h1 className="text-center text-4xl font-medium mb-[18px]">
          Create New Recipie{" "}
        </h1>

        <form>
          <div className="form-control w-full max-w-xs mb-4">
            <label className="label">
              <span className="label-text">Title:</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="form-control w-full max-w-xs mb-4">
            <label className="label">
              <span className="label-text">Cooking Time:</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>

          <div className="form-control w-full max-w-xs mb-4">
            <label className="label">
              <span className="label-text">Ingredients:</span>
            </label>

            <div className="flex gap-5 mb-3">
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
              />
              <button className="btn glass">Add</button>
            </div>
            <p>
              Ingredients: <span>Tuz, Go'sht, Suv</span>
            </p>
          </div>

          <div className="form-control w-full max-w-xs mb-4">
            <label className="label">
              <span className="label-text">Image Url:</span>
            </label>
            <input
              type="url"
              placeholder="Past Url"
              className="input  input-bordered w-full max-w-xs"
              value={img}
              onChange={(e) => setImg(e.target.value)}
            />
          </div>

          <div className="form-control w-full max-w-xs mb-4">
            <label className="label">
              <span className="label-text">Method:</span>
            </label>
            <textarea
              type="text"
              placeholder="Type here"
              className=" textarea  input-bordered w-full max-w-xs"
              value={method}
              onChange={(e) => setMethod(e.target.value)}
            ></textarea>
          </div>

          <button className="btn glass">Create</button>
        </form>
      </div>
    </form>
  );
}

export default Create;
