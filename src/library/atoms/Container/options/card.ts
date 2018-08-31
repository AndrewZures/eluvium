import { merge } from 'lodash';
import { HeightOption, ThemeColor } from '../../../theme/interface';
import { BorderRadiusOption } from '../../../theme/interface/borderRadius';
import { WidthOption } from '../../../theme/interface/width';
import { IContainerConfig } from "../types";
import { defaults } from './defaults';

const cardOption: Partial<IContainerConfig> = {
    backgroundColor: ThemeColor.None,
    borderRadius: BorderRadiusOption.SlightlyRounded,
    height: HeightOption.Tiny,
    width: WidthOption.Small,
}

export const cardConfig: IContainerConfig = merge({}, defaults, cardOption);