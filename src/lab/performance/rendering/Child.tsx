import * as React from 'react';

interface IChildProps {
    title: string;
}

class Child extends React.PureComponent<IChildProps> {
    public render() {
        window.console.log('rendering child');
        return (
            <div>
                <div>{this.props.title}</div>
                {this.renderChildren()}
            </div>
        );
    }

    private renderChildren() {
      return this.props.children;
    }
}

export default Child;