import { HeightOption } from '../../theme/interface';
import { BorderRadiusOption } from '../../theme/interface/borderRadius';
import { ThemeColor } from '../../theme/interface/colors';
import { FontSizeOption, LineHeightOption } from '../../theme/interface/text';
import { WidthOption } from '../../theme/interface/width';

export interface ITextInputConfig {
    backgroundColor: ThemeColor;
    borderRadius: BorderRadiusOption,
    color: ThemeColor;
    fontSize: FontSizeOption,
    height: HeightOption;
    lineHeight: LineHeightOption,
    paddingBottom: string;
    paddingLeft: string;
    paddingRight: string,
    paddingTop: string;
    width: WidthOption;
    
    hover?: Partial<ITextInputConfig>;
    focus?: Partial<ITextInputConfig>;
}

export type TextInputType =
    'minimal' |
    'standard'