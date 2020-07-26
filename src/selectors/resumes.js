import moment from 'moment';

//Get Visible Resumes
export default ( resumes, { text, sortBy, startDate, endDate } ) => {
    return resumes.filter((resume) => {
        const createdAtMoment = moment(resume.createdAt);
        const startDateMatch = typeof startDate !== 'number' || resume.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || resume.createdAt <= endDate;
        const textMatch = resume.studentName.toLowerCase().includes(text.toLowerCase());
        

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        else if(sortBy === 'status') {
            return a.status < b.status ? 1 : -1;
        }
        else if(sortBy === 'graduationDate') {
            return a.graduationDate < b.graduationDate ? 1 : -1;
        }
    });
};