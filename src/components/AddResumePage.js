import React from 'react';
import { connect } from 'react-redux';
import ResumeForm from './ResumeForm';
import { addResume } from '../actions/resumes';

const AddResumePage = (props) => (
    <div>
        <h1>Add Resume</h1>
        <ResumeForm 
            onSubmit={(resume) => {
                props.dispatch(addResume(resume));
                props.history.push('/');
            }}
        />
    </div>
);

export default connect()(AddResumePage);