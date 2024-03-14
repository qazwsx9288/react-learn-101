export const pageTitle = 'Refactor a series of ? : to if and variables'

function Drink({ name }: { name: string }) {
  const info = {
    plant: '',
    caffeine: '',
    age: ''
  }

  if (name === 'tea') {
    info.plant = 'leaf'
    info.caffeine = '15–70 mg/cup'
    info.age = '4,000+ years'
  } else if (name === 'coffee') {
    info.plant = 'bean'
    info.caffeine = '80–185 mg/cup'
    info.age = '1,000+ years'
  }

  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{info.plant}</dd>
        <dt>Caffeine content</dt>
        <dd>{info.caffeine}</dd>
        <dt>Age</dt>
        <dd>{info.age}</dd>
      </dl>
    </section>
  )
}

export default function DrinkList() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  )
}
