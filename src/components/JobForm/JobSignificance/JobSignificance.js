import './JobSignificance.scss'

function JobSignificance() {
    return (
        <>
            <div>Priority:</div>
            <select required name="description" id="jobDescription">
                <option value="" disabled selected hidden>Priority</option>
                <option value="Urgent">Urgent</option>
                <option value="Regular">Regular</option>
                <option value="Trivial">Trivial</option>
            </select>
        </>
    );
}

export default JobSignificance;