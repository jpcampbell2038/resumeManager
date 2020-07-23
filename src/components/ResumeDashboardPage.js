import React from 'react';
import ResumeList from './ResumeList';
import ResumesListFilters from './ResumesListFilters';

const ResumeDashboardPage = () => (
    <div>
        <ResumesListFilters />
        <ResumeList />
    </div>
);

export default ResumeDashboardPage;