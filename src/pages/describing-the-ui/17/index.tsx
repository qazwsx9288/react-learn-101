export const pageTitle = 'Nested lists in one component'

import { recipes } from './data.js'

export default function RecipeList() {
  return (
    <div>
      <h1 className="text-4xl">Recipes</h1>
      <List list={recipes} />
    </div>
  )
}

type IProps = {
  list: {
    id: string
    name: string
    ingredients: string[]
  }[]
}

function List({ list }: IProps) {
  return list.map((data) => {
    return (
      <>
        <h2 className="text-3xl">{data.name}</h2>
        <ul>
          {data.ingredients.map((ingredient) => {
            return (
              <>
                <li>{ingredient}</li>
              </>
            )
          })}
        </ul>
      </>
    )
  })
}
