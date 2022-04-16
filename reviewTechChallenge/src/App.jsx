import React, { useEffect, useReducer } from 'react';
import { types, stateReducer, initialState } from './State';
import { Header, ReviewDetails, ReviewPage } from './Components';

const App = props => {
    const { api } = props;
    const [state, dispatch] = useReducer(stateReducer, initialState);

    const getReview = payload =>
        dispatch({ type: types.selectReview, payload, });

    const putComment = payload =>
        dispatch({ type: types.putComment, payload });

    const editComment = payload =>
        dispatch({ type: types.editComment, payload });

    const navHome = payload =>
        dispatch({ type: types.navHome, payload });

    const getPage = payload => {
        switch (payload) {
            case 'Reviews':
                return <ReviewPage reviews={state?.reviews} onclick={getReview} />;

            case 'Review':
                return <ReviewDetails review={state?.review} commentHandlers={{ put: putComment, edit: editComment, isEdit: state.editComment }} />;
        };
        return <h1> 404 </h1>;
    };

    useEffect(() => {
        if (state?.fetchReviews) {
            api.reviews.getAllReviews()
                .then(reviews => {
                    if (!reviews) return Promise.reject('Review GET error');
                    dispatch({ type: types.gotReviews, payload: reviews });
                })
        }
    }, [state?.fetchReviews]);

    useEffect(() => {
        if (state?.putComment) {
            console.log(state);
            api.reviews.putComment(state?.review)
                .then(res => {
                    dispatch({ type: types.gotComment })
                });
        }
    }, [state?.putComment])

    let content = getPage(state?.page);

    return (
        <>
            <Header back={() => navHome('Reviews')} />
            {content}
        </>
    );
}

export default App;
