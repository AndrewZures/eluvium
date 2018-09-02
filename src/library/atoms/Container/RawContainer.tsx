import * as React from 'react';
import styled from 'styled-components';
import { IContainerConfig } from './types';

import { choose } from '../../theme/helpers';

interface IRawContainerProps {
    defaults: Partial<IContainerConfig>;
    custom: Partial<IContainerConfig>;
}

export class RawContainer extends React.PureComponent<IRawContainerProps> {

    public render() {
        return (
            <StyledContainer defaults={this.props.defaults} custom={this.props.custom}>
                {this.props.children}
            </StyledContainer>
        );
    }
}

const StyledContainer = styled.div.attrs<IRawContainerProps>({})`
    display: flex;
    ${props => choose('alignItems', props)}
    ${props => choose('backgroundColor', props) }
    ${props => choose('borderRadius', props)}
    ${props => choose('height', props) }
    ${props => choose('justifyContent', props)}
    ${props => choose('width', props)}
`
