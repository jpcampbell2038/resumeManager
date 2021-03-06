import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const ResumeListItem = ({ resumeId, studentName, file, graduationDate, status, createdAt }) => (
    <div>
        <Link to={`/edit/${resumeId}`}>
            <h3>Name: {studentName}</h3>
        </Link>
        <p>File: {file.name}</p>
        <p>Status: {status}</p>
        <p>Created at: {createdAt}</p>
    </div>
);

export default ResumeListItem;