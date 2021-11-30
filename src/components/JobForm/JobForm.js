
function JobForm({ setToDos, toDos }) {

    function formHandler(e) {
        e.preventDefault()
        let job = e.target['job-title'].value;
        let significance = e.target.description.value
        setToDos([...toDos, { job, significance, id: Math.ceil(Math.random() * 1000) }])
        e.target['job-title'].value = ""
        e.target.description.value = e.target.description.options[0].textContent

    }

    return (
        <section className="form-section">
            <form className="form-wrapper" onSubmit={formHandler}>
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