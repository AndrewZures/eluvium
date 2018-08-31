import { merge } from 'lodash';
import { BorderRadiusOption, HeightOption, ThemeColor, WidthOption } from '../../../theme/interface';
import { IContainerConfig } from "../types";
import { defaults } from './defaults';

const cardOption: Partial<IContainerConfig> = {
    backgroundColor: ThemeColor.None,
    borderRadius: BorderRadiusOption.SlightlyRounded,
    height: HeightOption.Tiny,
    width: WidthOption.Small,
}

export const cardConfig: IContainerConfig = merge({}, defaults, cardOption);