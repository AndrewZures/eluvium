import styled from 'styled-components';
import { Button, IButtonInterface } from '../../base/components';

export default styled(Button).attrs<IButtonInterface>({})`
    color: white;
    background-color: ${props => {
        switch(props.type) {
            case 'primary': return 'orange';
            case 'secondary': return 'purple';
            default: return 'blue';
        }
    }}
    box-shadow: 1px 1px 1px grey;
    padding: 5px;
    font-family: "Times New Roman", Times, serif;
    letter-spacing: 1px;

    :hover {
        background-color: yellow;
    }
`;