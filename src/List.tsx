
const List = ({circuit}) => {
  return (
    <>
      {circuit.map((track: {id: number, price: string, name: string, description: string, image: string}) => {
        const { id, price, name, description, image } = track;
        return (
          <article key={id} className="single-tour">
            <img src={image} alt={name} />
            <span className="tour-price">{price}</span>
            <div className="tour-info">
              <h5>{name}</h5>
              <p>{description} <button className="info-btn">read more</button> </p>
              <button className="delete-btn btn-block btn">Not Interested</button>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
