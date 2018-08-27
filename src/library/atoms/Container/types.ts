import { HeightOption, IFlex, ThemeColor, WidthOption } from '../../theme/interface';

export interface IContainerConfig {
    backgroundColor: ThemeColor;
    width: WidthOption;
    height: HeightOption;
    position: {
        flex: IFlex;
    }
}

export enum ContainerType {
    Background = 'background',
    Content = 'content',
    Card = 'card',
    MainContent = 'main_content',
}