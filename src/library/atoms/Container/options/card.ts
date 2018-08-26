import { merge } from 'lodash';
import { ThemeColor } from '../../../theme/interface';
import { IContainerConfig } from "../types";
import { defaults } from './defaults';

const cardOption: Partial<IContainerConfig> = {
    backgroundColor: ThemeColor.Error,
}

export const cardConfig: IContainerConfig = merge({}, defaults, cardOption);