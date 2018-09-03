import * as React from 'react';
import { ITextConfig } from './types';

// options
import { RawText } from './RawText';

import { defaults } from './predefined/defaults';

interface ITextProps {
    type?: string;
    custom?: Partial<ITextConfig>;
}

export class Text extends React.PureComponent<ITextProps> {

    private options: { [key: string]: ITextConfig } = {
    }

    public render() {
        return (
            <RawText
                defaults={this.options[this.props.type!] || defaults}
                custom={this.props.custom || {}}
            >
                {this.props.children}
            </RawText>
        );
    }
}