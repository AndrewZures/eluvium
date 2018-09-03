import { HeightOption } from '../../theme/interface';
import { WidthOption } from '../../theme/interface/width';

export interface IconConfig {
    width: WidthOption;
    height: HeightOption;
    hover?: Partial<IconConfig>;
    focus?: Partial<IconConfig>;
}