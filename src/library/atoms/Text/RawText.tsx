import * as React from 'react';
import styled from 'styled-components';
import { ITextConfig } from './types';

// helpers
import { choose3, IStandardRawInterface, pseudoClass, styleFn } from '../../theme/helpers';

export type IRawTextProps = IStandardRawInterface<ITextConfig>;

export class RawText extends React.PureComponent<IRawTextProps> {
    public render() {
        return (
            <StyledText
                defaults={this.props.defaults}
                custom={this.props.custom}
            >
                {this.props.children}
            </StyledText>
        );
    }
}

const styleText: styleFn<ITextConfig> = (theme, defaults, custom) => {
    return `
        box-sizing: border-box;
        font-family: sans-serif;
        font-weight: 600;
        padding: 0 0 8px 0;
        ${choose3('lineHeight', theme, defaults, custom)}
        ${choose3('color', theme, defaults, custom)}
        ${choose3('fontSize', theme, defaults, custom)}
        ${choose3('backgroundColor', theme, defaults, custom)}
        ${choose3('width', theme, defaults, custom)}
    `;
}

const StyledText = styled.div.attrs<IRawTextProps>({ type: 'text' })`
    ${ props => styleText(props.theme, props.defaults, props.custom) }
    ${ props => pseudoClass<IRawTextProps, ITextConfig>('hover', styleText, props)}
    ${ props => pseudoClass<IRawTextProps, ITextConfig>('focus', styleText, props)}
`