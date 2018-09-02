import { IContainerConfig } from "../types";
import { defaults } from './defaults';

const cardOption: Partial<IContainerConfig> = {
    backgroundColor: 'none',
    borderRadius: 'slightly_rounded',
    height: 'tiny',
    width: 'small',
}

export const cardConfig: IContainerConfig = {...defaults, ...cardOption};