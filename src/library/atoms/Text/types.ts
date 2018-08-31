import { HeightOption } from '../../theme/interface';
import { ThemeColor } from '../../theme/interface/colors';
import { FontSizeOption, LineHeightOption } from '../../theme/interface/text';
import { WidthOption } from '../../theme/interface/width';

export interface ITextConfig {
    color: ThemeColor;
    backgroundColor: ThemeColor;
    width: WidthOption;
    height: HeightOption;
    fontSize: FontSizeOption,
    lineHeight: LineHeightOption,
    hover?: Partial<ITextConfig>;
    focus?: Partial<ITextConfig>;
}

export enum TextType {
    Standard = 'standard',
}