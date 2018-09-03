import { HeightOption } from '../../theme/interface';
import { PositionOption } from '../../theme/interface/position';
import { WidthOption } from '../../theme/interface/width';

export interface IconConfig {
    width: WidthOption;
    height: HeightOption;
    position: PositionOption;
    top: string;
    bottom: string;
    right: string;
    left: string;
    marginBottom: string,
    marginTop: string,
    marginLeft: string,
    marginRight: string,
    hover?: Partial<IconConfig>;
    focus?: Partial<IconConfig>;
}