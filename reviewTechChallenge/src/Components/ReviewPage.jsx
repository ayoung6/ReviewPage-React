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
    let cardClasses = 'text-decoration-none text-reset pt-3 col-sm-' + (12 / numCols);

    return (
        <div
            className='container'>
            <div
                className='row g-3'>
                    {reviews?.map((review) =>
                        <a
                            href='#'
                            className={cardClasses}
                            key={review.id}
                            onClick={() => onclick(review)}>
                            <ReviewBox
                                review={review} />
                        </a>
                    )}
                </div>
            </div>
    );
};