import { HeightOption } from '../../theme/interface';
import { BorderRadiusOption } from '../../theme/interface/borderRadius';
import { ThemeColor } from '../../theme/interface/colors';
import { FontSizeOption, LineHeightOption } from '../../theme/interface/text';
import { WidthOption } from '../../theme/interface/width';

export interface ITextDropdownConfig {
    color: ThemeColor;
    backgroundColor: ThemeColor;
    width: WidthOption;
    height: HeightOption;
    borderRadius: BorderRadiusOption,
    fontSize: FontSizeOption,
    lineHeight: LineHeightOption,
    hover?: Partial<ITextDropdownConfig>;
    focus?: Partial<ITextDropdownConfig>;
}

export type TextDropdownType =
    'minimal' |
    'standard'