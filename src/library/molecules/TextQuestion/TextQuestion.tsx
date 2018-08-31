import * as React from 'react';
import styled from 'styled-components';

// helpers
import * as themeHelper from '../../theme/helpers';

// options
import { ITheme } from '../../theme/interface';
import { ITextQuestionConfig } from './types';

import { ITextConfig } from '../../atoms/Text/types';
import { ITextInputConfig } from '../../atoms/TextInput/types';

import { defaults } from './predefined/defaults';

export interface ITextQuestionProps {
    labelConfig?: ITextConfig;
    inputConfig?: ITextInputConfig;
}



export class TextQuestion extends React.PureComponent<ITextQuestionProps> {

    public render() {
        return (
            <StyledTextQuestion {...this.styles()}>
                {this.props.children}
            </StyledTextQuestion>
        );
    }

    private styles() {
        return defaults;
    }
}

function styleTime(props: any) {
    return `
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        line-height: ${themeHelper.chooseLineHeight(props)};
        color: ${themeHelper.chooseColor(props)};
        font-size: ${themeHelper.chooseFontSize(props)}
        background-color: ${themeHelper.chooseBackgroundColor(props)};
        height: ${themeHelper.chooseHeight(props)};
        width: ${themeHelper.chooseWidth(props)};
        border-radius: ${themeHelper.chooseBorderRadius(props)};
    `;
}

function hoverTime({ theme, hover }: { theme: ITheme, hover: ITextQuestionConfig }) {
    return hover && styleTime({ theme, ...hover });
}
function focusTime({ theme, focus }: { theme: ITheme, focus: ITextQuestionConfig }) {
    return focus && styleTime({ theme, ...focus })
}

const StyledTextQuestion = styled.div.attrs<ITextQuestionConfig>({ type: 'text' })`
   ${ styleTime }
   &:hover { ${ hoverTime } }
   &:focus { ${ focusTime } }
`
