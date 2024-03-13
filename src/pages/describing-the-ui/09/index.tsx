export const pageTitle = 'Write an expression inside JSX curly braces'

const baseUrl: string = 'https://i.imgur.com/'
const person: IPerson = {
  name: 'Gregorio Y. Zara',
  imageId: '7vQD0fP',
  imageSize: 's',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
}

type IPerson = {
  name: string
  imageId: string
  imageSize: string
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
        src={`${baseUrl}${person.imageId}${person.imageSize}.jpg`}
        alt={person.name}
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  )
}
