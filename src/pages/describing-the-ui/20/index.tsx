export const pageTitle = 'Challenge 1 of 3: Fix a broken clock'

export default function BasePage() {
  const now = new Date()

  return (
    <>
      <Clock time={now} />
    </>
  )
}

function Clock({ time }: { time: Date }) {
  const hours = time.getHours()
  let className
  if (hours >= 0 && hours < 6) {
    className = 'bg-black text-white'
  } else {
    className = 'bg-white text-black'
  }
  return <h1 className={className}>{time.toLocaleTimeString()}</h1>
}
