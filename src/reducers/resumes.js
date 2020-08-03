const resumeReducerDefaultState = [];

export default (state = resumeReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_RESUME':
            return [
                ...state,
                action.resume
            ];
        case 'REMOVE_RESUME':
            return state.filter (({ resumeId }) => resumeId !== action.resumeId);
        case 'EDIT_RESUME':
            return state.map((resume) => {
                if (resume.resumeId === action.resumeId) {
                    return{
                        ...resume,
                        ...action.updates
                    };
                }
                else {
                    return resume;
                };
            });
        default: 
            return state;
    }
};