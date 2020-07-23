import React from 'react';
import { v4 as uuidv4 } from 'uuid';

// ADD_RESUME
export const addResume = (
    {
        file = React.createRef,
        studentName = '',
        studentId = '',
        graduationDate = 0,
        status = '',
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_RESUME',
    resume: {
        resumeId: uuidv4(),
        file,
        studentName,
        studentId,
        graduationDate,
        status, 
        createdAt
    }
});

// REMOVE_RESUME
export const removeResume = ({ resumeId } = {}) => ({
    type: 'REMOVE_RESUME',
    resumeId
});

// EDIT_RESUME
export const editResume = (resumeId, updates) => ({
    type: 'EDIT_RESUME',
    resumeId,
    updates
});