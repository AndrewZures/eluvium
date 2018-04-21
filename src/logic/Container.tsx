import * as React from 'react';

interface IContainerInterface {
    className?: string;
}

class Container extends React.Component<IContainerInterface, {}> {
    public render() {
        return (
            <div className={this.props.className}>
                {this.props.children}
            </div>
        );
    }
}

export {
    Container,
    IContainerInterface,
}
