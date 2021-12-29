import { useContext } from "react";

import { GlobalContext } from "../../context/GloblaState";
import { useState } from "react";

function JobForm() {

    const { addTodo } = useContext(GlobalContext)
    
    const [job, setJob] = useState('')
    const [significance, setSignificance] = useState('Urgent')


    const formHandleFunction = (e) => {
        e.preventDefault()
        setJob(e.target['job-title'].value)
        setSignificance(e.target.description.value)

        let pattern = /^[a-zA-Z\d ]+$/

        if (job === "" || job.length >= 70 || !job.match(pattern)) {
            setJob('')
            setSignificance('Urgent')
            alert('The input cannot be empty string, chars >= 70 or other chars than Latin')
            return;
        }

        const newTodo = {
            id: Math.floor(Math.random() * 100000000),
            job,
            significance
        }

        addTodo(newTodo)
        setJob('')
        setSignificance('Urgent')
    }

    return (
        <section className="form-section">
            <form className="form-wrapper" onSubmit={formHandleFunction}>
                <div>Job:</div>
                <input type="text" id="inputField" value={job} name="job-title" placeholder="Job" onChange={(e) => setJob(e.target.value)} />
                <div>Priority:</div>
                <select required name="description" value={significance} id="jobDescription" onChange={(e) => setSignificance(e.target.value)}>
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