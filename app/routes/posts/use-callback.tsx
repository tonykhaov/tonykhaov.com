import * as React from 'react'
import { Container, Title } from '~/components/ui'

function UseCallbackPost(): JSX.Element {
  return (
    <Container>
      <Title>But what is useCallback? And when should I use it?</Title>
      <div>
        <p>
          useCallback is a native hook in React used for memoizing functions.
          But you'll never use it unless you run into performance issues
          (usually when your function is inside a dependency array).
        </p>
        <p>
          When you create a component, every declaration above the return will
          be redeclared on rerenders. Which means that they will have a whole
          new different "id". Unless they are `useMemo`ed or `useCallback`ed.
          useMemo is for primitive types and objects. useCallback is for
          functions. The example is contrived but you'll get the idea. Let's say
          the following component:
        </p>
        <pre>
          <code>
            {`
            function App() {
              const [count, setCount] = useState(0)
            
              useEffect(() => {
                console.log('count has been updated', count)
              }, [count])
            
              return <button onClick={() => setCount(c => c + 1)}>Increment {count}</button>
            }
            `}
          </code>
        </pre>
        Every time we click on the button, the state `count: number` updates and
        triggers a rerender of {'<App />'} and useEffect callback is executed
        because `count: number` from the dependencies array will be different.
        Now let's modify the useEffect to call some API to get users. The
        function is declared inside {'<App />'} and so every time {'<App />'}{' '}
        rerenders, getUsers is redeclared, it will have a whole new "id" and
        thus the callback inside useEffect will be called.
        <pre>
          <code>
            {`
            function App() {
              const [count, setCount] = useState(0)
            
              const getUsers = () => fetch('someEndpoint')
            
              useEffect(() => {
                console.log('getUsers function has been changed')
                getUsers()
              }, [getUsers])
            
              return <button onClick={() => setCount(c => c + 1)}>Increment {count}</button>
            }
    `}
          </code>
        </pre>
        <p>
          You can have a look at the consequences: getUsers is called on every
          rerenders.{' '}
          <iframe
            className="m-auto"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/yAqezVTJcoo"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </p>
        <p>
          But here comes useCallback. useCallback is useful in this kind of
          situation because it allows us to memoize `getUsers()` : meaning that
          getUsers will be redeclared only if a variable inside the dependencies
          array of the useCallback changes. He nothing is specified, getUsers
          will never be redeclared (only on new mounts though).
        </p>
        <pre>
          <code>
            {`
            function App() {
              const [count, setCount] = useState(0)
            
              const getUsers = useCallback(() => fetch('someEndpoint'), [])
            
              useEffect(() => {
                console.log('getUsers function has been changed')
                getUsers()
              }, [getUsers])
            
              return <button onClick={() => setCount(c => c + 1)}>Increment {count}</button>
            }
            `}
          </code>
        </pre>
        <p>Here the component rerenders but getUsers won't be called!</p>
        <iframe
          className="m-auto"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/xSgKRzl1pqM"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <p>
          However using useCallback comes with a cost. The function will be
          stored in memory so prefer using native JS strategies. One way is to
          declare `getUsers()` outside of the component and so it will only be
          declared once.
        </p>
        <pre>
          <code>
            {`
            const getUsers = () => fetch('someEndpoint')
            
            function App() {
              const [count, setCount] = React.useState(0)
            
              React.useEffect(() => {
                console.log('getUsers function has been changed')
                getUsers()
              }, [getUsers])
            
              return (
                <button onClick={() => setCount((c) => c + 1)}>Increment {count}</button>
              )
            }
            `}
          </code>
        </pre>
        Or simply (in this case only) not declaring a function and calling fetch
        directly because fetch is a native function, it's "id" will never.
        <pre>
          <code>
            {` 
            function App() {
              const [count, setCount] = React.useState(0)
            
              React.useEffect(() => {
                console.log('call endpoint')
                fetch('someEndpoint')
              }, [fetch])
            
              return (
                <button onClick={() => setCount((c) => c + 1)}>Increment {count}</button>
              )
            }
            `}
          </code>
        </pre>
        Another reason for using useCallback is closure. Sometimes you want to
        access a variable from a certain lexical scope, so you can't declare
        your function somewhere else and pass 10 arguments... (in progress)
      </div>
    </Container>
  )
}

export default UseCallbackPost
