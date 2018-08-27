import { AlignItemsOption, HeightOption, JustifyContentOption, ThemeColor, WidthOption } from '../../../theme/interface';
import { IContainerConfig } from "../types";

export const defaults: IContainerConfig = {
    backgroundColor: ThemeColor.None,
    height: HeightOption.Full,
    position: {
        flex: {
            align_items: AlignItemsOption.Center,
            justify_content: JustifyContentOption.Center,
        }
    },
    width: WidthOption.Full,
}