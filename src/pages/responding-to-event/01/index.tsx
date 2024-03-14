export const pageTitle = 'Export the component'

export default function LightSwitch() {
  function handleClick() {
    const bodyStyle = document.body.style
    if (bodyStyle.backgroundColor === 'black') {
      bodyStyle.backgroundColor = 'white'
    } else {
      bodyStyle.backgroundColor = 'black'
    }
  }

  return (
    <button className="bg-white p-2" onClick={handleClick}>
      Toggle the lights
    </button>
  )
}
