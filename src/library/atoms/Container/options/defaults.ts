import { AlignItemsOption, HeightOption, JustifyContentOption } from '../../../theme/interface';
import { BorderRadiusOption } from '../../../theme/interface/borderRadius';
import { ThemeColor } from '../../../theme/interface/colors';
import { WidthOption } from '../../../theme/interface/width';
import { IContainerConfig } from "../types";

export const defaults: IContainerConfig = {
    backgroundColor: ThemeColor.None,
    borderRadius: BorderRadiusOption.None,
    height: HeightOption.Full,
    position: {
        flex: {
            align_items: AlignItemsOption.Center,
            justify_content: JustifyContentOption.Center,
        }
    },
    width: WidthOption.Full,
}