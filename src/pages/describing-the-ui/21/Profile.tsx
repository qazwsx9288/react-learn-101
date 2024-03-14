import { getImageUrl } from './utils.js'

type IPerson = {
  imageId: string
  name: string
}

export default function Profile({ person }: { person: IPerson }) {
  return (
    <div>
      <Header name={person.name} />
      <Avatar person={person} />
    </div>
  )
}

function Header({ name }: { name: string }) {
  return <h1>{name}</h1>
}

function Avatar({ person }: { person: IPerson }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={50}
      height={50}
    />
  )
}
