import * as React from 'react';
import { Button } from '../../logic/components';

interface IProps {
    type: string;
    disabled?: any;
}

const StyledButton = (props: IProps) => {
    const run = () => {
    }

    const getClassName = () => {
        return ["btn", run()];
    }

    return <Button {...props} className={getClassName().join(' ')} />
}

export default StyledButton;