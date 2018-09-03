import { ITextConfig } from '../types';

export const defaults: Partial<ITextConfig> = {
    color: 'primary',
    fontSize: 'medium',
    height: 'input',
    lineHeight: 'small',
    width: 'input',
}

export const defaultHover: Partial<ITextConfig> = {
    color: 'error',
}