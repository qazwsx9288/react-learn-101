# Challenge 2 of 3: Fix a broken profile

Two Profile components are rendered side by side with different data. Press “Collapse” on the first profile, and then “Expand” it. You’ll notice that both profiles now show the same person. This is a bug.

Find the cause of the bug and fix it.

## code

```jsx
// App.js
import Profile from './Profile.js';

export default function App() {
  return (
    <>
      <Profile person={{
        imageId: 'lrWQx8l',
        name: 'Subrahmanyan Chandrasekhar',
      }} />
      <Profile person={{
        imageId: 'MK3eW3A',
        name: 'Creola Katherine Johnson',
      }} />
    </>
  )
}

```

```jsx
// Profile.js
import { getImageUrl } from './utils.js';

let currentPerson;

export default function Profile({ person }) {
  currentPerson = person;
  return (
    <div>
      <Header />
      <Avatar />
    </div>
  )
}

function Header() {
  return <h1>{currentPerson.name}</h1>;
}

function Avatar() {
  return (
    <img
      className="avatar"
      src={getImageUrl(currentPerson)}
      alt={currentPerson.name}
      width={50}
      height={50}
    />
  );
}

```

```js
// utils.js
export function getImageUrl(person) {
  return 'https://i.imgur.com/' + person.imageId + 's.jpg'
}

```
