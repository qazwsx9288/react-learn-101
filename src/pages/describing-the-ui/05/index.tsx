export const pageTitle = 'Split the components further'

/**
 * Note
 *
 */

import Gallery from './gallery'
import { Profile } from './profile.js'

export default function App() {
  return (
    <>
      <Gallery />
      <Profile />
    </>
  )
}
