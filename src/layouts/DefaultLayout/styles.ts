import styled from 'styled-components';

export const DefaultLayoutContainer = styled.div`
    height: 100vh;
    background-color: ${props => props.theme['base-background']};
`;

export const Content = styled.main`
    width: 100%;
    display: flex;
    justify-content: center;
`;