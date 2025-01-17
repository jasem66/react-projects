import React, { useState } from 'react';


const Tour = ({ image, name, id, price, info, clearTours }) => {
  const [readMore, setReadMore] = useState(false)

 
  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 100)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'Show Less' : 'Read More'}
          </button>
        </p>
        <button
          className='delete-btn'
          onClick={() => {
            clearTours(id)
          }}
        >
          not intersted
        </button>
      </footer>
    </article>
  )
}

export default Tour;
