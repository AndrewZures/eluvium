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

export type ContainerType = 
    'background' |
    'content' |
    'card' |
    'main_content' |
    'dropdown'