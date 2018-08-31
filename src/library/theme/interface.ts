import { IBorderRadius } from './interface/borderRadius';
import { IColors } from './interface/colors';
import { IWidth } from './interface/width';

export interface ITheme {
    colors: IColors;
    sizing: ISizing;
    position: IPosition;
}

export enum HeightOption {
    Full = 'full',
    Small = 'small',
    Input = 'input',
    Tiny = 'tiny',
}

export enum InputHeightOption {
    Medium = 'medium'
}

export enum InputWidthOptions {
    Medium = 'medium',
    SmallMedium = 'small_medium',
    Small = 'small',
    Tiny = 'tiny',
}

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
    none: null,
    space_around: string;
    space_between: string;
    space_evenly: string;
    start: string;
}

export enum JustifyContentOption {
    Center = 'center',
    End = 'end',
    SpaceAround = 'space_around',
    SpaceBetween = 'space_between',
    SpaceEvenly = 'space_evenly',
    Start = 'start',
    None = 'none',
}

export interface IAlignItems {
    baseline: string;
    center: string;
    start: string;
    end: string;
    stretch: string;
}

export enum AlignItemsOption {
    Baseline = 'baseline',
    Center = 'center',
    Start = 'flex-start',
    End = 'flex-end',
    Stretch = 'stretch',
}