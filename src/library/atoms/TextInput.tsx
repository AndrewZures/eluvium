import styled from 'styled-components';

const myProps = {
    hi: 'hi',
}

export const TextInput = styled.input`
    backgroundColor: ${props => props.theme.colors.base}
    color: ${props => props.theme.colors.secondary}
    width: ${props => props.theme.width[myProps.hi]}
    height: ${props => props.theme.height[myProps.hi]}
`