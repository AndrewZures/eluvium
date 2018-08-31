import { HeightOption, ThemeColor } from '../../theme/interface';
import { BorderRadiusOption } from '../../theme/interface/borderRadius';
import { WidthOption } from '../../theme/interface/width';

export interface ITextInputConfig {
    color: ThemeColor;
    backgroundColor: ThemeColor;
    width: WidthOption;
    height: HeightOption;
    borderRadius: BorderRadiusOption,
    hover?: Partial<ITextInputConfig>;
    focus?: Partial<ITextInputConfig>;
}

export enum TextInputType {
    Standard = 'standard',
}