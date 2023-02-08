import styled from 'styled-components';

interface HeaderContainerProps {
    cover: string;
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
    width: 100%;
    height: 280px;
    background-image: url(${props => props.cover});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    display: flex;
    align-items: center;
    justify-content: center;

    & > img {
        padding-bottom: 4rem;
    }
`;