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
    Full = 'full',
    HalfScreen = 'half_screen',
    MainContent = 'main_content',
}

export enum HeightOption {
    Full = 'full',
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
    }
    width: {
        full: string;
        half_screen: string;
        main_content: string;
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