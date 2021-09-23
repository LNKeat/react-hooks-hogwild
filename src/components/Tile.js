function Tile({ hog, handleHogClick }){
  return (
    <div className="ui eight wide column" style={{cursor: 'pointer'}}>
      <img className="minBackgroundSneak" src={hog.image} alt={hog.name} />
      <h3 className="PigTile">{hog.name}</h3>
      <button value={hog.name} onClick={handleHogClick}>View</button>
    </div>
  )
}

export default Tile