import { List, TextLink, Title } from '~/components/ui'

function CoursIndex() {
  return (
    <>
      <Title>Cours</Title>
      <List>
        <h2 className="text-lg">Maths</h2>
        <li>
          <TextLink to="signes" className="text-blue-700 hover:text-blue-500">
            Les signes (négatifs)
          </TextLink>
        </li>
        <li>
          <TextLink
            to="ensembles"
            className="text-blue-700 hover:text-blue-500"
          >
            Les ensembles de nombre (N), (Z), (D), (Q) et (R)
          </TextLink>
        </li>
      </List>
    </>
  )
}

export default CoursIndex
