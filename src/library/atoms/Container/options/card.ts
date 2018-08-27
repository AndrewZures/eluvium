import { merge } from 'lodash';
import { HeightOption, ThemeColor, WidthOption } from '../../../theme/interface';
import { IContainerConfig } from "../types";
import { defaults } from './defaults';

const cardOption: Partial<IContainerConfig> = {
    backgroundColor: ThemeColor.None,
    height: HeightOption.Small,
    width: WidthOption.Small,
}

export const cardConfig: IContainerConfig = merge({}, defaults, cardOption);