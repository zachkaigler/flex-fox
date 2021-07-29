import FoxCard from './FoxCard'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import logo from '../images/flex-fox.png'

function App() {
  const [flexDirValue, setFlexDirValue] = useState("row")
  const [flexWrapValue, setFlexWrapValue] = useState("wrap")
  const [justifyContentValue, setJustifyContentValue] = useState("space-between")
  const [alignItemsValue, setAlignItemsValue] = useState("center")
  const [wasClicked, setWasClicked] = useState(false)
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

  function getRandomInt(max) {
    let randNum = Math.floor(Math.random() * max);
    if (randNum > 0) {
      return randNum
    } else {
      return 1
    }
  }

  useEffect(() => {
    setFoxes(function() {
        let arr = []
        let counter = 0
        while (counter < getRandomInt(201)) {
          counter += 1
          arr = [...arr, {img: `https://randomfox.ca/images/${getRandomInt(124)}.jpg`, num: counter} ]
        }
        return arr
      })
  }, [])
  
  const foxPics = foxes.map(function(foxPic) {
    return <FoxCard key={foxPic.num}
                    img={foxPic.img}
                    num={foxPic.num}
          />
  })

  const copy = (val) => {
    let dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.setAttribute("id", "dummy_id");
    document.getElementById("dummy_id").value=val;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    setWasClicked(true)
  }

  const anim = useSpring({
    config: {
      duration: 500
    },
    opacity: wasClicked ? 1 : 0
  })

  return (
    <>
      <div className="page">
        <div className="sticky">
          <div id="header">
            <div className="top">
              <img src={logo} alt="logo" style={{height: "10rem"}}/>
              <h2>An adorable Flexbox visualizer.</h2>
              <h3>Made with the <a href="https://randomfox.ca/" target="_blank" rel="noreferrer">Random Fox API.</a></h3>
            </div>
            <div id="filters">
              <div className="form-container">
                <div className="select-label select-label-bold" id="top-label">.container &#123; </div><br/>
                <div className="select-block">
                  <div className="select-label">display: <span id="flex" style={{ color: "#4b4b4b", fontWeight: "normal" }}>flex;</span></div><br/>
                </div>
                <div className="select-block">
                  <span className="select-label">flex-direction:</span>
                  <select name="flex-direction" className="dropdown" onChange={e => {setFlexDirValue(e.target.value); setWasClicked(false)}}>
                    <option value="row">row;</option>
                    <option value="row-reverse">row-reverse;</option>
                    <option value="column">column;</option>
                    <option value="column-reverse">column-reverse;</option>
                  </select><br/>
                </div>
                <div className="select-block">
                  <span className="select-label"> flex-wrap:</span>
                  <select name="flex-wrap" onChange={e => {setFlexWrapValue(e.target.value); setWasClicked(false)}}>
                    <option value="wrap">wrap;</option>
                    <option value="wrap-reverse">wrap-reverse;</option>
                    <option value="nowrap">nowrap;</option>
                  </select><br/>
                </div>
                <div className="select-block">
                  <span className="select-label"> justify-content:</span>
                  <select name="justify-content" onChange={e => {setJustifyContentValue(e.target.value); setWasClicked(false)}}>
                    <option value="space-between">space-between;</option>
                    <option value="space-evenly">space-evenly;</option>
                    <option value="space-around">space-around;</option>
                    <option value="center">center;</option>
                    <option value="flex-start">flex-start;</option>
                    <option value="flex-end">flex-end;</option>
                  </select><br/>
                </div>
                <div className="select-block">
                  <span className="select-label"> align-items:</span>
                  <select name="justify-content" onChange={e => {setAlignItemsValue(e.target.value); setWasClicked(false)}}>
                    <option value="center">center;</option>
                    <option value="flex-start">flex-start;</option>
                    <option value="flex-end">flex-end;</option>
                  </select><br/>
                </div>
                <span className="select-label select-label-bold" id="bottom-label"> &#125;</span>
              </div>
              <button onClick={() => copy(`display: flex;\nflex-direction: ${flexDirValue};\nflex-wrap: ${flexWrapValue};\njustify-content: ${justifyContentValue};\nalign-items: ${alignItemsValue};`)}>{ !wasClicked ? "Flex on me!" : <animated.span style={anim}>Copied code!</animated.span> }</button>
            </div>
            <div className="footer">
              <p>Designed by <a href="https://zachkaigler.com/" target="_blank" rel="noreferrer">Zach Kaigler</a></p>
            </div>
          </div>
        </div>
        <div className="main-content">
          <FlexContainer>
            {foxPics}
          </FlexContainer>
        </div>
      </div>
      <a href="https://github.com/zachkaigler/flex-fox" id="github" target="_blank" rel="noreferrer"><img src="https://i.imgur.com/Yt24doC.png" alt="github" style={{ height: "75px" }} /></a>
    </>
  );
}

export default App;