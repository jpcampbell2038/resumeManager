import React from 'react';
import { connect } from 'react-redux';
import ResumeForm from './ResumeForm';
import { editResume, removeResume } from '../actions/resumes';

const EditResumePage = (props) => {
    return (
        <div>
            <ResumeForm
                resume={props.resume}
                onSubmit={(resume) => {
                    props.dispatch(editResume(props.resume.resumeId, resume));
                    props.history.push('/');
                }}
            />
            <button onClick={() => {
                props.dispatch(removeResume({ resumeId: props.resume.resumeId }));
                props.history.push('/');
            }}>Remove</button>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        resume: state.resumes.find((resume) => resume.resumeId === props.match.params.id)
    };
};

export default connect(mapStateToProps)(EditResumePage);