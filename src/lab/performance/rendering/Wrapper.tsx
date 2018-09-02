import * as React from 'react';

import Parent from './Parent';

interface IWrapperState {
    title: string;
    childTitle: string;
}

class Wrapper extends React.PureComponent<{}, IWrapperState> {

    public readonly state: Readonly<IWrapperState> = {
        childTitle: 'First Child Title',
        title: 'First Parent Title',
    }

    public render() {
        window.console.log('rendering wrapper');
        return (
            <div>
                <button onClick={this.changeParentTitle}>Change Parent Title</button>
                <button onClick={this.changeChildTitle}>Change Child Title</button>
                <Parent title={this.state.title} childTitle={this.state.childTitle}>
                    <div>Wrapper wrapper</div>
                </Parent >
            </div>

        );
    }

    private changeParentTitle = () => {
        const title = this.state.title === 'First Parent Title' ? 'Second Parent Title' : 'First Parent Title';
        this.setState({ title });
    }

    private changeChildTitle = () => {
        const childTitle = this.state.childTitle === 'First Child Title' ? 'Second Child Title' : 'First Child Title';
        this.setState({ childTitle });
    }
}

export default Wrapper;;