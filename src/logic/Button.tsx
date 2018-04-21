import * as React from 'react';

interface IButtonInterface {
    onClick?: any;
    children?: any;
    className?: string;
}

class Button extends React.Component<IButtonInterface, {}> {

    public render() {
        return (
            <button
                className={this.props.className}
                onClick={this.props.onClick}
            >
                {this.props.children}
            </button>
        );
    }
}

export {
    Button,
    IButtonInterface,
}