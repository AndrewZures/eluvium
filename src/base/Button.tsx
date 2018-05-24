import styled from 'styled-components';
import {
    Button as LogicButton,
    IButtonInterface as ILogicButtonInterface
} from '../logic/components';

import { Button, ITheme } from '../themes/base';

interface IButtonInterface extends ILogicButtonInterface {
    type: Button;
    size?: string;
    theme?: ITheme;
}

const Button = styled(LogicButton).attrs<IButtonInterface>({})`
    color: ${props => props.theme.color[props.type]}
    background-color: ${props => props.theme.backgroundColor[props.type]}
    border-radius: ${props => props.theme.borderRadius[props.type]}
`;

export {
    Button,
    IButtonInterface,
}