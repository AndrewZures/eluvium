import { AlignItemsOption, HeightOption, ITheme, JustifyContentOption, PseudoClass } from './interface';

import { BorderRadiusOption } from './interface/borderRadius';
import { ThemeColor } from './interface/colors';
import { PositionOption } from './interface/position';
import { FontSizeOption, LineHeightOption } from './interface/text';
import { WidthOption } from './interface/width';

type Field =
    'alignItems' |
    'backgroundColor' |
    'borderRadius' |
    'bottom' |
    'color' |
    'fontSize' |
    'height' |
    'justifyContent' |
    'left' |
    'lineHeight' |
    'margin-bottom' |
    'margin-left' |
    'margin-right' |
    'margin-top' |
    'padding-bottom' |
    'padding-left' |
    'padding-right' |
    'padding-top' |
    'position' |
    'right' |
    'top' |
    'transform' |
    'width'

export function choose(fieldId: Field, { theme, defaults = {}, custom = {}}: { theme: any, defaults?: any, custom?: any }): string {
    switch(fieldId) {
        case 'alignItems': return chooseAlignItems(theme, defaults.alignItems, custom.alignItems);
        case 'backgroundColor': return chooseBackgroundColor(theme, defaults.backgroundColor, custom.backgroundColor);
        case 'borderRadius': return chooseBorderRadius(theme, defaults.borderRadius, custom.borderRadius);
        case 'color': return chooseColor(theme, defaults.color, custom.color);
        case 'fontSize': return chooseFontSize(theme, defaults.fontSize, custom.fontSize);
        case 'height': return chooseHeight(theme, defaults.height, custom.height);
        case 'justifyContent': return chooseJustifyContent(theme, defaults.justifyContent, custom.justifyContent);
        case 'lineHeight': return chooseLineHeight(theme, defaults.lineHeight, custom.lineHeight);
        case 'position': return choosePosition(defaults.position, custom.position);
        case 'top': return genChoose('top', defaults.top, custom.top);
        case 'bottom': return genChoose('bottom', defaults.bottom, custom.bottom);
        case 'right': return genChoose('right', defaults.right, custom.right);
        case 'left': return genChoose('left', defaults.left, custom.left);
        case 'width': return chooseWidth(theme, defaults.width, custom.width);
        case 'margin-bottom': return genChoose(fieldId, defaults.marginBottom, custom.marginBottom);
        case 'margin-left': return genChoose(fieldId, defaults.marginLeft, custom.marginLeft);
        case 'margin-right': return genChoose(fieldId, defaults.marginRight, custom.marginRigth);
        case 'margin-top': return genChoose(fieldId, defaults.marginTop, custom.marginTop);
        case 'padding-bottom': return genChoose(fieldId, defaults.paddingBottom, custom.paddingBottom);
        case 'padding-left': return genChoose(fieldId, defaults.paddingLeft, custom.paddingLeft);
        case 'padding-right': return genChoose(fieldId, defaults.paddingRight, custom.paddingRight);
        case 'padding-top': return genChoose(fieldId, defaults.paddingTop, custom.paddingTop);
        case 'transform': return genChoose(fieldId, defaults.transform, custom.transform);
        default: return '';
    }
}

export function choose3(fieldId: Field, theme: ITheme, defaults?: any, custom?: any): string {
    return choose(fieldId, { theme, defaults, custom });
}

export interface IRawInterface<T> {
    defaults?: Partial<T>;
    custom?: Partial<T>;
}

export interface IStyleData<T> { theme: ITheme, defaults?: Partial<T>, custom?: Partial<T>};
export type styleFn<T> = ({ theme, custom, defaults }: IStyleData<T>) => string;
export type styleFn2<T> = (theme: ITheme, defaults?: Partial<T>, custom?: Partial<T>) => string;
// }

// function pseudoClass(key: PseudoClass, props: ThemedStyledProps<IRawTextProps, ITheme>) {
//     const custom = props.custom && props.custom[key];
//     const defaults = props.defaults && props.defaults[key];
//     return custom || defaults ? `&:${key} { ${styleText(props.theme, defaults, custom) } }` : '';
// }

// export function pseudoClass<P extends IRawInterface<C>, C>(key: PseudoClass, fn: styleFn<C>, props: ThemedStyledProps<P, ITheme>) {
//     const custom = props.custom && props.custom[key];
//     const defaults = props.defaults && props.defaults[key];
//     return custom || defaults ? `&:${key} { ${fn(props.theme, defaults, custom) } }` : '';
// }

export function pseudoClass<P extends IRawInterface<C>, C>(
    key: PseudoClass,
    fn: styleFn<C>,
    { theme, custom: c, defaults: d }: { theme: ITheme, custom?: Partial<C>, defaults?: Partial<C>}
): string {
    const custom = c && c[key];
    const defaults = d && d[key];
    return custom || defaults ? `&:${key} { ${fn({theme, defaults, custom}) } }` : '';
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

export function chooseLineHeight(theme: any, defaults?: LineHeightOption, custom?: LineHeightOption): string {
    const lineHeightChoice = custom || defaults;
    return lineHeightChoice ? `line-height ${theme.text.lineHeight[lineHeightChoice]};` : '';
}

export function chooseFontSize(theme: any, defaults?: FontSizeOption, custom?: FontSizeOption): string {
    const fontSizeChoice = custom || defaults;
    return fontSizeChoice ? `font-size: ${theme.text.fontSize[fontSizeChoice]};` : '';
}

export function choosePosition(defaults?: PositionOption, custom?: PositionOption): string {
    const positionChoice = custom || defaults;
    return positionChoice ? `position: ${positionChoice};` : '';
}

export function chooseTop(defaults?: string, custom?: string): string {
    const choice = custom || defaults;
    return choice ? `top: ${choice};` : '';
}

export function chooseBottom(defaults?: string, custom?: string): string {
    const choice = custom || defaults;
    return choice ? `bottom: ${choice};` : '';
}

export function chooseRight(defaults?: string, custom?: string): string {
    const choice = custom || defaults;
    return choice ? `bottom: ${choice};` : '';
}

export function genChoose(field: Field, defaults?: string, custom?: string): string {
    const choice = custom || defaults;
    return choice ? `${field}: ${choice};` : '';
}

// how to make helper function signatures generic?
// type IHelperFn<T> = (theme: any, defaultChioce: T, customChoice: T) => string; 

export function chooseColor(theme: any, defaultColor?: ThemeColor, customColor?: ThemeColor): string {
    const color = customColor || defaultColor;
    return color ? `color: ${theme.colors[color]};` : '';
}

export function chooseBackgroundColor(theme: any, defaultColor?: ThemeColor, customColor?: ThemeColor): string {
    const color = customColor || defaultColor;
    return color ? `background-color: ${theme.colors[color]};` : '';
}