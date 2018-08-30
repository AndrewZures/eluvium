import { merge } from 'lodash';
import * as React from 'react';
import styled from 'styled-components';
import { ITextInputConfig, TextInputType } from './types';

// helpers
import { chooseBackgroundColor, chooseBorderRadius, chooseColor, chooseHeight, chooseWidth } from '../../theme/helpers';

// options
// import { backgroundConfig } from './options/background';
// import { cardConfig } from './options/card';
import { ITheme } from '../../theme/interface';
import { defaults } from './predefined/defaults';
// import { mainContentConfig } from './options/mainContent';


interface ITextInputProps {
    styleType?: TextInputType;
    config?: Partial<ITextInputConfig>;
    value?: string;
    placeholder?: string;
    hover?: Partial<ITextInputConfig>
    focus?: Partial<ITextInputConfig>
}

export class TextInput extends React.PureComponent<ITextInputProps> {

    private options: { [key: string]: ITextInputConfig } = {
        // [ContainerType.Background]: backgroundConfig,
        // [ContainerType.Card]: cardConfig,
        // [ContainerType.MainContent]: mainContentConfig
    }

    public render() {
        return (
            <StyledTextInput3
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
        padding: 8px;
        line-height: 24px;
        color: ${chooseColor(props)};
        border: 1px solid #D1D7E0;
        font-size: 16px;
        background-color: ${chooseBackgroundColor};
        height: ${chooseHeight};
        width: ${chooseWidth(props)};
        border-radius: ${chooseBorderRadius};
    `;
}

function hoverTime({ theme, hover }: { theme: ITheme, hover: ITextInputConfig }) {
    return hover && styleTime({ theme, ...hover });
}
function focusTime({ theme, focus }: { theme: ITheme, focus: ITextInputConfig }) {
    return focus && styleTime({ theme, ...focus })
}

// const StyledTextInput = styled.input.attrs<ITextInputConfig>({ type: 'text' })`
//     display: flex;
//     box-sizing: border-box;
//     padding: 8px;
//     line-height: 24px;
//     color: ${chooseColor};
//     border: 1px solid #D1D7E0;
//     font-size: 16px;
//     background-color: ${chooseBackgroundColor};
//     height: ${chooseHeight};
//     width: ${chooseWidth};
//     border-radius: ${chooseBorderRadius};

//     &:hover {
//         color: orange;
//     }
// `

// const StyledTextInput2 = styled.input.attrs<ITextInputConfig>({ type: 'text' })`
//    ${ styleTime } 
//     &:hover { ${ props => props.hover && styleTime(props.hover) } }
//     &:focus { ${ props => props.focus && styleTime(props.focus) }}
// `

const StyledTextInput3 = styled.input.attrs<ITextInputConfig>({ type: 'text' })`
   ${ styleTime }
   &:hover { ${ hoverTime } }
   &:focus { ${ focusTime } }
`
