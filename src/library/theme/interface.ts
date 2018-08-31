export interface ITheme {
    colors: IColors;
    sizing: ISizing;
    position: IPosition;
}

export enum ThemeColor {
    Background = "background",
    Brand = "brand",
    None = "none",
    Error = "error",
    Guide = "guide",
    Primary = "primary",
    Secondary = "secondary",
    Stroke = "stroke",
    Success = "success",
    Warning = "warning",
    WarningHover = "warning_hover",
}

export enum WidthOption {
    Small = 'small',
    Full = 'full',
    HalfScreen = 'half_screen',
    MainContent = 'main_content',
    Input = 'input',
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

export interface IColors {
    background: string;
    brand: string;
    error: string;
    guide: string;
    primary: string;
    secondary: string;
    stroke: string;
    success: string;
    warning: string;
    warning_hover: string;
    none: null;
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
    width: {
        full: string;
        half_screen: string;
        main_content: string;
        small: string;
        input: string;
    }
    borderRadius: {
        none: null;
        rounded: string;
        semirounded: string;
        slightly_rounded: string;
    }
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

export enum BorderRadiusOption {
    None = 'none',
    Rounded = 'rounded',
    SemiRounded = 'semirounded',
    SlightlyRounded = 'slightly_rounded',
}