import { ITextInputConfig } from '../types';

import { defaults } from './defaults';

export const minimalOption: Partial<ITextInputConfig> = {
    backgroundColor: 'empty',
    borderRadius: 'none',
    color: 'primary',
    fontSize: 'medium',
    height: 'input',
    lineHeight: 'medium',
    width: 'input',
}

export const minimalConfig: ITextInputConfig = {...defaults, ...minimalOption};