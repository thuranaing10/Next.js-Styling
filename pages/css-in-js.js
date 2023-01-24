import styled from 'styled-components'

const Title = styled.h1`
    font-size: 50px;
    color: ${({theme}) => theme.colors.primary};
`

function CSSJS() {
    return (
        <div>
            <h2 style={{ color: 'red' }}>CSS in Js</h2>
            <Title>Style Component</Title>
        </div>
    )
}

export default CSSJS