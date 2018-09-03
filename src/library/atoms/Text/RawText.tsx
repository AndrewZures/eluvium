import * as React from 'react';
import styled, { ThemedStyledProps } from 'styled-components';
import { ITextConfig } from './types';

// helpers
import { choose3 } from '../../theme/helpers';
import { ITheme, PseudoClass } from '../../theme/interface';

interface IRawTextProps {
    defaults?: Partial<ITextConfig>;
    custom?: Partial<ITextConfig>;
}

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

function selector(key: PseudoClass, props: ThemedStyledProps<IRawTextProps, ITheme>) {
    const custom = props.custom && props.custom[key];
    const defaults = props.defaults && props.defaults[key];
    return custom || defaults ? `&:${key} { ${styleText(props.theme, defaults, custom) } }` : '';
}

function styleText(theme: ITheme, defaults?: Partial<ITextConfig>, custom?: Partial<ITextConfig>) {
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
    ${ props => selector('hover', props)}
    ${ props => selector('focus', props)}
`