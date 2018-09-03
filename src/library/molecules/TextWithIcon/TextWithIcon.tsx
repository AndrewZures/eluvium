import * as React from 'react';
import styled from 'styled-components';

// atoms
import { Icon, IconProps } from '../../atoms/Icon/Icon';
import { ITextInputProps, TextInput } from '../../atoms/TextInput/TextInput';

export interface ITextWithIconProps {
    text: ITextInputProps;
    icon: IconProps;
    iconPosition?: 'left' | 'right';
}

export class TextWithIcon extends React.PureComponent<ITextWithIconProps> {
    private iconLeftPosition: Partial<IconProps> = {
        custom: {
            height: 'mini',
            left: this.calcLeftLocation().left,
            position: 'absolute',
            top: this.calcLeftLocation().top,
            width: 'mini',
        }
    };

    private iconRightPosition: Partial<IconProps> = {
        custom: {
            height: 'mini',
            position: 'absolute',
            right: '16px',
            top: this.calcLeftLocation().top,
            width: 'mini',
        }
    }

    private textLeftPosition: Partial<ITextInputProps> = {
        custom: {
            paddingLeft: '52px',
        }
    }

    private textRightPosition: Partial<ITextInputProps> = {
        custom: {
            paddingRight: '52px',
        }
    }


    public render() {
        return (
            <StyledTextWithIcon {...this.props}>
                <TextInput {...this.textPosition()} {...this.props.text} />
                <Icon {...this.iconPosition()} {...this.props.icon} />
            </StyledTextWithIcon>
        );
    }

    private iconPosition(): Partial<IconProps> {
        return this.props.iconPosition === 'right' ? this.iconRightPosition : this.iconLeftPosition;
    }

    private textPosition(): Partial<ITextInputProps> {
        return this.props.iconPosition === 'right' ? this.textRightPosition : this.textLeftPosition;
    }

    private calcLeftLocation() {
        const h = this.convertStrToInt("36px")

        // const iw = this.convertStrToInt("20px")
        const ih = this.convertStrToInt("20px")

        const ch = (h / 2) - (ih / 2);
        return { top: `${ch}px`, left: '16px' }
    }

    private convertStrToInt(str: string): number {
        return +str.split("px")[0]
    }
}

const StyledTextWithIcon = styled.div.attrs<ITextWithIconProps>({})`
    width: 400px;
    height: 36px;
    position: relative;
`