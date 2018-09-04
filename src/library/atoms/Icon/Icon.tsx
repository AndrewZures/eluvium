import * as React from 'react';
import { IRawInterface } from '../../theme/helpers';
import { IconConfig } from './types';

import { RawIcon } from './RawIcon';

// options
import { defaults } from './predefined/defaults';
import { leftInput, rightInput } from './predefined/leftInput';

type IconType =
    'leftInput' |
    'rightInput'

export interface IconProps extends IRawInterface<IconConfig> {
    src: string;
    type?: IconType;
    alt?: string;
    onClick?: () => void;
}

export class Icon extends React.Component<IconProps> {
    private options: { [key: string]: Partial<IconConfig> } = {
        'leftInput': leftInput,
        'rightInput': rightInput,
    }

    public render() {
        return <RawIcon
            {...this.props}
            defaults={this.options[this.props.type!] || defaults}
            custom={this.props.custom || {}}
        />

    }
}