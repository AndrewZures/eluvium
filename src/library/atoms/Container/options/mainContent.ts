import { merge } from 'lodash';
import { HeightOption } from '../../../theme/interface';
import { ThemeColor } from '../../../theme/interface/colors';
import { WidthOption } from '../../../theme/interface/width';
import { IContainerConfig } from "../types";
import { defaults } from './defaults';

const mainContent: Partial<IContainerConfig> = {
    backgroundColor: ThemeColor.Secondary,
    height: HeightOption.Full,
    width: WidthOption.MainContent,
}

export const mainContentConfig: IContainerConfig = merge({}, defaults, mainContent);