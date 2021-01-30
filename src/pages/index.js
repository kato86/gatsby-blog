import React from 'react';
import style from 'styled-components';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

const StyledH1 = style.h1`
    color: rebeccapurple;
`;

export default () => {
    const { title, description } = useSiteMetadata();
    return (
        <>
        <StyledH1>{ title }</StyledH1>
        <p>{ description }</p>
        </>
    )
}