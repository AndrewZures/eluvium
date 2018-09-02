import { AlignItemsOption, BoxShadowOption, HeightOption, JustifyContentOption } from '../../../theme/interface';
import { BorderRadiusOption } from '../../../theme/interface/borderRadius';
import { ThemeColor } from '../../../theme/interface/colors';
import { WidthOption } from '../../../theme/interface/width';
import { IContainerConfig } from "../types";

export const defaults: IContainerConfig = {
    alignItems: AlignItemsOption.Center,
    backgroundColor: ThemeColor.None,
    borderRadius: BorderRadiusOption.None,
    boxShadow: BoxShadowOption.None,
    height: HeightOption.Full,
    justifyContent: JustifyContentOption.Center,
    width: WidthOption.Full,
}