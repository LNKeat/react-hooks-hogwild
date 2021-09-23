
function HogDetails({ hog, handleCloseDetails }){

  return (
    <div className ="expanded">
      <h2 style={{display:'inline'}}>{hog.name}</h2>
      <button onClick={handleCloseDetails} style={{float:'right'}}>X</button>
      <ul>
        <li>Specialty: {hog.specialty} </li>
        <li>Weight: {hog.weight}</li>
        <li>Greased: {hog.greased ? 'Yes': 'No'} </li>
        <li>Highest Medal Acheived: {hog['highest medal achieved']}</li>
      </ul>
    </div>
  )
}

export default HogDetails;