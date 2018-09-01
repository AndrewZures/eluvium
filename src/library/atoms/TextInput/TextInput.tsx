import { merge } from 'lodash';
import * as React from 'react';
import styled from 'styled-components';
import { ITextInputConfig, TextInputType } from './types';

// helpers
import * as themeHelper from '../../theme/helpers';

// options
// import { backgroundConfig } from './options/background';
// import { cardConfig } from './options/card';
import { ITheme } from '../../theme/interface';
import { defaults } from './predefined/defaults';
// import { mainContentConfig } from './options/mainContent';


interface ITextInputProps extends Partial<ITextInputConfig> {
    config?: Partial<ITextInputConfig>;
    focus?: Partial<ITextInputConfig>
    hover?: Partial<ITextInputConfig>
    placeholder?: string;
    styleType?: TextInputType;
    value?: string;
}

export class TextInput extends React.PureComponent<ITextInputProps> {

    private options: { [key: string]: ITextInputConfig } = {
        // [ContainerType.Background]: backgroundConfig,
        // [ContainerType.Card]: cardConfig,
        // [ContainerType.MainContent]: mainContentConfig
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
        const { styleType, config, hover, focus } = this.props;
        const container = this.options[styleType!] || defaults;
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
        padding: 0;
        border: none;
        line-height: ${themeHelper.chooseLineHeight(props)};
        color: ${themeHelper.chooseColor(props)};
        font-size: ${themeHelper.chooseFontSize(props)}
        background-color: ${themeHelper.chooseBackgroundColor(props)};
        width: ${themeHelper.chooseWidth(props)};
        border-radius: ${themeHelper.chooseBorderRadius(props)};
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
   &:hover { ${ hoverTime } }
   &:focus { ${ focusTime } }
`
