import * as React from 'react';
import { IRawInterface } from '../../theme/helpers';
import { IconConfig } from './types';

import { RawIcon } from './RawIcon';

import { defaults } from './predefined/defaults';

export interface IconProps extends IRawInterface<IconConfig> {
    src: string;
    type?: string;
    alt?: string;
    onClick?: () => void;
}

export class Icon extends React.Component<IconProps> {
    private options = {}

    public render() {
        return <RawIcon
            {...this.props}
            defaults={this.options[this.props.type!] || defaults}
            custom={this.props.custom || {}}
        />

    }
}
// return <img src="./we-have-moved-truck.svg"
//      alt="we've moved"
//      height="20px"
//      width="40px"
//     //  style={{ display: "block", position: "absolute", top: this.calcIconHeight(36, 20), right: "16px" }}
//      onClick={this.props.onClick}
// />
