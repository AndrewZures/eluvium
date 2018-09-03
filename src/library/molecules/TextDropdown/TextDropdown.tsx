import * as React from 'react';
import styled from 'styled-components';

// atoms
import { Icon, IconProps } from '../../atoms/Icon/Icon';
import { ITextInputProps, TextInput } from '../../atoms/TextInput/TextInput';

export interface ITextDropdownProps {
    text: ITextInputProps;
    icon: IconProps;
}

export class TextDropdown extends React.PureComponent<ITextDropdownProps> {
    public render() {
        return (
            <StyledTextDropdown {...this.props}>
                <TextInput {...this.props.text} />
                <Icon {...this.props.icon} />
            </StyledTextDropdown>
        );
    }
}

const StyledTextDropdown = styled.div.attrs<ITextDropdownProps>({})`
    width: 400px;
    position: relative;
    background-color: orange;
`