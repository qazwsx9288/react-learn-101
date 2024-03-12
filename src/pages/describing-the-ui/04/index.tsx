export const pageTitle = 'Your own component'

/**
 * Note
 *
 */

export default function BasePage() {
  return (
    <>
      <GoodJob />
    </>
  )
}

function GoodJob() {
  return (
    <>
      <h1 className="text-3xl font-bold">Good job!</h1>
    </>
  )
}
