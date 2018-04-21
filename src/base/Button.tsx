import styled from 'styled-components';
import {
    Button as LogicButton,
    IButtonInterface as ILogicButtonInterface
} from '../logic/components';

interface IButtonInterface extends ILogicButtonInterface {
    type?: string;
    size?: string;
}

const Button = styled(LogicButton).attrs<IButtonInterface>({})`
    font-family: Helvetica, Arial, Sans-Serif;
    background-color: ${props => {
        switch(props.type) {
            case 'primary': return 'red';
            case 'secondary': return 'blue';
            default: return 'green';
        }
    }};
    border-radius: ${props => {
        switch(props.type) {
            case 'primary': return '50px';
            default: return null;
        }
    }};
    font-size: ${props => {
        switch(props.size) {
            case 'small': return '10px';
            case 'large': return '28px';
            default: return '18px' // default to medium
        }
    }};
`;

export {
    Button,
    IButtonInterface,
}