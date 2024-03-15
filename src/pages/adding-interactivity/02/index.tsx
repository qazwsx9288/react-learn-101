export const pageTitle = 'Complete the gallery'

import { useState } from 'react'
import { sculptureList } from './data.js'

export default function Gallery() {
  const [index, setIndex] = useState(0)
  const [showMore, setShowMore] = useState(false)

  function handleNextClick() {
    if (index === sculptureList.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }

  function handlePrevious() {
    if (index === 0) {
      setIndex(sculptureList.length - 1)
    } else {
      setIndex(index - 1)
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore)
  }

  const sculpture = sculptureList[index]
  return (
    <>
      <button className="bg-gray-300 p-2" onClick={handlePrevious}>
        Previous
      </button>
      <button className="bg-gray-300 p-2" onClick={handleNextClick}>
        Next
      </button>

      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button className="bg-gray-300 p-2" onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </>
  )
}
