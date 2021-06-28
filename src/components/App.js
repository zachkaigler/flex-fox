import FoxCard from './FoxCard'
import { useState, useEffect } from 'react'
import styled from 'styled-components'

function App() {
  const [flexDirValue, setFlexDirValue] = useState("row")
  const [flexWrapValue, setFlexWrapValue] = useState("wrap")
  const [justifyContentValue, setJustifyContentValue] = useState("space-between")
  const [alignItemsValue, setAlignItemsValue] = useState("center")
  const [foxes, setFoxes] = useState([])

  const FlexContainer = styled.div`
    display: flex;
    flex-direction: ${flexDirValue};
    flex-wrap: ${flexWrapValue};
    justify-content: ${justifyContentValue};
    align-items: ${alignItemsValue};
    background-color: #fff1e3;
    padding-bottom: 75px;
    margin-left: 10%;
    margin-right: 10%;
  `

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
          arr = [...arr, {img: `https://randomfox.ca/images/${getRandomInt(124)}.jpg`, num: counter} ]
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

  return (
    <>
      <div className="page">
        <div className="sticky">
          <div id="header">
            <img src="https://i.imgur.com/m3t26eT.png" alt="logo" style={{height: "80px"}}/>
            <h2>An adorable Flexbox visualizer.</h2>
            <h3>Made with the <a href="https://randomfox.ca/">Random Fox API.</a></h3>
          </div>
          <div id="filters">
              <span className="select-label select-label-bold">.container &#123; </span><span className="select-label">display: flex; flex-direction:</span>
              <select name="flex-direction" onChange={e => setFlexDirValue(e.target.value)}>
                <option value="row">row;</option>
                <option value="row-reverse">row-reverse;</option>
                <option value="column">column;</option>
                <option value="column-reverse">column-reverse;</option>
              </select>
              <span className="select-label"> flex-wrap:</span>
              <select name="flex-wrap" onChange={e => setFlexWrapValue(e.target.value)}>
                <option value="wrap">wrap;</option>
                <option value="wrap-reverse">wrap-reverse;</option>
                <option value="nowrap">nowrap;</option>
              </select>
              <span className="select-label"> justify-content:</span>
              <select name="justify-content" onChange={e => setJustifyContentValue(e.target.value)}>
                <option value="space-between">space-between;</option>
                <option value="space-evenly">space-evenly;</option>
                <option value="space-around">space-around;</option>
                <option value="center">center;</option>
                <option value="flex-start">flex-start;</option>
                <option value="flex-end">flex-end;</option>
              </select>
              <span className="select-label"> align-items:</span>
              <select name="justify-content" onChange={e => setAlignItemsValue(e.target.value)}>
                <option value="center">center;</option>
                <option value="flex-start">flex-start;</option>
                <option value="flex-end">flex-end;</option>
              </select>
              <span className="select-label select-label-bold"> &#125;</span>
          </div>
        </div>
        <FlexContainer>
          {foxPics}
        </FlexContainer>
      </div>
      <a href="https://github.com/zachkaigler/flex-fox" id="github"><img src="https://i.imgur.com/Yt24doC.png" alt="github" style={{ height: "75px" }} /></a>
    </>
  );
}

export default App;