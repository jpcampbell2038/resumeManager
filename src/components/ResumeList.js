import React from 'react';
import { connect } from 'react-redux';
import ResumeListItem from './ResumeListItem';
import selectResumes from '../selectors/resumes';

const ResumeList = (props) => (
    <div>
        <h1>Resume List</h1>
        {props.resumes.map((resume) => {
            return <ResumeListItem key={resume.resumeId} {...resume}/>
        })}
    </div>
);

const mapStateToProps = (state) => {
    return {
        resumes: selectResumes(state.resumes, state.filters)
    };
};

export default connect(mapStateToProps)(ResumeList);