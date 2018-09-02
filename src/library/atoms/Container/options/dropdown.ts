import { BoxShadowOption, HeightOption } from '../../../theme/interface';
import { BorderRadiusOption } from '../../../theme/interface/borderRadius';
import { ThemeColor } from '../../../theme/interface/colors';
import { WidthOption } from '../../../theme/interface/width';
import { IContainerConfig } from "../types";
import { defaults } from './defaults';

const dropdownOption: Partial<IContainerConfig> = {
    backgroundColor: ThemeColor.Empty,
    borderRadius: BorderRadiusOption.SlightlyRounded,
    boxShadow: BoxShadowOption.Medium,
    height: HeightOption.Small,
    width: WidthOption.Input,
}

export const dropdownConfig: IContainerConfig = {...defaults, ...dropdownOption};