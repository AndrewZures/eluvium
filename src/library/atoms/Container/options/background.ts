import { merge } from 'lodash';
import { ThemeColor } from '../../../theme/interface/colors';
import { IContainerConfig } from "../types";
import { defaults } from './defaults';

const backgroundOption: Partial<IContainerConfig> = {
    backgroundColor: ThemeColor.Background,
}

export const backgroundConfig: IContainerConfig = merge({}, defaults, backgroundOption);

