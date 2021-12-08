import * as React from 'react'

function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = React.useRef(callback)

  // Remember the latest callback if it changes.
  React.useLayoutEffect(() => {
    savedCallback.current = callback
  }, [callback])

  React.useEffect(() => {
    if (!delay) {
      return
    }

    const id = setInterval(() => savedCallback.current(), delay)

    return () => clearInterval(id)
  }, [delay])
}

export default useInterval
