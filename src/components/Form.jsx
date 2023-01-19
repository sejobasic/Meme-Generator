import React from 'react'
import { useState, useEffect } from 'react'

function Form() {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImg: 'http://i.imgflip.com/1bij.jpg',
  })
  const [allMemes, setAllMemes] = useState({})

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((resp) => resp.json())
      .then((data) => setAllMemes(data.data.memes))
  }, [])

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[randomNumber].url

    setMeme((prevState) => {
      return {
        ...prevState,
        randomImg: url,
      }
    })
  }

  function handleChange(event) {
    const { name, value } = event.target
    setMeme((prevState) => {
      return {
        ...prevState,
        [name]: value,
      }
    })
  }

  return (
    <main className='form-container'>
      <div>
        <div className='input-wrapper'>
          <input
            type='text'
            placeholder='Top Text'
            name='topText'
            value={meme.topText}
            onChange={handleChange}
          />
          <input
            type='text'
            placeholder='Bottom Text'
            name='bottomText'
            value={meme.bottomText}
            onChange={handleChange}
          />
        </div>
        <button onClick={getMemeImage}>Create a new meme</button>
      </div>
      <div className='img-container'>
        <img src={meme.randomImg} alt='meme image' />
        <h2 className='top'>{meme.topText}</h2>
        <h2 className='bottom'>{meme.bottomText}</h2>
      </div>
    </main>
  )
}

export default Form
