export const pageTitle = 'Spot the mistake'

/**
 * Note
 * The first letter of React component name must be uppercase.
 */

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  )
}

function Profile() {
  return (
    <>
      <img src="https://i.imgur.com/QIrZWGIs.jpg" alt="Alan L. Hart" />
    </>
  )
}
