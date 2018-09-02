import * as React from 'react';
import styled from 'styled-components';
import { ContainerType, IContainerConfig } from './types';

// helpers
import { choose } from '../../theme/helpers';

// options
import { backgroundConfig } from './options/background';
import { cardConfig } from './options/card';
import { dropdownConfig } from './options/dropdown';
import { mainContentConfig } from './options/mainContent';


interface IContainerProps {
    type?: ContainerType;
    config?: Partial<IContainerConfig>;
}

export class Container extends React.PureComponent<IContainerProps> {

    private options: { [key: string]: IContainerConfig } = {
        [ContainerType.Background]: backgroundConfig,
        [ContainerType.Card]: cardConfig,
        [ContainerType.MainContent]: mainContentConfig,
        [ContainerType.Dropdown]: dropdownConfig,
    }

    public render() {
        return (
            <StyledContainer
                presets={this.options[this.props.type!] || {}}
                custom={this.props.config || {}}
            >
                {this.props.children}
            </StyledContainer>
        );
    }
}

interface IStyledContainerProps {
    presets: Partial<IContainerConfig>;
    custom: Partial<IContainerConfig>;
}

const StyledContainer = styled.div.attrs<IStyledContainerProps>({})`
    display: flex;
    ${props => choose('alignItems', props)}
    ${props => choose('backgroundColor', props) }
    ${props => choose('borderRadius', props)}
    ${props => choose('height', props) }
    ${props => choose('justifyContent', props)}
    ${props => choose('width', props)}
`
