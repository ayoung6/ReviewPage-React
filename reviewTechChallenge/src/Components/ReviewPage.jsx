import React from 'react';
import ReviewBox from './ReviewBox';

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

export default ({ reviews, onclick }) => {
    const numCols = 3;

    // Bootstrap uses 12 cols
    let cardSize = 'py-3 col-sm-' + (12 / numCols);

    return (
        <div className='container'>
                <div className='row g-3'>
                    {reviews?.map((review) =>
                        <div className={cardSize} key={review.id} onClick={() => onclick(review)}>
                            <ReviewBox review={review} />
                        </div>
                    )}
                </div>
            </div>
    );
};