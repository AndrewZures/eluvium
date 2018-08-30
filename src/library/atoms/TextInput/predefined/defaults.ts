import { BorderRadiusOption, HeightOption, ThemeColor, WidthOption } from '../../../theme/interface';
import { ITextInputConfig } from '../types';

export const defaults: ITextInputConfig = {
    backgroundColor: ThemeColor.Background,
    borderRadius: BorderRadiusOption.None,
    color: ThemeColor.Error,
    height: HeightOption.Input,
    width: WidthOption.Input,
}