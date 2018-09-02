import { AlignItemsOption, BoxShadowOption, HeightOption, JustifyContentOption } from '../../theme/interface';
import { BorderRadiusOption } from '../../theme/interface/borderRadius';
import { ThemeColor } from '../../theme/interface/colors';
import { WidthOption } from '../../theme/interface/width';

export interface IContainerConfig {
    backgroundColor: ThemeColor;
    width: WidthOption;
    height: HeightOption;
    borderRadius: BorderRadiusOption,
    boxShadow: BoxShadowOption,
    alignItems: AlignItemsOption,
    justifyContent: JustifyContentOption,
}

export enum ContainerType {
    Background = 'background',
    Content = 'content',
    Card = 'card',
    MainContent = 'main_content',
    Dropdown = 'dropdown',
}