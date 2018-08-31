export interface IText {
    lineHeight: ILineHeight;
    fontSize: IFontSize;
}

// Line Height

export interface ILineHeight {
    medium: string;
}

export enum LineHeightOption {
    Medium = 'medium'
}

// Font Size

export interface IFontSize {
    medium: string;
}

export enum FontSizeOption {
    Medium = 'medium'
}