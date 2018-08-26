// // import { get } from 'lodash';
// import * as React from 'react';
// import styled from 'styled-components';
// import { ITheme, ThemeColor } from '../theme/interface';
// import { IGeneric } from './StyledContainer';

// enum HeightType {
//     Medium = "medium",
// }

// // const background: IContainerConfig = {
// //     backgroundColor: ThemeColor.Background,
// //     height: HeightType.Medium,
// //     width: '100%',
// // }

// interface IContainerConfig extends IGeneric {
//     height: HeightType;
//     width: string;
//     backgroundColor: ThemeColor;
// }

// interface IContainerInterface {
//     className: string;
//     backgroundColor: ThemeColor;
// }

// class RawContainer extends React.Component<IContainerInterface, {}> {
//     public render() {
//         return (
//             <div className={this.props.className}>
//                 {this.props.children}
//             </div>
//         );
//     }
// }

// const configureHeight = (theme: ITheme, height: HeightType) => theme.sizing.height[height];



// export const StyledContainer = styled(RawContainer).attrs<IContainerInterface>({})`
//     background-color: ${({theme, backgroundColor}) => theme.colors[backgroundColor]}
// `

// enum ContainerType {
//     Background = 'background',

// }

// interface IContInterface {
//     type?: ContainerType;
//     config?: IContainerInterface;
// }

// interface IContainerConfigOptions {
//     background?: ThemeColor;
// }

// interface IContainerConfig {
//     background: ThemeColor;
// }

// class Container extends React.Component<IContInterface, {}> {

//     private const containerTypes = {
//         background: 'something',
//     }

//     containerStyles() {
//         return this.props.config || containerTypes[this.props.type]
//     }

//     render() {
//         <StyledContainer {...containerStyles()}>
//             {this.props.children}
//         </StyledContainer>
//     }
// }

// /*
// <Container config={background} />
// could also map to the configuration file

// <Container type={background />}

// can have container that either (1) takes a type (2) takes a config (3) uses its props as a config
// don't want to have crazy If statements in styled-component code!
// want configurability and flexibility with types
// want easy to use common types
// /*
// BackgroundContainer
// MainContainer
// InnerContainer
// */

// /*
// Container type={ContainerType.Background}
// Container type={ContainerType.Main}

// // <Container type="full">
// //       <Container type="main">
// //          <Card>
// //             <InnerContainer type="inner" size="small">
// //               <Header type="h1">
// //             </Container>
// //             <Container type="outer">
// //                 <Container type="inner" size="small">
// //                    <Question type="standard" />
// //                 </Container>
// //             </Container>
// //          </Card>
// //        </Container>
// // </Container>
// */
