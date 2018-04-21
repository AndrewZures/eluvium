import * as React from 'react';

interface IButtonGroupInterface {
    className?: string;
}

class ButtonGroup extends React.Component<IButtonGroupInterface, {}> {
    public render() {
        return (
            <div className={this.props.className}>
                {this.props.children}
            </div>
        );
    }
}

export {
    ButtonGroup,
    IButtonGroupInterface,
}
