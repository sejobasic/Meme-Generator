import React from 'react'

function Form() {
  return (
    <main className='form-container'>
      <form>
        <div className='input-wrapper'>
          <input type='text' placeholder='Top text' />
          <input type='text' placeholder='Bottom text' />
        </div>
        <button>Get a new meme</button>
      </form>
    </main>
  )
}

export default Form
