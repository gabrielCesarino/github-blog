import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${props => props.theme['base-border']};
    padding: 1.5rem;
    height: 16rem;
    line-height: 1.6;
    border-radius: 10px;
    cursor: pointer;
    transition: background 0.2s;

    p {
        color: ${props => props.theme['base-text']};
        margin-top: 1rem;
    }
    
    &:hover{
        background-color: ${props => props.theme['base-label']};
    }
`;

export const PostDescription = styled.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
`;

export const PostInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    strong {
        width: 70%;

        color: ${props => props.theme['base-title']};
        font-size: 1.25rem;
    }

    small {
        color: ${props => props.theme['base-span']};
        font-size: 0.875rem;
    }
`;