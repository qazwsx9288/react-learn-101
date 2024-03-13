export const pageTitle = 'Fix the mistake'

const person: IPerson = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
}

type IPerson = {
  name: string
  theme: {
    backgroundColor: string
    color: string
  }
}

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{`${person.name}'s Todos`}</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  )
}
