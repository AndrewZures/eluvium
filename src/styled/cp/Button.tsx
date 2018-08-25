import styled, { css } from 'styled-components';
import { Button, IButtonInterface } from '../../base/components';

const baseStyles = {
    colors: {
        primary: '#fff',
    },
}

const styles = css`
    color: ${baseStyles.colors.primary}
`;

export default styled(Button).attrs<IButtonInterface>({})`
    ${styles}
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