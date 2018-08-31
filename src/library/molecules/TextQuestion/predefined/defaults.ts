import { HeightOption } from '../../../theme/interface';
import { BorderRadiusOption } from '../../../theme/interface/borderRadius';
import { ThemeColor } from '../../../theme/interface/colors';
import { WidthOption } from '../../../theme/interface/width';
import { ITextQuestionConfig } from '../types';

export const defaults: ITextQuestionConfig = {
    backgroundColor: ThemeColor.Empty,
    borderRadius: BorderRadiusOption.None,
    height: HeightOption.Tiny,
    width: WidthOption.HalfScreen,
}