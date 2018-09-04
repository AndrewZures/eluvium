import * as React from 'react';

// atoms
import { Icon, IconProps } from '../../atoms/Icon/Icon';
import { ITextInputProps, TextInput } from '../../atoms/TextInput/TextInput';

import styled from 'styled-components';

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
                <StyledTextDropdown {...this.props}>
                    <TextInput {...this.props.text} />
                    {this.props.icon && <Icon {...this.props.icon} onClick={this.toggleDropdown}/>}
                </StyledTextDropdown>
                {this.state.isOpen && this.props.children}
            </div>
        );
    }

    private toggleDropdown = () => {
        if(this.props.icon && this.props.icon.onClick) { this.props.icon.onClick(); }
        this.setState({ isOpen: !this.state.isOpen })
    }
}

const StyledTextDropdown = styled.div.attrs<ITextDropdownProps>({})`
    ${props => props.icon && 'position: relative;'}
    width: 400px;
`