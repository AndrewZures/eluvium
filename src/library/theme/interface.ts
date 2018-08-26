export interface ITheme {
    colors: IColors;
    sizing: ISizing;
}

export enum ThemeColor {
    Background = "background",
    // Brand,
    None = "none",
    Error = "error",
    // Guide,
    // Primary,
    // Secondary,
    // Stroke,
    // Success,
    // Warning,
    // WarningHover,
}

export enum WidthOption {
    Full = 'full',
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
    }
}