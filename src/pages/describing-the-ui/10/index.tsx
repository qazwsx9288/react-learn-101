export const pageTitle = 'Extract a component'

import { getImageUrl } from './utils.js'

export default function Gallery() {
  const SectionList: IProps[] = [
    {
      name: 'Maria Skłodowska-Curie',
      imgId: 'szV5sdG',
      width: 70,
      height: 70,
      profession: 'physicist and chemist',
      awards:
        '(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)',
      awardsCount: 4,
      discovered: 'polonium (chemical element)'
    },
    {
      name: 'Katsuko Saruhashi',
      imgId: 'YfeOqp2',
      width: 70,
      height: 70,
      profession: 'geochemist',
      awards: '(Miyake Prize for geochemistry, Tanaka Prize)',
      awardsCount: 2,
      discovered: 'a method for measuring carbon dioxide in seawater'
    }
  ]

  return (
    <div>
      <h1>Notable Scientists</h1>

      {SectionList.map((section) => {
        return (
          <>
            <Section props={section} />
          </>
        )
      })}
    </div>
  )
}

type IProps = {
  name: string
  imgId: string
  width: number
  height: number
  profession: string
  discovered: string
  awards: string
  awardsCount: number
}

function Section({ props }: { props: IProps }) {
  return (
    <>
      <section className="profile">
        <h2>{props.name}</h2>
        <img
          className="avatar"
          src={getImageUrl(props.imgId)}
          alt={props.name}
          width={props.width}
          height={props.height}
        />
        <ul>
          <li>
            <b>Profession: </b>
            {props.profession}
          </li>
          <li>
            <b>Awards: {props.awardsCount} </b>
            {props.awards}
          </li>
          <li>
            <b>Discovered: </b>
            {props.discovered}
          </li>
        </ul>
      </section>
    </>
  )
}
