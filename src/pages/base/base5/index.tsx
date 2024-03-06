export default function base() {
  return (
    <>
      <div className="p-4">
        <button onClick={handleClick}>Click me</button>
      </div>
    </>
  )
}

function handleClick() {
  alert('You clicked me!')
}
