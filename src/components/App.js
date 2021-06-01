import FoxCard from './FoxCard'
import { useState, useEffect } from 'react'

function App() {
  const [flexDirValue, setFlexDirValue] = useState("a")
  const [flexWrapValue, setFlexWrapValue] = useState("1")
  const [justifyContentValue, setJustifyContentValue] = useState("ff")
  const [foxes, setFoxes] = useState([])

  // Number randomizer
  function getRandomInt(max) {
    let randNum = Math.floor(Math.random() * max);
    if (randNum > 0) {
      return randNum
    } else {
      return 1
    }
  }

  // Generates a random array of foxes on page load
  useEffect(() => {
    setFoxes(function() {
        let arr = []
        let counter = 0
        while (counter < getRandomInt(201) ) {
          counter += 1
          arr = [...arr, { img: `https://randomfox.ca/images/${getRandomInt(124)}.jpg`, num: counter} ]
        }
        return arr
      })
  }, [])
  
  // Returns an array of FoxCard components for each fox to render
  const foxPics = foxes.map(function(foxPic) {
    return <FoxCard key={foxPic.num}
                    img={foxPic.img}
                    num={foxPic.num}
          />
  })

  function handleDirChange(e) {
    setFlexDirValue(e.target.value)
  }

  function handleWrapChange(e) {
    setFlexWrapValue(e.target.value)
  }

  function handleJustifyChange(e) {
    setJustifyContentValue(e.target.value)
  }

  return (
    <div className="page">
      <div className="sticky">
        <div id="header">
          <img src="https://i.imgur.com/m3t26eT.png" alt="logo" style={{height: "80px"}}/>
          <h2>An adorable Flexbox visualizer.</h2>
          <h3>Made with the <a href="https://randomfox.ca/">Random Fox API.</a></h3>
        </div>
        <div id="filters">
            <span className="select-label select-label-bold">.container &#123; </span><span className="select-label">flex-direction:</span>
            <select name="flex-direction" onChange={e => handleDirChange(e)}>
              {/* <option value="a">flex-direction</option> */}
              <option value="a">row;</option>
              <option value="b">row-reverse;</option>
              <option value="c">column;</option>
              <option value="d">column-reverse;</option>
            </select>
            <span className="select-label"> flex-wrap:</span>
            <select name="flex-wrap" onChange={e => handleWrapChange(e)}>
              {/* <option value="1">flex-wrap</option> */}
              <option value="1">wrap;</option>
              <option value="2">wrap-reverse;</option>
              <option value="3">nowrap;</option>
            </select>
            <span className="select-label"> justify-content:</span>
            <select name="justify-content" onChange={e => handleJustifyChange(e)}>
              {/* <option value="ff">justify-content</option> */}
              <option value="ff">space-evenly;</option>
              <option value="dd">space-between;</option>
              <option value="ee">space-around;</option>
              <option value="cc">center;</option>
              <option value="aa">flex-start;</option>
              <option value="bb">flex-end;</option>
            </select>
            <span className="select-label select-label-bold"> &#125;</span>
        </div>
      </div>
      {/* Flex container!!! */}
      <div className={ `${flexDirValue}-${flexWrapValue}-${justifyContentValue}` }>
        {/* Collection of fox pics to display */}
        {foxPics}
      </div>
    </div>
  );
  
}

export default App;