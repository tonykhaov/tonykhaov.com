import * as React from 'react'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@reach/disclosure'
import { List, Title } from '~/components/ui'
import { useInterval } from '~/utils/hooks'
import matriochka from '~/image/cours/ensembles/matriochka.jpg'
import matriochkaSingle from '~/image/cours/ensembles/matriochka-single.jpg'

export default function EnsemblesPage() {
  return (
    <>
      <Title>Les ensembles de nombre (cours)</Title>
      <List className="!list-none">
        <li className="mb-2">
          <Disclosure defaultOpen={true}>
            <Question>
              Qu'est-ce que l'ensemble des entiers naturels{' '}
              <strong className="text-pink-500">(N)</strong> ?
            </Question>
            <Answer>
              <p>
                C'est l'ensemble des nombres ronds qui sont positifs. On les
                utilise dans la vie de tous les jours, pour compter par exemple.
              </p>
              <i>
                <strong className="text-pink-500">0</strong> enfant,{' '}
                <strong className="text-pink-500">1</strong> fruit,{' '}
                <strong className="text-pink-500">2</strong> pommes,{' '}
                <strong className="text-pink-500">3</strong> voitures
              </i>
            </Answer>
          </Disclosure>
        </li>
        <li className="mb-2">
          <Disclosure defaultOpen={true}>
            <Question>
              Qu'est-ce que l'ensemble des entiers relatifs{' '}
              <strong className="text-blue-500">(Z)</strong> ?
            </Question>
            <Answer>
              <p>
                C'est les entiers naturels avec en plus les nombres ronds qui
                sont négatifs.
              </p>
              <i>
                <strong className="text-blue-500">-1</strong> degré,{' '}
                <strong className="text-blue-500">-2</strong> ans,{' '}
                <strong className="text-blue-500">-20</strong> personnes
              </i>
            </Answer>
          </Disclosure>
        </li>
        <li className="mb-2">
          <Disclosure defaultOpen={true}>
            <Question>
              Qu'est-ce que l'ensemble des entiers décimaux{' '}
              <strong className="text-green-500">(D)</strong> ?
            </Question>
            <Answer>
              <p>
                C'est les entiers relatifs avec en plus tous les nombres qui
                sont à virgule et que les chiffres après la virgule s'arrêtent.
              </p>
              <i>
                <strong className="text-green-500">62.5</strong> kg,{' '}
                <strong className="text-green-500">-2.765</strong> kg,{' '}
                <strong className="text-green-500">185.21</strong> cm
              </i>
            </Answer>
          </Disclosure>
        </li>
        <li className="mb-2">
          <Disclosure defaultOpen={true}>
            <Question>
              Qu'est-ce que l'ensemble des entiers rationnels{' '}
              <strong className="text-purple-500">(Q)</strong> ?
            </Question>
            <Answer>
              <p>
                C'est les entiers décimaux avec en plus tous les nombres qu'on
                doit écrire avec une fraction car écrit de manière décimal, on
                est obligé de les arrondir.
              </p>
              <i>
                -1/3 ~= <strong className="text-purple-500">0.33...</strong>,
                2/3 ~= <strong className="text-purple-500">0/666667...</strong>,
                9/156 ~=
                <strong className="text-purple-500">0,0577...</strong>
              </i>
            </Answer>
          </Disclosure>
        </li>
        <li className="mb-2">
          <Disclosure defaultOpen={true}>
            <Question>
              Qu'est-ce que l'ensemble des entiers réels{' '}
              <strong className="text-red-500">(R)</strong> ?
            </Question>
            <Answer>
              <p>
                C'est les entiers rationnels avec en plus tous les nombres qu'on
                ne peut pas écrire sous une autre forme (racine carré, notation
                mathématique, etc.).
              </p>
              <i>
                <strong className="text-red-500">π</strong>,{' '}
                <strong className="text-red-500">&radic;2</strong>,{' '}
                <strong className="text-red-500">&radic;43</strong>
              </i>
            </Answer>
          </Disclosure>
        </li>
      </List>
      <br />
      <p>
        Malheureusement c'est très abstrait comme concept et pour mieux
        concevoir les ensembles de nombre je te propose d'imaginer une
        matriochka (poupée russe).
      </p>
      <img src={matriochka} />
      <p>
        Pour rappeler comment marche une matriochka, la minuscule se place dans
        la plus petite qui est dans la moyenne qui est dans la grande qui est
        dans la géante. Et à la fin on n'a qu'une seule poupée qui contiendra
        toute les autres.
      </p>
      <img className="mx-auto" src={matriochkaSingle} />

      <p>Pour faire le parallèle avec les ensembles de nombre :</p>
      <List>
        <li>
          Dans la minuscule retrouve les entiers naturels{' '}
          <strong className="text-pink-500">(N)</strong> : <i>1, 2, 10, 20</i>.
        </li>
        <li>
          Dans la plus petite on a tous les entiers relatifs{' '}
          <strong className="text-blue-500">(Z)</strong> : <i>-1, -5, -45</i>.
        </li>
        <li>
          Dans la moyenne on a tous les nombres décimaux{' '}
          <strong className="text-green-500">(D)</strong> :{' '}
          <i>0.75, 3.25, 0.8</i>.
        </li>
        <li>
          Dans la grande on a tous les nombres rationnels{' '}
          <strong className="text-purple-500">(Q)</strong> :{' '}
          <i>1/3, 5/3, 7/6</i>.
        </li>
        <li>
          Et dans la géante on a tous les nombres réels{' '}
          <strong className="text-red-500">(R)</strong> :{' '}
          <i>&radic;15, &radic;40, π</i>.
        </li>
      </List>
      <br />
      <p>
        Alors par exemple on va prendre le nombre 15.4. C'est un décimal (car
        son chiffre après la virgule s'arrête) donc il est inclus dans la
        matriochka moyenne. Mais comme la moyenne est dans la grande qui est
        comprise dans la géante, alors 15.4 fait partie des nombres réels et des
        nombres rationnels. Par contre, on veut être très précis et donc on va
        dire que <strong>15.4 fait partie des entiers décimaux</strong>.
      </p>
      {/* <EnsemblesSchema /> */}
      {/* <p>
        On dit alors que l'ensemble{' '}
        <strong className="text-blue-500">(Z)</strong> inclut l'ensemble{' '}
        <strong className="text-pink-500">(N)</strong> (2 est compris dans Z par
        exemple). En notation mathématique on l'écrit : Z ⊆ N.
      </p>
      <p>
        Par logique, tu comprends que l'ensemble Q inclut l'ensemble D (9.5 est
        compris dans (Q) mais qu'un nombre irationnel 1/3 n'est pas compris dans
        Q). En notation mathématique on l'écrit : Q ⊆ D.
      </p>
      <div>
        <h2>Exercice</h2>
        <EnsemblesExercise />
      </div> */}
    </>
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

function Question({ children }: React.PropsWithChildren<{}>) {
  return <DisclosureButton className="text-left">{children}</DisclosureButton>
}

function Answer({ children }: React.PropsWithChildren<{}>) {
  return (
    <DisclosurePanel className="px-2 py-4 mt-1 mb-3 bg-gray-200/50">
      {children}
    </DisclosurePanel>
  )
}

// TODO: finish drawing schema
function EnsemblesSchema() {
  const svgRef = React.useRef<SVGSVGElement>(null)
  React.useLayoutEffect(() => {
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
        .attr('fill', 'rgba(255, 0,0,0.1)')
        .on('mouseover', (event) => {
          d3.select(event.currentTarget)
            .transition()
            .duration(300)
            .attr('fill', 'rgba(255, 0,0,1)')
        })
        .on('mouseout', (event) => {
          d3.select(event.currentTarget)
            .transition()
            .duration(300)
            .attr('fill', 'rgba(255, 0,0,0.1)')
        })
      svg.append('text').text('Hello World').attr('x', 100).attr('y', 100)
    }
    drawSchema()
  }, [])
  // we first set width and height to 0 to avoid the svg to be displayed if user's browser has JS disabled
  // but then if JS is enabled, the useLayoutEffect callback is run and the svg width and height will be updated
  return <svg ref={svgRef} width="0" height="0" className="mx-auto" />
}
