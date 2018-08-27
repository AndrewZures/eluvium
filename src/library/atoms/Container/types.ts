import { AlignItemsOption, HeightOption, JustifyContentOption, ThemeColor, WidthOption } from '../../theme/interface';

export interface IContainerConfig {
    backgroundColor: ThemeColor;
    width: WidthOption;
    height: HeightOption;
    position: {
        flex: {
            align_items: AlignItemsOption,
            justify_content: JustifyContentOption,
        }
    }
}

export enum ContainerType {
    Background = 'background',
    Content = 'content',
    Card = 'card',
    MainContent = 'main_content',
}