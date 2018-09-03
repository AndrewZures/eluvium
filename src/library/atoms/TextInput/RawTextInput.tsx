import * as React from 'react';
import styled from 'styled-components';
import { ITextInputConfig } from './types';

import { choose, IRawInterface, pseudoClass, styleFn } from '../../theme/helpers';


export interface IRawTextInputProps extends IRawInterface<ITextInputConfig> {
    value?: string;
    placeholder?: string;
}

export class RawTextInput extends React.PureComponent<IRawTextInputProps> {
    public render() {
        return <StyledTextInput {...this.props} />
    }
}

const style: styleFn<ITextInputConfig> = data => {
    return `
        display: flex;
        box-sizing: border-box;
        border: 1px solid #D1D7E0;
        ${choose('lineHeight', data)}
        ${choose('color', data)}
        ${choose('fontSize', data)}
        ${choose('backgroundColor', data)}
        ${choose('width', data)}
        ${choose('height', data)}
        ${choose('borderRadius', data)}
        ${choose('margin-bottom', data)}
        ${choose('margin-left', data)}
        ${choose('margin-top', data)}
        ${choose('margin-right', data)}
        ${choose('padding-bottom', data)}
        ${choose('padding-left', data)}
        ${choose('padding-top', data)}
        ${choose('padding-right', data)}

        &::-webkit-input-placeholder {
            color: #ABB1BE;
        }
    `;
}

const StyledTextInput = styled.input.attrs<IRawTextInputProps>({ type: 'text' })`
   ${ props => style(props)}
   ${ props => pseudoClass<IRawTextInputProps, ITextInputConfig>('hover', style, props)}
   ${ props => pseudoClass<IRawTextInputProps, ITextInputConfig>('focus', style, props)}
`