import { AlignItemsOption, BoxShadowOption, HeightOption, JustifyContentOption } from './interface';

import { BorderRadiusOption } from './interface/borderRadius';
import { ThemeColor } from './interface/colors';
import { FontSizeOption, LineHeightOption } from './interface/text';
import { WidthOption } from './interface/width';

type Field =
    'alignItems' |
    'backgroundColor' |
    'borderRadius' |
    'color' |
    'fontSize' |
    'height' |
    'justifyContent' |
    'lineHeight' |
    'width'

export function choose(fieldId: Field, { theme, defaults = {}, custom = {}}: { theme: any, defaults?: any, custom?: any }): string {
    switch(fieldId) {
        case 'alignItems': return chooseAlignItems(theme, defaults.alignItems, custom.alignItems);
        case 'backgroundColor': return chooseBackgroundColor2(theme, defaults.backgroundColor, custom.backgroundColor);
        case 'borderRadius': return chooseBorderRadius(theme, defaults.borderRadius, custom.borderRadius);
        case 'color': return chooseColor(theme, defaults.color, custom.color);
        case 'fontSize': return chooseFontSize(theme, defaults.fontSize, custom.fontSize);
        case 'justifyContent': return chooseJustifyContent(theme, defaults.justifyContent, custom.justifyContent);
        case 'height': return chooseHeight(theme, defaults.height, custom.height);
        case 'lineHeight': return chooseLineHeight(theme, defaults.lineHeight, custom.lineHeight);
        case 'width': return chooseWidth(theme, defaults.width, custom.width);
        default: return '';
    }
}

export function choose3(fieldId: Field, theme: any, defaults?: any, custom?: any): string {
    return choose(fieldId, { theme, defaults, custom });
}

export function chooseBorderRadius(theme: any, defaultRadius: BorderRadiusOption, configRadius: BorderRadiusOption): string {
    const borderRadius = configRadius || defaultRadius;
    return borderRadius ? `border-radius: ${theme.sizing.borderRadius[borderRadius]};` : '';
}

export function chooseJustifyContent(theme: any, defaultJustify: JustifyContentOption, configJustify: JustifyContentOption): string {
    const justifyContent = configJustify || defaultJustify;
    return justifyContent ? `justify-content: ${theme.position.flex.justify_content[justifyContent]};` : '';
}

export function chooseAlignItems(theme: any, defaultAlign: AlignItemsOption, configAlign: AlignItemsOption): string {
    const alignItemsChoice = configAlign || defaultAlign;
    return alignItemsChoice ? `align-items: ${theme.position.flex.align_items[alignItemsChoice]};` : '';
}

export function chooseWidth(theme: any, defaultWidth?: WidthOption, customWidth?: WidthOption) {
    const width = customWidth || defaultWidth;
    return width ? `width: ${theme.sizing.width[width]};` : '';
}

export function chooseHeight(theme: any, defaultHeight?: HeightOption, customHeight?: HeightOption): string {
    const height = customHeight || defaultHeight;
    return height ? `height: ${theme.sizing.height[height]};` : '';
}

export function chooseLineHeight(theme: any, defaults: LineHeightOption, custom: LineHeightOption): string {
    const lineHeightChoice = custom || defaults;
    return lineHeightChoice ? `line-height ${theme.text.lineHeight[lineHeightChoice]};` : '';
}

export function chooseFontSize(theme: any, defaults: FontSizeOption, custom: FontSizeOption): string {
    const fontSizeChoice = custom || defaults;
    return fontSizeChoice ? `font-size: ${theme.text.fontSize[fontSizeChoice]};` : '';
}

// how to make helper function signatures generic?
// type IHelperFn<T> = (theme: any, defaultChioce: T, customChoice: T) => string; 

export function chooseColor(theme: any, defaultColor?: ThemeColor, customColor?: ThemeColor): string {
    const color = customColor || defaultColor;
    return color ? `color: ${theme.colors[color]};` : '';
}

export function oldChooseColor({ theme, color }: { theme: any, color: ThemeColor | undefined }) {
    return theme.colors[color!] || "primary"
}

export function chooseBackgroundColor2(theme: any, defaultColor?: ThemeColor, customColor?: ThemeColor): string {
    const color = customColor || defaultColor;
    return color ? `background-color: ${theme.colors[color]};` : '';
}

export function chooseBackgroundColor({ theme, backgroundColor }: { theme: any, backgroundColor: ThemeColor }) {
    return chooseColor({theme, color: backgroundColor});
}

export function oldChooseBorderRadius({ theme, borderRadius }: { theme: any, borderRadius:  BorderRadiusOption }) {
    return theme.sizing.borderRadius[borderRadius];
}

// export function chooseFontSize({ theme, fontSize }: { theme: any, fontSize: FontSizeOption }) {
//     return theme.text.fontSize[fontSize];
// }

// export function chooseLineHeight({ theme, lineHeight }: { theme: any, lineHeight: LineHeightOption }) {
//     return theme.text.lineHeight[lineHeight];
// }

export function chooseBoxShadow({ theme, boxShadow }: { theme: any, boxShadow: BoxShadowOption }) {
    return theme.sizing.boxShadow[boxShadow]
}
