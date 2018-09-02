import * as React from 'react';

import Child from './Child';

interface IParentProps {
    title: string;
    childTitle: string;
}

class Parent extends React.PureComponent<IParentProps, {}> {

    public render() {
        window.console.log('rendering parent');
        return (
            <div>
                <div>{this.props.title}</div>
                {this.props.children}
                <Child title={this.props.childTitle}>
                    <div>Grandchild Text</div>
                </Child>
            </div>

        );
    }
}

export default Parent;