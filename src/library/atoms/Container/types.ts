import { HeightOption, ThemeColor, WidthOption } from '../../theme/interface';

export interface IContainerConfig {
    backgroundColor: ThemeColor;
    width: WidthOption;
    height: HeightOption;
}

export enum ContainerType {
    Background = 'background',
    Content = 'content',
    Card = 'card',
    MainContent = 'main_content',
}