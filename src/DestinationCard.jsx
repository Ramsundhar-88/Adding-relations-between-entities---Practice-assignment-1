const DestinationCard = ({ destination }) => {
  return (
    <div>
       <img src={destination.image} alt={destination.name} width="200" />

      <div>

      <h3>{destination.name}</h3>
      <p>{destination.location}</p>
     
      <p>{destination.description}</p>
      <p>{destination.price}</p>
      </div>
    </div>
  );
};

export default DestinationCard;
