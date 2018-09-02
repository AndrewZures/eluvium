export interface IText {
    lineHeight: ILineHeight;
    fontSize: IFontSize;
}

// Line Height

export interface ILineHeight {
    small: string;
    medium: string;
}

export type LineHeightOption =
    'small' |
    'medium'

// Font Size

export interface IFontSize {
    medium: string;
}

export type FontSizeOption =
   'medium'