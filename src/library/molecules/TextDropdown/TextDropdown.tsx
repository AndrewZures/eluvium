import * as React from 'react';
import { ITextInputProps } from '../../atoms/TextInput/TextInput';

// atoms
import { TextWithIcon } from '../TextWithIcon/TextWithIcon';

import { Icon, IconProps } from '../../atoms/Icon/Icon';

interface ITextDropdownState {
    isOpen: boolean;
}

export interface ITextDropdownProps {
    text: ITextInputProps;
    icon?: IconProps;
    isOpen?: boolean;
}

export class TextDropdown extends React.PureComponent<ITextDropdownProps, ITextDropdownState> {

    public readonly state: Readonly<ITextDropdownState> = {
        isOpen: false || !!this.props.isOpen,
    }

    public render() {
        return (
            <div>
                <TextWithIcon
                    text={this.props.text}
                />
                {this.props.icon && <Icon {...this.props.icon} onClick={this.toggleDropdown} />}
                {this.state.isOpen && this.props.children}
            </div>
        );
    }

    private toggleDropdown = () => {
        if(this.props.icon && this.props.icon.onClick) { this.props.icon.onClick() }
        this.setState({ isOpen: !this.state.isOpen });
    }
}