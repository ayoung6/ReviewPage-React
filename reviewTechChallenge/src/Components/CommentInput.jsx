export default ({ review, commentHandlers }) => {
    let { put, edit, isEdit } = commentHandlers;
    let inputValue = review?.comment
        ? review.comment
        : 'Enter a comment';
    let buttonText = isEdit
        ? 'Edit'
        : 'Submit';

    const onSubmitClick = () => {
        review.comment = inputValue;
        put(review);
    };

    const onDeleteClick = () => {
        delete review?.comment;
        put(review);
    };

    const onEditClick = () => {
        edit();
    };

    const onInputChange = (event) => {
        inputValue = event.target.value;
    };

    const newComment = 
        <>
            <input
                type='text'
                defaultValue={inputValue}
                onChange={onInputChange}
            />
            <button
                onClick={onSubmitClick}>
                {buttonText}
            </button>
        </>;

    const viewComment =
        <>
            <div>
                {inputValue}
                <button
                    onClick={onEditClick}>
                    Edit
                </button>
                <button
                    onClick={onDeleteClick}>
                    Delete
                </button>
            </div>
        </>;

    let content = review?.comment
        ? viewComment
        : newComment;

    if (isEdit) content = newComment;

    return (
        <>
            {content}
        </>
    );
};