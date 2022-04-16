import { apiPath } from '../api';

const calls = {};
let basepath = '/reviews';

calls.getAllReviews = async () =>
    await fetch(
        apiPath + basepath,
        {
            method: 'GET',
            headers: { 'Accept': 'application/json', },
        })
        .then(res => (res?.ok ? res : Promise.reject(res)))
        .then(res => res.json());

calls.putComment = async (review) =>
    await fetch(
        apiPath + basepath + '/' + review.id,
        {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(review),
        })
        .then(res => (res?.ok ? res : Promise.reject(res)));

calls.pushReview = async () => {
    throw Error("Not Implemented");
};

export default calls;