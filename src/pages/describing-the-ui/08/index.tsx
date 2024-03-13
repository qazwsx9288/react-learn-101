export const pageTitle = 'Extract information into an object'

const person: IPerson = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  },
  img: 'https://i.imgur.com/7vQD0fPs.jpg'
}

type IPerson = {
  name: string
  theme: {
    backgroundColor: string
    color: string
  }
  img: string
}

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{`${person.name}'s Todos`}</h1>
      <img className="avatar" src={person.img} alt={person.name} />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  )
}
