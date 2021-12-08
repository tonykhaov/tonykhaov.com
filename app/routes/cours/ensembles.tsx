import * as React from 'react'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@reach/disclosure'
import { Container, TextLink, List, Title } from '~/components/ui'
import { useInterval } from '~/utils/hooks'

// TODO: finish drawing schema
function EnsemblesSchema() {
  const svgRef = React.useRef<SVGSVGElement>(null)
  React.useEffect(() => {
    async function drawSchema() {
      const d3 = await import('d3')
      const svg = d3.select(svgRef.current)

      svg.style('width', '200px')
      svg.style('height', '200px')
      svg
        .append('circle')
        .attr('cx', 100)
        .attr('cy', 100)
        .attr('r', 50)
        .attr('fill', 'red')
        .on('mouseover', (event) => {
          d3.select(event.currentTarget)
            .transition()
            .duration(600)
            .attr('fill', 'blue')
            .attr('r', 100)
        })
        .on('mouseout', (event) => {
          d3.select(event.currentTarget)
            .transition()
            .duration(600)
            .attr('fill', 'red')
            .attr('r', 50)
        })
      svg.append('text').text('Hello World').attr('x', 100).attr('y', 100)
    }
    drawSchema()
  }, [])
  return <svg ref={svgRef} width="0" height="0" />
}

export default function EnsemblesPage() {
  // TODO: create state for answers disclosure
  return (
    <Container>
      <Title>Les ensembles de nombre</Title>
      <EnsemblesSchema />
      <List>
        <li className="mb-2">
          <Disclosure>
            <DisclosureButton>
              Qu'est-ce que l'ensemble des entiers naturels{' '}
              <strong className="text-pink-500">(N)</strong> ? Réponse
            </DisclosureButton>
            <DisclosurePanel className="mt-1 mb-3">
              <p className="underline">
                C'est l'ensemble des nombres ronds qui sont positifs. On les
                utilise dans la vie de tous les jours, pour compter par exemple.
              </p>
              <i>
                <strong className="text-pink-500">0</strong> enfant,{' '}
                <strong className="text-pink-500">1</strong> fruit,{' '}
                <strong className="text-pink-500">2</strong> pommes,{' '}
                <strong className="text-pink-500">3</strong> voitures
              </i>
            </DisclosurePanel>
          </Disclosure>
        </li>
        <li className="mb-2">
          <Disclosure>
            <DisclosureButton>
              Qu'est-ce que l'ensemble des entiers relatifs{' '}
              <strong className="text-blue-500">(Z)</strong> ? Réponse
            </DisclosureButton>
            <DisclosurePanel className="mt-1 mb-3">
              <p className="underline">
                C'est un entier naturel et en plus ceux qui sont négatifs.
              </p>
              <i>
                <strong className="text-blue-500">-1</strong> degré,{' '}
                <strong className="text-blue-500">-2</strong> ans,{' '}
                <strong className="text-blue-500">-20</strong> personnes
              </i>
            </DisclosurePanel>
          </Disclosure>
        </li>
        <li className="mb-2">
          <Disclosure>
            <DisclosureButton>
              Qu'est-ce que l'ensemble des entiers décimaux{' '}
              <strong className="text-green-500">(D)</strong> ? Réponse
            </DisclosureButton>
            <DisclosurePanel className="mt-1 mb-3">
              <p className="underline">
                C'est les entiers relatifs et en plus l'ensemble des nombres qui
                sont à virgule et les chiffres après la virgule s'arrêtent.
              </p>
              <i>
                <strong className="text-green-500">62.5</strong> kg,{' '}
                <strong className="text-green-500">-2.765</strong> kg,{' '}
                <strong className="text-green-500">185.21</strong> cm
              </i>
            </DisclosurePanel>
          </Disclosure>
        </li>
        <li className="mb-2">
          <Disclosure>
            <DisclosureButton>
              Qu'est-ce que l'ensemble des entiers rationnels{' '}
              <strong className="text-purple-500">(Q)</strong> ? Réponse
            </DisclosureButton>
            <DisclosurePanel className="mt-1 mb-3">
              <p className="underline">
                C'est les entiers décimaux et en plus l'ensemble des nombres
                qu'on doit écrire avec une fraction car écrit de manière
                décimal, on est obligé de les arrondir.
              </p>
              <i>
                -1/3 ~= <strong className="text-purple-500">0.33...</strong>,
                2/3 ~= <strong className="text-purple-500">0/666667...</strong>,
                9/156 ~=
                <strong className="text-purple-500">0,0577...</strong>
              </i>
            </DisclosurePanel>
          </Disclosure>
        </li>
        <li className="mb-2">
          <Disclosure>
            <DisclosureButton>
              Qu'est-ce que les entiers réels{' '}
              <strong className="text-red-500">(R)</strong> ? Réponse
            </DisclosureButton>
            <DisclosurePanel className="mt-1 mb-3">
              <p className="underline">
                C'est les entiers rationnels et en plus l'ensemble des nombres
                qu'on ne peut pas écrire sous forme de fraction.
              </p>
              <i>
                <strong className="text-red-500">π</strong>,{' '}
                <strong className="text-red-500">&radic;2</strong>,{' '}
                <strong className="text-red-500">&radic;43</strong>
              </i>
            </DisclosurePanel>
          </Disclosure>
        </li>
      </List>
      <p>
        Et donc tu comprends pourquoi on représente les ensembles de nombre par
        le <TextLink to="#schema">diagramme de Venn au dessus ⬆️</TextLink>
      </p>
      <p>
        Si tu mets ta souris sur l'ensemble des entiers relatifs{' '}
        <strong className="text-blue-500">(Z)</strong>, tu verras que les
        entiers naturels <strong className="text-pink-500">(N)</strong> seront
        aussi inclus.
      </p>
      <p>
        Si tu mets ta souris sur l'ensemble des rationnels{' '}
        <strong className="text-purple-500">(Q)</strong>, tu verras que les
        entiers décimaux <strong className="text-green-500">(D)</strong>, les
        entiers relatifs <strong className="text-blue-500">(Z)</strong> et les
        entiers naturels <strong className="text-pink-500">(N)</strong> seront
        aussi inclus.
      </p>
      <p>
        En notation mathématique: Z ⊆ N : <i>Z inclut N</i>
      </p>
      <p>
        En notation mathématique: Q ⊆ D ⊆ Z ⊆ N :{' '}
        <i>Z inclut D qui inclut Z qui inclut N</i>
      </p>

      <div>
        <h2>Exercice</h2>
        <EnsemblesExercise />
      </div>
    </Container>
  )
}

// TODO: finish EnsemblesExercise
const initialTimer = 3
function EnsemblesExercise() {
  const [currentTimer, setCurrentTimer] = React.useState(initialTimer)

  const isTimeout = currentTimer === 0

  const startNewQuestion = () => {
    setCurrentTimer(initialTimer)
  }

  useInterval(() => {
    if (currentTimer > 0) {
      setCurrentTimer(currentTimer - 1)
    }
  }, 1000)

  // TODO: find a way to generate a random number based on a random ensemble
  return (
    <>
      {!isTimeout && (
        <h1>
          {currentTimer} seconde{currentTimer > 1 && 's'}
        </h1>
      )}
      {isTimeout && (
        <button onClick={startNewQuestion}>Nouvelle question</button>
      )}
    </>
  )
}
