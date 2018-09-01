export interface IText {
    lineHeight: ILineHeight;
    fontSize: IFontSize;
}

// Line Height

export interface ILineHeight {
    small: string;
    medium: string;
}

export enum LineHeightOption {
    Small = 'small',
    Medium = 'medium'
}

// Font Size

export interface IFontSize {
    medium: string;
}

export enum FontSizeOption {
    Medium = 'medium'
}