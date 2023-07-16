import React from "react";

export default function Card(props) {
  return (
    <>
      <div className="m-5 card w-96 glass">
        <figure>
          <img className="max-w-10 max-h-32"
            src={props.image}
            alt="product"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{props.title}</h2>
          <p>${props.price}</p>
          <div className="justify-center card-actions">
            <a href={`product/${props.id}`} className="btn btn-primary">Check</a>
          </div>
        </div>
      </div>
    </>
  );
}
