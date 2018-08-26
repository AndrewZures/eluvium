import { HeightOption, ITheme, ThemeColor, WidthOption } from './interface';

export const chooseWidth = (theme: ITheme, width: WidthOption) => theme.sizing.width[width]
export const chooseHeight = (theme: ITheme, height: HeightOption) => theme.sizing.height[height]
export const chooseColor = (theme: ITheme, color: ThemeColor) => theme.colors[color];