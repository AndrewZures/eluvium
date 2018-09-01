import { merge } from 'lodash';
import * as React from 'react';
import styled from 'styled-components';
import { ITextDropdownConfig, TextDropdownType } from './types';

import { ITheme } from '../../theme/interface';
import { defaults } from './predefined/defaults';

import { Text } from '../../atoms/Text/Text';

// helpers
import * as themeHelper from '../../theme/helpers';

// options

interface ITextDropdownProps extends Partial<ITextDropdownConfig> {
    config?: Partial<ITextDropdownConfig>;
    focus?: Partial<ITextDropdownConfig>
    hover?: Partial<ITextDropdownConfig>
    placeholder?: string;
    type?: TextDropdownType;
    value?: string;
}

export class TextDropdown extends React.PureComponent<ITextDropdownProps> {

    private options: { [key: string]: ITextDropdownConfig } = { }

    public render() {
        return (
            <div>
                <Text>Howdy</Text>
                <div style={{width: "400px", position: "relative" }}>
                    <StyledTextDropdown
                        value={this.props.value}
                        placeholder={this.props.placeholder}
                        {...this.styles()}
                    />
                    <img
                        src="./we-have-moved-truck.svg"
                        alt="we've moved"
                        height="20px"
                        width="40px"
                        style={{ display: "block", position: "absolute", top: this.calcIconHeight(36, 20), right: "16px" }}
                        onClick={this.showDropdown}
                    />
                </div>
            </div>
        );
    }

    private calcIconHeight(parentHeight: number, iconHeight: number) {
        return `${(parentHeight / 2) - (iconHeight / 2)}px`;
    }

    private showDropdown = () => {
        alert('clicked');
    }


    private styles(): ITextDropdownConfig {
        const { type, config, hover, focus } = this.props;
        const container = this.options[type!] || defaults;
        const hi = this.props.config ? merge({}, container, config) : container;
        hi.hover = merge({}, hi, hover );
        hi.focus = merge({}, hi, focus );
        return hi;
    }
}

function styleTime(props: any) {
    return `
        display: flex;
        position: relative;
        box-sizing: border-box;
        border: 1px solid #D1D7E0;
        padding: 0 8% 0 8px;
        line-height: ${themeHelper.chooseLineHeight(props)};
        color: ${themeHelper.chooseColor(props)};
        font-size: ${themeHelper.chooseFontSize(props)}
        background-color: ${themeHelper.chooseBackgroundColor(props)};
        width: ${themeHelper.chooseWidth(props)};
        border-radius: ${themeHelper.chooseBorderRadius(props)};
        height: ${themeHelper.chooseHeight(props)};

        &::-webkit-input-placeholder {
            color: #ABB1BE;
        }
    `;
}

function hoverTime({ theme, hover }: { theme: ITheme, hover: ITextDropdownConfig }) {
    return hover && styleTime({ theme, ...hover });
}
function focusTime({ theme, focus }: { theme: ITheme, focus: ITextDropdownConfig }) {
    return focus && styleTime({ theme, ...focus })
}

const StyledTextDropdown = styled.input.attrs<ITextDropdownConfig>({ type: 'text' })`
   ${ styleTime }
   &:hover { ${ hoverTime }; outline: none; }
   &:focus { ${ focusTime }; outline: none; }
`