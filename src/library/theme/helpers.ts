import { AlignItemsOption, BoxShadowOption, HeightOption, JustifyContentOption } from './interface';

import { BorderRadiusOption } from './interface/borderRadius';
import { ThemeColor } from './interface/colors';
import { FontSizeOption, LineHeightOption } from './interface/text';
import { WidthOption } from './interface/width';

type Field =
    'height' |
    'backgroundColor' |
    'width' |
    'borderRadius' |
    'alignItems' |
    'justifyContent'

export function choose(fieldId: Field, { theme, presets, custom }: { theme: any, presets: any, custom: any }): string {
    switch(fieldId) {
        case 'alignItems': return chooseAlignItems(theme, presets.alignItems, custom.alignItems);
        case 'backgroundColor': return chooseBackgroundColor2(theme, presets.backgroundColor, custom.backgroundColor);
        case 'borderRadius': return chooseBorderRadius(theme, presets.borderRadius, custom.borderRadius);
        case 'justifyContent': return chooseJustifyContent(theme, presets.borderRadius, custom.borderRadius);
        case 'height': return chooseHeight(theme, presets.height, custom.height);
        case 'width': return chooseWidth(theme, presets.width, custom.width);
        default: return '';
    }
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

// export function chooseWidth({ theme, width }: { theme: any, width: WidthOption }) {
//     return theme.sizing.width[width];
// }

export function chooseWidth(theme: any, defaultWidth?: WidthOption, customWidth?: WidthOption) {
    const width = customWidth || defaultWidth;
    return width ? `width: ${theme.sizing.width[width]};` : '';
}

export function chooseHeight(theme: any, defaultHeight?: HeightOption, customHeight?: HeightOption) {
    const height = customHeight || defaultHeight;
    return height ? `height: ${theme.sizing.height[height]};` : '';
}

export function chooseColor({ theme, color }: { theme: any, color: ThemeColor | undefined }) {
    return theme.colors[color!] || ThemeColor.Primary;
}

// export function chooseColor2({theme, defaultColor, customColor }: { theme: any, defaultColor?: OptionalThemeColor, customColor?: OptionalThemeColor }): string;
export function chooseColor2(theme: any, defaultColor?: ThemeColor, customColor?: ThemeColor): string {
    return theme.colors[customColor || defaultColor!];
}

export function chooseBackgroundColor2(theme: any, defaultColor?: ThemeColor, customColor?: ThemeColor): string {
    const color = customColor || defaultColor;
    return color ? `background-color: ${theme.colors[color]};` : '';
}

export function chooseBackgroundColor({ theme, backgroundColor }: { theme: any, backgroundColor: ThemeColor }) {
    return chooseColor({theme, color: backgroundColor});
}

export function oldChooseJustifyContent({ theme, position }: { theme: any, position: any }) {
    return theme.position.flex.justify_content[position.flex.justify_content];
}

export function oldChooseAlignItems({ theme, position }: { theme: any, position: any }) {
    return theme.position.flex.align_items[position.flex.align_items];
}

export function chooseAlignItems2({ theme, position }: { theme: any, position: any }) {
    return position ? `align-items: ${theme.position.flex.align_items[position.flex.align_items]}` : null;
}

export function oldChooseBorderRadius({ theme, borderRadius }: { theme: any, borderRadius:  BorderRadiusOption }) {
    return theme.sizing.borderRadius[borderRadius];
}

export function chooseFontSize({ theme, fontSize }: { theme: any, fontSize: FontSizeOption }) {
    return theme.text.fontSize[fontSize];
}

export function chooseLineHeight({ theme, lineHeight }: { theme: any, lineHeight: LineHeightOption }) {
    return theme.text.lineHeight[lineHeight];
}

export function chooseBoxShadow({ theme, boxShadow }: { theme: any, boxShadow: BoxShadowOption }) {
    return theme.sizing.boxShadow[boxShadow]
}
