import { HeightOption, ThemeColor, WidthOption} from '../../../theme/interface';
import { IContainerConfig } from "../types";

export const defaults: IContainerConfig = {
    backgroundColor: ThemeColor.None,
    height: HeightOption.Full,
    width: WidthOption.Full,
}