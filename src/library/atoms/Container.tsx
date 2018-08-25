import styled from 'styled-components';

const myProps = {
    hi: 'hi',
}

export const Container = styled.input`
    backgroundColor: ${props => props.theme.colors.base}
    color: ${props => props.theme.colors.secondary}
    width: ${props => props.theme.width[myProps.hi]}
    height: ${props => props.theme.height[myProps.hi]}
`

// <Container type="full">
//       <Container type="main">
//          <Card>
//             <InnerContainer type="inner" size="small">
//               <Header type="h1">
//             </Container>
//             <Container type="outer">
//                 <Container type="inner" size="small">
//                    <Question type="standard" />
//                 </Container>
//             </Container>
//          </Card>
//        </Container>
// </Container>
