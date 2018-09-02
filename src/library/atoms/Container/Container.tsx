import * as React from 'react';
import styled from 'styled-components';
import { ContainerType, IContainerConfig } from './types';

// helpers
import * as themeHelper from '../../theme/helpers';

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

// const myHelper<T> = ({theme, config, defaults}, key: string, fn: (a: any, b: T, c: T) => string): string => {
//     return fn(theme, config[key], defaults[key]);
// }

const StyledContainer = styled.div.attrs<IStyledContainerProps>({})`
    display: flex;
    ${props => themeHelper.choose('alignItems', props)}
    ${props => themeHelper.choose('backgroundColor', props) }
    ${props => themeHelper.choose('borderRadius', props)}
    ${props => themeHelper.choose('height', props) }
    ${props => themeHelper.choose('justifyContent', props)}
    ${props => themeHelper.choose('width', props)}
`
