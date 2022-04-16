import types from './Types';

export default (state, action) => {

    switch (action.type) {
        case types.setState:
            return { ...state, ...action.state };

        case types.setPage:
            return { ...state, page: action.payload };

        case types.getReviews:
            return { ...state, fetchReviews: true };

        case types.gotReviews:
            return { ...state, fetchReviews: false, reviews: action.payload };

        case types.getReview:
            return { ...state, fetchReview: true };

        case types.gotReview:
            return { ...state, fetchReview: false, review: action.payload }

        case types.selectReview:
            return { ...state, page: 'Review', review: action?.payload };

        case types.editComment:
            return { ...state, editComment: true };

        case types.putComment:
            return { ...state, editComment: false, putComment: true, review: action?.payload };

        case types.gotComment:
            return { ...state, putComment: false };

        case types.navHome:
            return { ...state, editComment: false, fetchReviews: true, page: 'Reviews' }
    };

};