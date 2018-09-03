import * as React from 'react';
import { ITextInputConfig, TextInputType } from './types';

import { defaults } from './predefined/defaults';

import { RawTextInput } from './RawTextInput';

// options
import { minimalConfig } from './predefined/minimal';

export interface ITextInputProps extends Partial<ITextInputConfig> {
    custom?: Partial<ITextInputConfig>;
    placeholder?: string;
    type?: TextInputType;
    value?: string;
}

export class TextInput extends React.PureComponent<ITextInputProps> {

    private options: { [key: string]: Partial<ITextInputConfig> } = {
        'minimal': minimalConfig,
    }

    public render() {
        return (
            <RawTextInput
                {...this.props}
                defaults={this.options[this.props.type!] || defaults}
                custom={this.props.custom || {}}
            />
        );
    }
}