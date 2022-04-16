import React from 'react';

const goodStar = '⭐';
const badStar = '☆';

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

/**
 * rating: int
 */

export default ({rating}) => {
    var stars = "";

    // Out of 5 stars, should handle negitives and over max
    for (let i = 0; i < 5; i++) {
        stars += i < rating
            ? goodStar
            : badStar;
    }

    return (
        <>
            {stars}
        </>
    );
};