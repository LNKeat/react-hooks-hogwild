import React, { useState } from 'react'
import Nav from "./Nav";
import TileContainer from "./TileContainer"
import NarrowField from "./NarrowField"
import hogs from "../porkers_data";
console.log(hogs)

function App() {
	const [greasedFilterOn, setGreasedFilterOn] = useState(false)
	const [hogsToDisplay, setHogsToDisplay] = useState(hogs)

	function handleFilter(){
		setGreasedFilterOn(!greasedFilterOn)
		greasedFilterOn ? setHogsToDisplay(hogs.filter(hog => hog.greased === true)) : setHogsToDisplay(hogs)
	}

	function handleSortBy(e){
		const sortBy = e.target.value
    if(sortBy === 'name'){
      const sortedByName = [...hogsToDisplay].sort((a, b) => {
        let nameA = a.name.toLowerCase(),
          nameB = b.name.toLowerCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      })
			setHogsToDisplay(sortedByName)
    }else{
      const sortedByName = [...hogsToDisplay].sort((a, b) => {
        return a.weight - b.weight;
      })
			setHogsToDisplay(sortedByName)
    }
  }

	return (
		<div className="App">
			<Nav />
			<NarrowField greasedFilterOn={greasedFilterOn} handleSortBy={handleSortBy} handleFilter={handleFilter}  />
			<TileContainer hogs={hogsToDisplay} />
		</div>
	);
}

export default App;
