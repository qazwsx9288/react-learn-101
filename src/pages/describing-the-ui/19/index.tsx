export const pageTitle = 'List with a separator'

const poem = {
  lines: ['I write, erase, rewrite', 'Erase again, and then', 'A poppy blooms.']
}

export default function Poem() {
  return (
    <article>
      {poem.lines.map((line, index) => (
        <>
          <p key={index + 'p'}>{line}</p>
          {index < poem.lines.length - 1 && <hr key={index + 'hr'}></hr>}
        </>
      ))}
    </article>
  )
}
