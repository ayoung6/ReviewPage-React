import React from 'react';
import { Button } from 'react-bootstrap';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownItem, MDBDropdownLink, MDBTextArea, MDBDropdownMenu, MDBBtn } from 'mdb-react-ui-kit';

const dropDownMenu = ({ dropMenuIcon, onEditClick, onDeleteClick }) =>
    <MDBDropdown>
        <MDBDropdownToggle className='btn btn-secondary'>
            {dropMenuIcon}
        </MDBDropdownToggle>

        <MDBDropdownMenu>
            <MDBDropdownItem>
                <MDBDropdownLink href="#" onClick={() => onEditClick()}> Edit </MDBDropdownLink>
            </MDBDropdownItem>
            <MDBDropdownItem>
                <MDBDropdownLink href="#" onClick={() => onDeleteClick()}> Delete </MDBDropdownLink>
            </MDBDropdownItem>
        </MDBDropdownMenu>
    </MDBDropdown>
;

const button = ({ label, onclick }) =>
    <MDBBtn
        className='btn btn-secondary'
        onClick={() => onclick()}>
        {label}
    </MDBBtn>
;

export default ({ review, commentHandlers }) => {
    let { put, edit, isEdit } = commentHandlers;
    let inputValue = review?.comment;
    let dropMenuIcon = '⋯';
    let editValue = isEdit
        ? inputValue
        : '';
    let labelName = isEdit
        ? 'Edit Comment'
        : 'New Comment';

    const onEnterPress = (event) => {
        if (event.keyCode === 13) onSubmitClick();
    };

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
        <div className='row'>
            <div className='col-sm-10 ml-3'>
                <MDBTextArea
                    label={labelName}
                    defaultValue={editValue}
                    onChange={onInputChange}
                    onKeyDown={(event) => onEnterPress(event)}
                />
            </div>
            <div className='col-sm-1 ml-auto mr-3'>
                { button({ label: 'Submit', onclick: onSubmitClick }) }
            </div>
        </div>
    ;

    const viewComment =
        <div className='row'>
            <div
                className='ml-3 col-sm-10'
                style={{ height: '100%' }}>
                {inputValue}
            </div>
            <div className='col-sm-1 ml-auto mr-3'>
                {dropDownMenu({ dropMenuIcon, onEditClick, onDeleteClick })}
            </div>
        </div>
    ;

    let content = review?.comment
        ? viewComment
        : newComment;

    if (isEdit) content = newComment;

    return (
        <div className='py-3'>
            <div className='py-3 card' style={{ 'min-height': '10rem' }}>
                <div className='container'>
                    {content}
                </div>
            </div>
        </div>
    );
};