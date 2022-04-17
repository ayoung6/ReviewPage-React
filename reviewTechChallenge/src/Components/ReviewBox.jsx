import React from 'react';
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

const date = ({ date }) =>
    <div className='col'
        style={{ 'opacity': 0.75 }}>
        {(new Date(date)).toLocaleDateString('en-US')}
    </div>
;

const author = ({ author, size }) =>
    <div className={size}
        style={{'font-weight': 'bold'}}>
        {author}
    </div>
;

const buildFullView = ({ review, }) =>
    <div className='row'>
        {author({ author: review?.author, size: 'col-sm-3' })}
        {date({ date: review?.published_at, })}
    </div>
;

const buildCardView = ({ review, comment, }) =>
    <div className='row'>
        {author({ author: review?.author, size: 'col-sm-5' })}
        {date({ date: review?.published_at, })}
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

    showFull
        ? content = buildFullView({ review })
        : content = buildCardView({ review, comment });

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