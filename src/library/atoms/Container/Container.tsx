import { merge } from 'lodash';
import * as React from 'react';
import styled from 'styled-components';
import { ContainerType, IContainerConfig } from './types';

// helpers
import { chooseColor, chooseHeight, chooseWidth } from '../../theme/helpers';

// options
import { backgroundConfig } from './options/background';
import { cardConfig } from './options/card';
import { defaults } from './options/defaults';
import { mainContentConfig } from './options/mainContent';


interface IContainerProps {
    type?: ContainerType;
    config?: Partial<IContainerConfig>;
}

export class Container extends React.PureComponent<IContainerProps> {

    private options: { [key: string]: IContainerConfig } = {
        [ContainerType.Background]: backgroundConfig,
        [ContainerType.Card]: cardConfig,
        [ContainerType.MainContent]: mainContentConfig
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
    background-color: ${({theme, backgroundColor}) => chooseColor(theme, backgroundColor)};
    height: ${({theme, height}) => chooseHeight(theme, height)};
    width: ${({theme, width}) => chooseWidth(theme, width)};
`
