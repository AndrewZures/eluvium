import { merge } from 'lodash';
import { HeightOption, ThemeColor, WidthOption } from '../../../theme/interface';
import { IContainerConfig } from "../types";
import { defaults } from './defaults';

const mainContent: Partial<IContainerConfig> = {
    backgroundColor: ThemeColor.Secondary,
    height: HeightOption.Full,
    width: WidthOption.MainContent,
}

export const mainContentConfig: IContainerConfig = merge({}, defaults, mainContent);