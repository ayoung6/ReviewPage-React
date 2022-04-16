import React from 'react';
import styled from 'styled-components';
import { ReviewStars as Stars } from '.';

const messageEmoji = '💬';

const FooterDiv = styled.div`
    display: inline-block;
    color: black;
    width: 100%;
    float:left;
`;

const FloatDiv = styled.div`
    float: left;
`

const DateP = styled.p`
    text-align: center;
`;

const AuthorP = styled.p`
    text-align: left;
    bottom: 0;
`

const PlaceP = styled.h1`
    color: black;
`;

const TruncContent = styled.p`
    color: black;
    width: 90%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

const FullContent = styled.p`
    color: black;
    width: 90%;
`;

/**
 * props.review: {
 *  id
 *  author
 *  place
 *  published_at
 *  rating
 *  content 
 * }
 */

function ReviewBox({ review, showFull }) {
    let date = (new Date(review.published_at)).toLocaleDateString('en-US');
    let content = showFull
        ? <FullContent>{review.content}</FullContent>
        : <TruncContent>{review.content}</TruncContent>;
    let comment = !showFull && review?.comment
        ? <h1>{messageEmoji}</h1>
        : <></>;

    return (
        <>
            <PlaceP>
                {review.place}
            </PlaceP>
            <Stars rating={ review.rating } />
            {content}

            <FooterDiv>
                <FloatDiv>
                    <AuthorP>{review.author}</AuthorP>
                </FloatDiv>
                <FloatDiv>
                    <DateP>{date}</DateP>
                </FloatDiv>
                <FloatDiv>
                    {comment}
                </FloatDiv>
            </FooterDiv>
        </>
    );
}

export default ReviewBox;