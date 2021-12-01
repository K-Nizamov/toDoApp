import formHandler from "../../helpers/formHandler";

function JobForm({ setToDos, toDos }) {

    const formHandleFunction = (e) => {
        formHandler(e, setToDos, toDos)
    }

    return (
        <section className="form-section">
            <form className="form-wrapper" onSubmit={formHandleFunction}>
                <div>Job:</div>
                <input type="text" id="inputField" name="job-title" placeholder="Job" />
                <div>Priority:</div>
                <select required name="description" id="jobDescription">
                    <option >Urgent</option>
                    <option >Regular</option>
                    <option >Trivial</option>
                </select>
                <button type="submit" id="createBtn">Create</button>
            </form>
        </section>
    );
}

export default JobForm;