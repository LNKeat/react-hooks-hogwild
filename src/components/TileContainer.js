import React, { useState } from 'react'
import Tile from './Tile';
import HogDetails from './HogDetails';

function TileContainer({ hogs }) {
  const [selectedHog, setSelectedHog] = useState(null)
  function handleHogClick(e) {
    setSelectedHog(e.target.value)
  }

  function handleCloseDetails() {
    setSelectedHog(null)
  }

  let featuredHog;
  for (let hog of hogs) {
    if (hog.name === selectedHog) {
      featuredHog = hog
    }
  }


  return (
    <div className="ui grid container">
      {
        selectedHog !== null ? <HogDetails hog={featuredHog} handleCloseDetails={handleCloseDetails} /> : null
      };

      {
        hogs.map(hog => <Tile key={hog.name} hog={hog} handleHogClick={handleHogClick} />)
      }
    </div>
  )
}

export default TileContainer