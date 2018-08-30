import { BorderRadiusOption, HeightOption, ThemeColor, WidthOption } from '../../theme/interface';

export interface ITextInputConfig {
    color: ThemeColor;
    backgroundColor: ThemeColor;
    width: WidthOption;
    height: HeightOption;
    borderRadius: BorderRadiusOption,
    hover?: Partial<ITextInputConfig>;
    focus?: Partial<ITextInputConfig>;
}

export enum TextInputType {
    Standard = 'standard',
}