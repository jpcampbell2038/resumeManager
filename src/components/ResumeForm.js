import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class ResumeForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            studentName: props.resume ? props.resume.studentName : '',
            status: props.resume ? props.resume.status : '',
            file: props.resume ? props.resume.file : '',
            createdtAt: props.resume ? moment(props.resume.createdAt) : moment(),
            calenderFocused: false,
            error: ''
        };
    }

    onNameChange = (e) => {
        const studentName = e.target.value;
        this.setState(() => ({ studentName }));
    };

    onFileChange = (e) => {
        e.persist();
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend =() => {
            this.setState({
                file: file
            });
        }
        reader.readAsDataURL(file);
    };

    onSelectChange = (e) => {
        const status = e.target.value;
        if (status === 'reviewed') {
            this.setState(() => ({ status: 'Reviewed' }));
        }
        else if (status === "needsRevision") {
            this.setState(() => ({ status: 'Needs Revision' }));
        }
    };

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calenderFocused: focused }))
    };

    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.studentName || !this.state.file) {
            this.setState(() => ({ error: 'Please provide Name File' }));
        }
        else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                studentName: this.state.studentName,
                status: this.state.status,
                file: this.state.file,
                createdAt: this.state.createdAt.valueOf()
            });
        }
    };

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <div>
                        <input
                            type="text"
                            placeholder="Student Name"
                            autoFocus
                            value={this.state.studentName}
                            onChange={this.onNameChange}
                        />
                    </div>

                    <div>
                        <select
                            onChange={this.onSelectChange}
                        >
                            <option value="needsRevision">Needs Revision</option>
                            <option value="reviewed">Reviewed</option>
                        </select>
                    </div>

                    <div>
                        <input
                            type="file"
                            onChange={this.onFileChange}
                        />
                    </div>

                    <div>
                        <SingleDatePicker
                            date={this.state.createdAt}
                            onDateChange={this.onDateChange}
                            focused={this.state.calenderFocused}
                            onFocusChange={this.onFocusChange}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                        />
                    </div>

                    <div>
                        <button>Add Resume</button>
                    </div>
                </form>
            </div>
        )
    }
}