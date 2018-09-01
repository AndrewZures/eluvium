import { HeightOption } from '../../../theme/interface';
import { BorderRadiusOption } from '../../../theme/interface/borderRadius';
import { ThemeColor } from '../../../theme/interface/colors';
import { FontSizeOption, LineHeightOption } from '../../../theme/interface/text';
import { WidthOption } from '../../../theme/interface/width';
import { ITextInputConfig } from '../types';

export const defaults: ITextInputConfig = {
    backgroundColor: ThemeColor.Empty,
    borderRadius: BorderRadiusOption.SlightlyRounded,
    color: ThemeColor.Primary,
    fontSize: FontSizeOption.Medium,
    height: HeightOption.Input,
    lineHeight: LineHeightOption.Medium,
    width: WidthOption.Input,
}