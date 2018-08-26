import * as React from 'react';
import { ThemeColor } from '../library/theme/interface';

interface IContainerInterface {
    backgroundColor?: ThemeColor;
}

class Container extends React.Component<IContainerInterface, {}> {
    public render() {
        return (
            <div {...this.props}>
                {this.props.children}
            </div>
        );
    }
}

export {
    Container,
    IContainerInterface,
}
