import { HeightOption, PositionOption, ThemeColor, WidthOption } from '../../theme/interface';

export interface IContainerConfig {
    backgroundColor: ThemeColor;
    width: WidthOption;
    height: HeightOption;
    position: PositionOption,
}

export enum ContainerType {
    Background = 'background',
    Content = 'content',
    Card = 'card',
    MainContent = 'main_content',
}