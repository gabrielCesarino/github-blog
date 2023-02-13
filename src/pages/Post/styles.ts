import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 54rem;
    margin-top: -5rem;
`;

export const PostHeader = styled.header`
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;

    background-color: ${props => props.theme['base-profile']};
    padding: 2rem;

    border-radius: 10px;

    & > img {
        width: 9rem;
        border-radius: 8px;
    }

    & > h1 {
        font-size: 1.5rem;
        color: ${props => props.theme['base-title']};
    }
`;

export const Iteractions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > a {
        text-decoration: none;
        text-transform: uppercase;
        color: ${props => props.theme['base-brand']};
        font-size: 0.875rem;
        font-weight: bold;

        display: flex;
        gap: 0.5rem;

        cursor: pointer;
    }
`;

export const PostDetails = styled.div`
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

export const Content = styled.div`
    width: 50rem;

    color: ${props => props.theme['base-text']};
    margin: 2rem 0;

    & > p {
        line-height: 1.6;
        
        & + p {
            margin-top: 1.5rem;
        }

        a {
            text-decoration: none;
            color: ${props => props.theme['base-brand']};
            font-weight: bold;
        }
    }
`;