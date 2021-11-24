import style from './JobForm.scss'
import JobDescription from './JobDescription/JobDescription';
import JobSignificance from './JobSignificance/JobSignificance';
function JobForm() {
    return (
        <section className="form-section">
            <form className="form-wrapper">
                <JobDescription />
                <JobSignificance />
                <button type="submit" id="createBtn">Create</button>
            </form>
        </section>
    );
}

export default JobForm;