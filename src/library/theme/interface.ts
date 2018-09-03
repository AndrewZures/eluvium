import { IBorderRadius } from './interface/borderRadius';
import { IColors } from './interface/colors';
import { IText } from './interface/text';
import { IWidth } from './interface/width';

export interface ITheme {
    colors: IColors;
    sizing: ISizing;
    position: IPosition;
    text: IText;
}

// css selector needs to be moved but okay here for now
export type PseudoClass =
    'hover' |
    'active' |
    'focus'

export type HeightOption =
    'full' |
    'small' |
    'input' |
    'tiny'

export type InputHeightOption =
    'medium'

export type InputWidthOptions =
    'medium' |
    'small_medium' |
    'small' |
    'tiny'

export interface ISizing {
    height: {
        full: string;
        small: string;
        input: string;
        tiny: string;
    },
    inputSizing: {
        height: {
            medium: string;
        },
        width: {
            small: string;
            medium: string;
            small_medium: string;
            tiny: string;
        }
    },
    width: IWidth;
    borderRadius: IBorderRadius;
    boxShadow: IBoxShadow;
}
export interface IPosition {
    flex: IFlex;
}

export interface IFlex {
    direction?: string;
    wrap?: string;
    justify_content: IJustifyContent;
    align_items: IAlignItems;
    align_self?: string;
    flex?: string;
}

export interface IJustifyContent {
    center: string;
    end: string;
    space_around: string;
    space_between: string;
    space_evenly: string;
    start: string;
}

export type JustifyContentOption =
    'center' |
    'end' |
    'space_around' |
    'space_between' |
    'space_evenly' | 
    'start'

export interface IAlignItems {
    baseline: string;
    center: string;
    start: string;
    end: string;
    stretch: string;
}

export type AlignItemsOption = 
    'baseline' |
    'center' | 
    'flex-start' |
    'flex-end' |
    'stretch'

export interface IBoxShadow {
    medium: string;
    none: null;
}

export type BoxShadowOption =
    'medium' |
    'none'