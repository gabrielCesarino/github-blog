import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 54rem;
    margin-top: -5rem;
`;

export const Header = styled.header`
    width: 100%;

    display: flex;
    align-items: center;
    gap: 2rem;

    background-color: ${props => props.theme['base-profile']};
    padding: 2rem;

    border-radius: 10px;

    & > img {
        border-radius: 8px;
    }
`;

export const ProfileDetails = styled.div`
    & > p {
        display: block;
        margin-top: 0.5rem;
        font-size: 1rem;
        color: ${props => props.theme['base-text']}
    }
`;

export const NameContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > strong {
        font-size: 1.5rem;
        color: ${props => props.theme['base-title']};
        line-height: 1.6;
    }

    & > a {
        text-decoration: none;
        color: ${props => props.theme['base-brand']};

        text-transform: uppercase;

        display: flex;
        align-items: center;
        gap: 0.5rem;

        font-size: 0.875rem;
        font-weight: bold;
    }
`;

export const ProfileInfo = styled.div`
    margin-top: 1.5rem;
    display: flex;
    align-items: baseline;
    gap: 2rem;
    color: ${props => props.theme['base-subtitle']};

    span {
        display: flex;
        align-items: center;
    }

    span > img {
        margin-right: 0.25rem;
        line-height: 0;
    }
`;