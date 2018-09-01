import { merge } from 'lodash';
import * as React from 'react';
import styled from 'styled-components';
import { ITextInputConfig, TextInputType } from './types';

import { ITheme } from '../../theme/interface';
import { defaults } from './predefined/defaults';

// helpers
import * as themeHelper from '../../theme/helpers';

// options
import { minimalConfig } from './predefined/minimal';

interface ITextInputProps extends Partial<ITextInputConfig> {
    config?: Partial<ITextInputConfig>;
    focus?: Partial<ITextInputConfig>
    hover?: Partial<ITextInputConfig>
    placeholder?: string;
    type?: TextInputType;
    value?: string;
}

export class TextInput extends React.PureComponent<ITextInputProps> {

    private options: { [key: string]: ITextInputConfig } = {
        [TextInputType.Minimal]: minimalConfig,
    }

    public render() {
        return (
            <StyledTextInput
                value={this.props.value}
                placeholder={this.props.placeholder}
                {...this.styles()}
            />
        );
    }

    private styles(): ITextInputConfig {
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
        box-sizing: border-box;
        padding: 0 8px;
        border: 1px solid #D1D7E0;
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

function hoverTime({ theme, hover }: { theme: ITheme, hover: ITextInputConfig }) {
    return hover && styleTime({ theme, ...hover });
}
function focusTime({ theme, focus }: { theme: ITheme, focus: ITextInputConfig }) {
    return focus && styleTime({ theme, ...focus })
}

const StyledTextInput = styled.input.attrs<ITextInputConfig>({ type: 'text' })`
   ${ styleTime }
   &:hover { ${ hoverTime }; outline: none; }
   &:focus { ${ focusTime }; outline: none; }
`