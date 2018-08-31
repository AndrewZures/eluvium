import { HeightOption } from './interface';
import { BorderRadiusOption } from './interface/borderRadius';
import { ThemeColor } from './interface/colors';
import { FontSizeOption, LineHeightOption } from './interface/text';
import { WidthOption } from './interface/width';

export function chooseWidth({ theme, width }: { theme: any, width: WidthOption }) {
    return theme.sizing.width[width];
}

export function chooseHeight({ theme, height }: { theme: any, height: HeightOption }) {
    return theme.sizing.height[height];
}

export function chooseColor({ theme, color }: { theme: any, color: ThemeColor }) {
    return theme.colors[color];
}

export function chooseBackgroundColor({ theme, backgroundColor }: { theme: any, backgroundColor: ThemeColor }) {
    return chooseColor({theme, color: backgroundColor});
}

export function chooseJustifyContent({ theme, position }: { theme: any, position: any }) {
    return theme.position.flex.justify_content[position.flex.justify_content];
}

export function chooseAlignItems({ theme, position }: { theme: any, position: any }) {
    return theme.position.flex.align_items[position.flex.align_items];
}

export function chooseBorderRadius({ theme, borderRadius }: { theme: any, borderRadius:  BorderRadiusOption }) {
    return theme.sizing.borderRadius[borderRadius];
}

export function chooseFontSize({ theme, fontSize }: { theme: any, fontSize: FontSizeOption }) {
    return theme.text.fontSize[fontSize];
}

export function chooseLineHeight({ theme, lineHeight }: { theme: any, lineHeight: LineHeightOption }) {
    return theme.text.lineHeight[lineHeight];
}
