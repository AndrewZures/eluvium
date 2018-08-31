import { HeightOption } from '../../../theme/interface';
import { BorderRadiusOption } from '../../../theme/interface/borderRadius';
import { ThemeColor } from '../../../theme/interface/colors';
import { WidthOption } from '../../../theme/interface/width';
import { ITextInputConfig } from '../types';

export const defaults: ITextInputConfig = {
    backgroundColor: ThemeColor.Background,
    borderRadius: BorderRadiusOption.None,
    color: ThemeColor.Error,
    height: HeightOption.Input,
    width: WidthOption.Input,
}