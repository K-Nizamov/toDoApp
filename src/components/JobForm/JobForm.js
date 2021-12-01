import { useContext } from "react";

import formHandler from "../../helpers/formHandler";
import ToDoContext from "../../context/ToDoContext";

function JobForm() {
    const context = useContext(ToDoContext)
    const formHandleFunction = (e) => {
        formHandler(e, context.setToDos, context.toDos)
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