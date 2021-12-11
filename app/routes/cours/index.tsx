import { List, TextLink, Title } from '~/components/ui'

function CoursIndex() {
  return (
    <>
      <Title>Cours</Title>
      <List>
        <h2 className="text-lg">Maths</h2>
        <li>
          <TextLink to="signes">Les signes (négatifs)</TextLink>
        </li>
        <li>
          <TextLink to="ensembles">
            Les ensembles de nombre (N), (Z), (D), (Q) et (R)
          </TextLink>
        </li>
        <li>Simplifier en algèbre (en écriture...)</li>
      </List>
    </>
  )
}

export default CoursIndex
