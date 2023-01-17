import React from 'react'

function Form() {
  return (
    <main className='form-container'>
      <form>
        <div className='input-wrapper'>
          <input type='text' placeholder='Top Text' />
          <input type='text' placeholder='Bottom Text' />
        </div>
        <button>Get a new meme</button>
      </form>
    </main>
  )
}

export default Form
