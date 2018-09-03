import * as React from 'react';
import styled from 'styled-components';
import { ITextConfig } from './types';

// helpers
import { choose, IRawInterface, pseudoClass, styleFn } from '../../theme/helpers';

export type IRawTextProps = IRawInterface<ITextConfig>;

export class RawText extends React.PureComponent<IRawTextProps> {
    public render() {
        return (
            <StyledText {...this.props}>
                {this.props.children}
            </StyledText>
        );
    }
}

const styleText: styleFn<ITextConfig> = data => {
    return `
        box-sizing: border-box;
        font-family: sans-serif;
        font-weight: 600;
        padding: 0 0 8px 0;
        ${choose('lineHeight', data)}
        ${choose('color', data)}
        ${choose('fontSize', data)}
        ${choose('backgroundColor', data)}
        ${choose('width', data)}
    `;
}

const StyledText = styled.div.attrs<IRawTextProps>({ type: 'text' })`
    ${ props => styleText(props) }
    ${ props => pseudoClass<IRawTextProps, ITextConfig>('hover', styleText, props)}
    ${ props => pseudoClass<IRawTextProps, ITextConfig>('focus', styleText, props)}
`