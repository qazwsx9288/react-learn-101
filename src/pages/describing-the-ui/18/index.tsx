export const pageTitle = 'Extracting a list item component'

import { recipes } from './data.js'

export default function RecipeList() {
  return (
    <div>
      <h1 className="text-4xl">Recipes</h1>
      {recipes.map((recipe) => (
        <Ingredient {...recipe} key={recipe.id} />
      ))}
    </div>
  )
}

type IProps = {
  name: string
  ingredients: string[]
}

function Ingredient({ name, ingredients }: IProps) {
  return (
    <>
      <h2 className="text-3xl">{name}</h2>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </>
  )
}
