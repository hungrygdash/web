function PetCard(props) {
  return (
    <div className="pet-card">
        <h2>{props.name}</h2>
        <p>{props.emoji}</p>
        <p>Likes: {props.food}</p>
    </div>
  )
}

export default PetCard;