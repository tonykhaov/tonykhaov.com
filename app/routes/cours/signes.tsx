import * as React from 'react'
import { Container, Title } from '~/components/ui'

function SignesPage(): JSX.Element {
  const [value, setValue] = React.useState(0)
  const min = -100
  const max = 100

  const step = 10

  const hotOpacity = (value - min) / (max - min)
  const coldOpacity = (max - value) / (max - min)

  return (
    <Container>
      <Title>Les signes</Title>
      <div className="mb-8">
        <p>
          Pour comprendre les signes, il faut voir les nombres comme dans un
          thermomètre.
        </p>
        <p>
          On a des températures positives : 1 degrè, 20 degrès, 42 degrès, 18
          degrès.
        </p>
        <p>
          Mais on peut aussi avoir des températures négatives par exemple -20
          degrès, -3 degrès, -68 degrès.
        </p>
        <p>
          Alors logiquement quand la tempèrature est négative, tu comprends cela
          veut dire qu'il fait froid et quand la température est positive, on se
          rapproche du chaud.
        </p>
        <i>
          Dans notre exemple on se limitera de -100 degrès jusqu'à 100 degrès.
        </i>
      </div>
      <div className="flex items-center mb-12">
        <span className="text-center">Froid ({min})</span>
        <div className="relative w-full h-8">
          <div
            className="absolute w-full h-full bg-red-500"
            style={{
              opacity: hotOpacity,
            }}
          />
          <div
            className="absolute w-full h-full bg-blue-500"
            style={{
              opacity: coldOpacity,
            }}
          />
          <div
            className="relative w-2 h-full bg-green-300 rounded-xl"
            style={{
              left: `${((value - min) / (max - min)) * 100}%`,
              transform: 'translateX(-50%)',
            }}
          >
            <p
              className="absolute text-lg font-bold transform -translate-x-1/2 translate-y-2 top-full left-1/2"
              style={{
                color: `rgb(${hotOpacity * 255}, 0, ${coldOpacity * 255})`,
              }}
            >
              {value}
            </p>
          </div>
        </div>
        <input
          className="hidden"
          type="range"
          value={value}
          min={min}
          max={max}
        />
        <span className="text-center">Chaud ({max})</span>
      </div>
      <div>
        <i>Tu peux cliquer sur les boutons pour modifier la température</i>
        <div className="grid grid-cols-2 grid-rows-2 gap-1">
          <button
            disabled={value === min}
            className="px-2 py-8 border border-blue-700 rounded-sm active:bg-blue-500 hover:bg-blue-500"
            onClick={() =>
              setValue((v) => {
                const newValue = v + -step
                if (newValue < min || newValue > max) {
                  return v
                } else {
                  return newValue
                }
              })
            }
          >
            J'ajoute du froid ({value} + (-{step}))
          </button>
          <button
            className="px-2 py-8 border border-red-700 rounded-sm active:bg-red-500 hover:bg-red-500"
            disabled={value === max}
            onClick={() =>
              setValue((v) => {
                const newValue = v + step
                if (newValue < min || newValue > max) {
                  return v
                } else {
                  return newValue
                }
              })
            }
          >
            J'ajoute du chaud ({value} + {step})
          </button>
          <button
            className="px-2 py-8 border border-blue-700 rounded-sm active:bg-blue-500 hover:bg-blue-500"
            disabled={value === min}
            onClick={() =>
              setValue((v) => {
                const newValue = v - step
                if (newValue < min || newValue > max) {
                  return v
                } else {
                  return newValue
                }
              })
            }
          >
            J'enlève du chaud ({value} - {step})
          </button>
          <button
            className="px-2 py-8 border border-red-700 rounded-sm active:bg-red-500 hover:bg-red-500"
            disabled={value === max}
            onClick={() =>
              setValue((v) => {
                const newValue = v - -step
                if (newValue < min || newValue > max) {
                  return v
                } else {
                  return newValue
                }
              })
            }
          >
            J'enlève du froid ({value} - (-{step}))
          </button>
        </div>
      </div>
      <div className="mt-8">
        Donc tu peux bien voir que :
        <ul className="list-disc list-inside">
          <li>
            Enlever du négatif (<span className="text-blue-500">froid</span>) =
            Ajouter du positif (<span className="text-red-500">chaud</span>)
          </li>
          <li>
            Ajouter du négatif (<span className="text-blue-500">froid</span>) =
            Enlever du positif (<span className="text-red-500">chaud</span>)
          </li>
        </ul>
      </div>
    </Container>
  )
}

export default SignesPage
