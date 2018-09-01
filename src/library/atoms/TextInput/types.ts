import { HeightOption } from '../../theme/interface';
import { BorderRadiusOption } from '../../theme/interface/borderRadius';
import { ThemeColor } from '../../theme/interface/colors';
import { FontSizeOption, LineHeightOption } from '../../theme/interface/text';
import { WidthOption } from '../../theme/interface/width';

export interface ITextInputConfig {
    color: ThemeColor;
    backgroundColor: ThemeColor;
    width: WidthOption;
    height: HeightOption;
    borderRadius: BorderRadiusOption,
    fontSize: FontSizeOption,
    lineHeight: LineHeightOption,
    hover?: Partial<ITextInputConfig>;
    focus?: Partial<ITextInputConfig>;
}

export enum TextInputType {
    Minimal = 'minimal',
    Standard = 'standard',
}