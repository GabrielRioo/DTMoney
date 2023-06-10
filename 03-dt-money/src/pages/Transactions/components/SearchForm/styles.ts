import styled from "styled-components";

export const SearchFormContainer = styled.form `
    width: 100%;
    display: flex;
    gap: 1rem;

    input {
        flex: 1;
        border: 0;
        border-radius: 6px;
        background-color: ${props => props.theme['gray-900']};
        color: ${props => props.theme['gray-300']};
        padding: 1rem;

        &::placeholder {
            color: ${props => props.theme['gray-500']};
        }
    }

    button {
            display: flex;
            align-items:center;
            gap: 0.75rem;

            padding: 1rem;
            background: transparent;
            border: 1px solid ${props => props.theme['green-300']};
            border-radius: 6px;
            color: ${props => props.theme['green-300']};

            font-weight:bold;

            &:hover {
                background: ${props => props.theme['green-500']};
                border: 1px solid ${props => props.theme['green-500']};
                color: ${props => props.theme.white};

                transition: background-color 0.2s, color .2s, border-color .2s;
            }
        }
`