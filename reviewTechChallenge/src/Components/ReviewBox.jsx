﻿import React from 'react';
import styled from 'styled-components';
import { ReviewStars as Stars } from '.';

const messageEmoji = '💬';

const TruncContent = styled.p`
    width: 90%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

const FullContent = styled.p`
    width: 90%;
`;

const buildFullView = ({ review, date, }) =>
    <div className='row'>
        <p className='col-sm-3'>
            {review?.author}
        </p>
        <div className='col'>
            {date}
        </div>
    </div>
;

const buildCardView = ({ review, comment, date, }) =>
    <div className='row'>
        <div className='col-sm-5'>
            {review?.author}
        </div>
        <div className='col'>
            {date}
        </div>
        {comment ? <div className='col'> {comment} </div> : <></>}
    </div>
;

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

export default ({ review, showFull = false }) => {
    let content;
    let comment = review?.comment
        ? messageEmoji
        : undefined;

    let date = (new Date(review?.published_at)).toLocaleDateString('en-US');
    
    showFull
        ? content = buildFullView({ review, date })
        : content = buildCardView({ review, comment, date });

    return (
        <div className='card shadow-sm'>
            <div className="card-body">
                <h3> {review?.place} </h3>
                <Stars rating={review?.rating} />
                <p className='card-text'>
                    {showFull ? <FullContent>{review?.content}</FullContent> : <TruncContent>{review?.content}</TruncContent>}
                </p>
                {content}
            </div>
        </div>
    );
};