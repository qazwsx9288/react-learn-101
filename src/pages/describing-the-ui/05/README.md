# Challenge 1 of 1: Split the components further

Currently, `Gallery.js` exports both Profile and Gallery, which is a bit confusing.

Move the Profile component to its own `Profile.js`, and then change the App component to render both `<Profile />` and `<Gallery />` one after another.

You may use either a default or a named export for Profile, but make sure that you use the corresponding import syntax in both `App.js` and `Gallery.js`! You can refer to the table from the deep dive above:

| Syntax  | Export statement                      | Import statement                            |
|---------|---------------------------------------|---------------------------------------------|
| Default | `export default function Button() {}` | `import Button from './Button.js';`        |
| Named   | `export function Button() {}`         | `import { Button } from './Button.js';`    |

`App.js`

```js
import Gallery from './Gallery.js';
import { Profile } from './Gallery.js';

export default function App() {
  return (
    <div>
      <Profile />
    </div>
  );
}
```

`Gallery.js`

```js
// Move me to Profile.js!
export function Profile() {
  return (
    <img
      src="https://i.imgur.com/QIrZWGIs.jpg"
      alt="Alan L. Hart"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
```

`Profile.js`

```js
// empty js

```
