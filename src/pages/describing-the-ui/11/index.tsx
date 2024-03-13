export const pageTitle = 'Adjust the image size based on a prop'

import { getImageUrl } from './utils.js'

type IPerson = {
  name: string
  imageId: string
}

type IProps = {
  person: IPerson
  size: number
}

function Avatar({ person, size }: IProps) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person.imageId, size < 90 ? 's' : 'b')}
      alt={person.name}
      width={size}
      height={size}
    />
  )
}

export default function Profile() {
  return (
    <>
      <Avatar
        size={40}
        person={{
          name: 'Gregorio Y. Zara',
          imageId: '7vQD0fP'
        }}
      />
      <Avatar
        size={120}
        person={{
          name: 'Gregorio Y. Zara',
          imageId: '7vQD0fP'
        }}
      />
    </>
  )
}
