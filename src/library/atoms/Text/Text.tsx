import { merge } from 'lodash';
import * as React from 'react';
import styled from 'styled-components';
import { ITextConfig, TextType } from './types';

// helpers
import * as themeHelper from '../../theme/helpers';

// options
import { ITheme } from '../../theme/interface';
import { defaults } from './predefined/defaults';


export interface ITextProps extends Partial<ITextConfig> {
    config?: Partial<ITextConfig>;
    focus?: Partial<ITextConfig>
    hover?: Partial<ITextConfig>
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
            <StyledText {...this.styles()}>
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
        box-sizing: border-box;
        font-family: sans-serif;
        font-weight: 600;
        padding: 0 0 8px 0;
        line-height: ${themeHelper.chooseLineHeight(props)};
        color: ${themeHelper.chooseColor(props)};
        font-size: ${themeHelper.chooseFontSize(props)}
        background-color: ${themeHelper.chooseBackgroundColor(props)};
        width: ${themeHelper.chooseWidth(props)};
    `;
}

function hoverTime({ theme, hover }: { theme: ITheme, hover: ITextConfig }) {
    return hover && `&:hover { ${styleTime({ theme, ...hover }) } }`;
}
function focusTime({ theme, focus }: { theme: ITheme, focus: ITextConfig }) {
    return focus && `&:focus { ${styleTime({ theme, ...focus }) } }`;
}

const StyledText = styled.div.attrs<ITextConfig>({ type: 'text' })`
   ${ styleTime }
   ${ hoverTime }
   ${ focusTime }
`