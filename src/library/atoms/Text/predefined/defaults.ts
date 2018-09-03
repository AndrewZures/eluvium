import { ITextConfig } from '../types';

const defaultHover: Partial<ITextConfig> = {
    color: 'error',
}

export const defaults: Partial<ITextConfig> = {
    color: 'primary',
    fontSize: 'medium',
    height: 'input',
    hover: defaultHover,
    lineHeight: 'small',
    width: 'input',
}