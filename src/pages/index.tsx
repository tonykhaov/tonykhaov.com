/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'

export default function Home(): JSX.Element {
  return (
    <>
      <Title css={{ marginTop: '32px' }} className="text-8xl">
        tonykhaov.com
      </Title>
    </>
  )
}

const Title = styled.h1({
  color: 'green',
})
