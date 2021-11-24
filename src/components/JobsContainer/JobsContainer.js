import JobElement from './JobElement';
import './JobsContainer.scss'

function JobsContainer() {
    return (
        <>
            <section className="to-do-section">
                <article className="record-wrapper">
                    <h1 className="header">JOB LIST</h1>
                    <input className="header" id="search" type="text" placeholder="Search Job" />
                </article>
                <article className="record-container" id="divContainer">
            <JobElement/>
                </article>
            </section>
        </>
    );
}

export default JobsContainer;