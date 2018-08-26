import { HeightOption, ITheme, PositionOption, ThemeColor, WidthOption } from './interface';

export function chooseWidth({ theme, width }: { theme: any, width: WidthOption }) {
    return theme.sizing.width[width];
}

export function chooseHeight({ theme, height }: { theme: any, height: HeightOption }) {
    return theme.sizing.height[height];
}

export function chooseColor(theme: ITheme, color: ThemeColor) {
    return theme.colors[color];
}

export function chooseBackgroundColor({ theme, backgroundColor }: { theme: any, backgroundColor: ThemeColor }) {
    return chooseColor(theme, backgroundColor);
}

export function choosePosition({ theme, position }: { theme: any, position: PositionOption }) {
    return theme.position[position];
}