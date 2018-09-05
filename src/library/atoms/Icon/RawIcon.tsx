import * as React from 'react';
import styled from 'styled-components';
import { choose, IRawInterface, pseudoClass, styleFn } from '../../theme/helpers';
import { IconConfig } from './types';

export interface IRawIconProps extends IRawInterface<IconConfig> {
    src: string;
    alt?: string;
    onClick?: () => void;
}

export class RawIcon extends React.PureComponent<IRawIconProps> {
    public render() {
        return <StyledIcon {...this.props} />
    }
}

const style: styleFn<IconConfig> = data => {
    return `
        display: block;
        ${choose('width', data)}
        ${choose('height', data)}
        ${choose('position', data)}
        ${choose('top', data)}
        ${choose('right', data)}
        ${choose('left', data)}
        ${choose('bottom', data)}
        ${choose('margin-left', data)}
        ${choose('margin-right', data)}
        ${choose('margin-bottom', data)}
        ${choose('margin-top', data)}
        ${choose('transform', data)}
    `;
}

const StyledIcon = styled.img.attrs<IRawIconProps>({})`
   ${ props => style(props)}
   ${ props => pseudoClass<IRawIconProps, IconConfig>('hover', style, props)}
   ${ props => pseudoClass<IRawIconProps, IconConfig>('focus', style, props)}
`