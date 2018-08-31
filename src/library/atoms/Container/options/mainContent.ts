import { merge } from 'lodash';
import { HeightOption, ThemeColor } from '../../../theme/interface';
import { WidthOption } from '../../../theme/interface/width';
import { IContainerConfig } from "../types";
import { defaults } from './defaults';

const mainContent: Partial<IContainerConfig> = {
    backgroundColor: ThemeColor.Secondary,
    height: HeightOption.Full,
    width: WidthOption.MainContent,
}

export const mainContentConfig: IContainerConfig = merge({}, defaults, mainContent);