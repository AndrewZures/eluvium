import { merge } from 'lodash';
import { HeightOption } from '../../../theme/interface';
import { BorderRadiusOption } from '../../../theme/interface/borderRadius';
import { ThemeColor } from '../../../theme/interface/colors';
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