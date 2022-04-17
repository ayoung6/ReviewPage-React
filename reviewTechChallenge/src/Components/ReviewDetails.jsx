import React from 'react';
import { ReviewBox, CommentInput } from '.';

export default ({ review, commentHandlers }) =>
    <div
        className='container py-3'>
        <ReviewBox
            review={review}
            showFull={true} />
        <CommentInput
            review={review}
            commentHandlers={commentHandlers} />
    </div>
;