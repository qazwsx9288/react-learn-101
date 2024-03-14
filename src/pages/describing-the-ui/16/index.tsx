export const pageTitle = 'Splitting a list in two'

import { people } from './data.js'
import { getImageUrl } from './utils.js'

export default function List() {
  const chemistList = people
    .filter((person) => {
      if (person.profession === 'chemist') {
        return true
      }
    })
    .map((person) => (
      <li key={person.id}>
        <img src={getImageUrl(person)} alt={person.name} />
        <p>
          <b>{person.name}:</b>
          {' ' + person.profession + ' '}
          known for {person.accomplishment}
        </p>
      </li>
    ))

  const elseList = people
    .filter((person) => {
      if (person.profession !== 'chemist') {
        return true
      }
    })
    .map((person) => (
      <li key={person.id}>
        <img src={getImageUrl(person)} alt={person.name} />
        <p>
          <b>{person.name}:</b>
          {' ' + person.profession + ' '}
          known for {person.accomplishment}
        </p>
      </li>
    ))

  return (
    <article>
      <h1 className="text-4xl">Chemists</h1>
      <ul>{chemistList}</ul>
      <h1 className="text-4xl">Everyone Else</h1>
      <ul>{elseList}</ul>
    </article>
  )
}
