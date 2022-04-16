import React from 'react';
import styled from 'styled-components';
import ReviewBox from './ReviewBox';

const BorderDiv = styled.div`
    padding-left: 3rem;
`;

const ReviewPageDiv = styled.div`
    display: inline-block;
    position: relative;
`;

const BoxDiv = styled.div`
    height: 18.75em;
    width: 18.75em;
    background: white;
    font-size: small;
    position: relative;
    margin: 5px;
    padding-left: 10px;
    display: inline-block;
    :hover {
        cursor: pointer;
        background: beige;
    }
`;

/**
 * reviews: [{
 *  id
 *  author
 *  place
 *  published_at
 *  rating
 *  content
 * },]
 */

export default ({ reviews, onclick }) => 
    <ReviewPageDiv>
        <BorderDiv>
            {reviews?.map((review) =>
                <BoxDiv key={review.id} onClick={ () => onclick(review)}>
                    <ReviewBox review={review} />
                </BoxDiv>
            )}
        </BorderDiv>
    </ReviewPageDiv>
;