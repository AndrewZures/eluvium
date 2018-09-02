import { IContainerConfig } from "../types";
import { defaults } from './defaults';

const dropdownOption: Partial<IContainerConfig> = {
    backgroundColor: 'empty',
    borderRadius: 'slightly_rounded',
    boxShadow: 'medium',
    height: 'small',
    width: 'input',
}

export const dropdownConfig: IContainerConfig = {...defaults, ...dropdownOption};