import { merge } from 'lodash';
import * as React from 'react';
import styled from 'styled-components';
import { ContainerType, IContainerConfig } from './types';

// options
import { backgroundConfig } from './options/background';
import { cardConfig } from './options/card';
import { defaults } from './options/defaults';


interface IContainerProps {
    type?: ContainerType;
    config?: Partial<IContainerConfig>;
}

export class Container extends React.PureComponent<IContainerProps> {

    private options: { [key: string]: IContainerConfig } = {
        [ContainerType.Background]: backgroundConfig,
        [ContainerType.Card]: cardConfig,
    }

    public render() {
        return (
            <StyledContainer {...this.styles()}>
                {this.props.children}
            </StyledContainer>
        );
    }

    private styles(): IContainerConfig {
        const { type, config } = this.props;
        const container = this.options[type!] || defaults;
        return this.props.config ? merge({}, container, config) : container;
    }
}

const StyledContainer = styled.div.attrs<IContainerConfig>({})`
    background-color: ${({theme, backgroundColor}) => theme.colors[backgroundColor]}
    height: ${({theme, height}) => theme.sizing.height[height]}
    width: ${({theme, width}) => theme.sizing.width[width]}
`