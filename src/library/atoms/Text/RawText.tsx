import * as React from 'react';
import styled, { ThemedStyledProps } from 'styled-components';
import { ITextConfig } from './types';

// helpers
import { choose } from '../../theme/helpers';
import { ITheme } from '../../theme/interface';

interface IRawTextProps {
    defaults?: Partial<ITextConfig>;
    custom?: Partial<ITextConfig>;
    hover?: Partial<IRawTextProps>;
}

export class RawText extends React.PureComponent<IRawTextProps> {

    public render() {
        return (
            <StyledText
                defaults={this.props.defaults}
                custom={this.props.custom}
                hover={this.props.hover}
            >
                {this.props.children}
            </StyledText>
        );
    }
}

function hover(props: ThemedStyledProps<IRawTextProps, ITheme>) {
    return props.hover ? `&:hover { ${styleText({ theme: props.theme, ...props.hover}) } }` : '';
}

function styleText(props: ThemedStyledProps<IRawTextProps, ITheme>) {
    debugger;
    return `
        box-sizing: border-box;
        font-family: sans-serif;
        font-weight: 600;
        padding: 0 0 8px 0;
        ${choose('lineHeight', props)}
        ${choose('color', props)}
        ${choose('fontSize', props)}
        ${choose('backgroundColor', props)}
        ${choose('width', props)}
    `;
}

const StyledText = styled.div.attrs<IRawTextProps>({ type: 'text' })`
    ${styleText}
    ${hover}
`