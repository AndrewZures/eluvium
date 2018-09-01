import { merge } from 'lodash';

import { HeightOption } from '../../../theme/interface';
import { BorderRadiusOption } from '../../../theme/interface/borderRadius';
import { ThemeColor } from '../../../theme/interface/colors';
import { FontSizeOption, LineHeightOption } from '../../../theme/interface/text';
import { WidthOption } from '../../../theme/interface/width';
import { ITextInputConfig } from '../types';

import { defaults } from './defaults';

export const minimalOption: Partial<ITextInputConfig> = {
    backgroundColor: ThemeColor.Empty,
    borderRadius: BorderRadiusOption.None,
    color: ThemeColor.Primary,
    fontSize: FontSizeOption.Medium,
    height: HeightOption.Input,
    lineHeight: LineHeightOption.Medium,
    width: WidthOption.Input,
}

export const minimalConfig: ITextInputConfig = merge({}, defaults, minimalOption);