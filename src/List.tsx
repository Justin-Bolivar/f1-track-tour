import { useState } from "react";

const List = ({circuit}) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      {circuit.map((track: {id: number, price: string, name: string, description: string, image: string}) => {
        const { id, price, name, description, image } = track;
        return (
          <article key={id} className="single-tour">
            <img src={image} alt={name} className="img" />
            <span className="tour-price">{price}</span>
            <div className="tour-info">
                <h5>{name}</h5>
                <p>
                  {readMore ? description: description.substring(0, 100) + "..."}
                   <button onClick={() => setReadMore(!readMore)} className="info-btn">
                      {readMore ? 'Read Less' : 'Read More'}
                   </button> 
                </p>
                <button className="delete-btn btn-block btn">Not Interested</button>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
