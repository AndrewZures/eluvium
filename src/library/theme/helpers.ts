import { HeightOption, ITheme, ThemeColor, WidthOption } from './interface';

export function chooseWidth(theme: ITheme, width: WidthOption) {
    return theme.sizing.width[width]
};

export function chooseHeight(theme: ITheme, height: HeightOption) {
    return theme.sizing.height[height];
}

export function chooseColor(theme: ITheme, color: ThemeColor) {
    return theme.colors[color];
}