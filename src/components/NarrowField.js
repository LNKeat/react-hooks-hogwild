import React from 'react'

const styles = {margin: '3vh'}

function NarrowField({ handleSortBy, handleFilter, greasedFilterOn }){
  return (
    <div>
      <button style={styles} onClick={handleFilter}>{greasedFilterOn ? 'Show All Hogs' : 'Show Greased Hogs'}</button>
      <label style={styles}>Sort by:  
        <select name="sort" id="sort" onChange={handleSortBy}>Sort by: 
          <option>Select</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </label>
    </div>
  )
}

export default NarrowField;