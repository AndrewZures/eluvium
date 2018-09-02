import * as React from 'react';
import { ContainerType, IContainerConfig } from './types';

// options
import { backgroundConfig } from './options/background';
import { cardConfig } from './options/card';
import { dropdownConfig } from './options/dropdown';
import { mainContentConfig } from './options/mainContent';
import { RawContainer } from './RawContainer';


interface IContainerProps {
    type?: ContainerType;
    custom?: Partial<IContainerConfig>;
}

export class Container extends React.PureComponent<IContainerProps> {

    // predefined container choices
    private predefinedTypes: { [key: string]: IContainerConfig } = {
        'background': backgroundConfig,
        'card': cardConfig,
        'dropdown': dropdownConfig,
        'main_content': mainContentConfig,
    }

    public render() {
        return (
            <RawContainer
                presets={this.predefinedTypes[this.props.type!] || {}}
                custom={this.props.custom || {}}
            >
                {this.props.children}
            </RawContainer>
        );
    }
}