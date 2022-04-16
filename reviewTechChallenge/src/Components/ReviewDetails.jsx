import React from 'react';
import styled from 'styled-components';
import { ReviewBox, CommentInput } from '.';

const InformationDiv = styled.div`
    width: 100%;
    height: 10em;
    background: white;
`;

export default ({ review, commentHandlers }) => 
    <>
        <InformationDiv>
            <ReviewBox review={review} showFull={true} />
            <CommentInput review={review} commentHandlers={commentHandlers} />
        </InformationDiv>
    </>
;