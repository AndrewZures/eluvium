import { merge } from 'lodash';
import * as React from 'react';
import styled from 'styled-components';
import { ITextConfig, TextType } from './types';

// helpers
import * as themeHelper from '../../theme/helpers';

// options
import { ITheme } from '../../theme/interface';
import { defaults } from './predefined/defaults';


interface ITextProps extends Partial<ITextConfig> {
    config?: Partial<ITextConfig>;
    focus?: Partial<ITextConfig>
    hover?: Partial<ITextConfig>
    placeholder?: string;
    styleType?: TextType;
    value?: string;
}

export class Text extends React.PureComponent<ITextProps> {

    private options: { [key: string]: ITextConfig } = {
        // [ContainerType.Background]: backgroundConfig,
        // [ContainerType.Card]: cardConfig,
        // [ContainerType.MainContent]: mainContentConfig
    }

    public render() {
        return (
            <StyledText
                value={this.props.value}
                placeholder={this.props.placeholder}
                {...this.styles()}
            >
                {this.props.children}
            </StyledText>
        );
    }

    private styles(): ITextConfig {
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
        font-family: "Source Sans Pro";
        font-weight: 600;
        line-height: ${themeHelper.chooseLineHeight(props)};
        color: ${themeHelper.chooseColor(props)};
        font-size: ${themeHelper.chooseFontSize(props)}
        background-color: ${themeHelper.chooseBackgroundColor(props)};
        height: ${themeHelper.chooseHeight(props)};
        width: ${themeHelper.chooseWidth(props)};
    `;
}

function hoverTime({ theme, hover }: { theme: ITheme, hover: ITextConfig }) {
    return hover && styleTime({ theme, ...hover });
}
function focusTime({ theme, focus }: { theme: ITheme, focus: ITextConfig }) {
    return focus && styleTime({ theme, ...focus })
}

const StyledText = styled.div.attrs<ITextConfig>({ type: 'text' })`
   ${ styleTime }
   &:hover { ${ hoverTime } }
   &:focus { ${ focusTime } }
`