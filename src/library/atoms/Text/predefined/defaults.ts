import { HeightOption } from '../../../theme/interface';
import { ThemeColor } from '../../../theme/interface/colors';
import { FontSizeOption, LineHeightOption } from '../../../theme/interface/text';
import { WidthOption } from '../../../theme/interface/width';
import { ITextConfig } from '../types';

export const defaults: ITextConfig = {
    backgroundColor: ThemeColor.Empty,
    color: ThemeColor.Primary,
    fontSize: FontSizeOption.Medium,
    height: HeightOption.Input,
    lineHeight: LineHeightOption.Small,
    width: WidthOption.Input,
}