import { ITextInputConfig } from '../types';

export const defaults: Partial<ITextInputConfig> = {
    backgroundColor: 'empty',
    borderRadius: 'slightly_rounded',
    color: 'primary',
    fontSize: 'medium',
    height: 'inherit',
    paddingLeft: '12px',
    width: 'inherit',
}

const pLeftIcon: Partial<ITextInputConfig> = {
    paddingLeft: '10%'
}

const pRightIcon: Partial<ITextInputConfig> = {
    paddingRight: '10%'
}

export const leftIcon = {...defaults, ...pLeftIcon};
export const rightIcon = {...defaults, ...pRightIcon}