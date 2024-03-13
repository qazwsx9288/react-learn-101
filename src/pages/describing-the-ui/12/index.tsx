export const pageTitle = 'Passing JSX in a children prop'

export default function Profile() {
  return (
    <div>
      <Card title="Aklilu Lemma">
        <img
          className="avatar"
          src="https://i.imgur.com/OKS67lhm.jpg"
          alt="Aklilu Lemma"
          width={70}
          height={70}
        />
      </Card>
      <Card title="About">
        <p>
          Aklilu Lemma was a distinguished Ethiopian scientist who discovered a
          natural treatment to schistosomiasis.
        </p>
      </Card>
    </div>
  )
}

type IProps = {
  title: string
  children: React.ReactNode
}

/**
 * Note:
 * Any JSX you put inside of a component’s tag, that will be passed as the "children" prop to that component.
 */

function Card({ title, children }: IProps) {
  return (
    <>
      <div className="card">
        <div className="card-content">
          <h1>{title}</h1>
          {children}
        </div>
      </div>
    </>
  )
}
