import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeResume } from '../actions/resumes';


const ResumeListItem = ({ dispatch, resumeId, studentName, file, graduationDate, status, createdAt }) => (
    <div>
        <Link to={`/edit/${resumeId}`}>
            <h3>Name: {studentName}</h3>
        </Link>
        <p>File: {file}</p>
        <p>Grad Date: {graduationDate}</p>
        <p>Status: {status}</p>
        <p>Created at: {createdAt}</p>
        <button onClick={() => {
            dispatch(removeResume({ resumeId }));
        }}>Remove</button>
    </div>
);

export default connect()(ResumeListItem);