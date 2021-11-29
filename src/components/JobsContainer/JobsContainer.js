import JobElement from './JobElement'

function JobsContainer({ toDos, setToDos }) {

    return (
        <>
            <section className="to-do-section">
                <article className="record-wrapper">
                    <h1 className="header">JOB LIST</h1>
                    <input className="header" id="search" type="text" placeholder="Search Job" />
                </article>
                <article className="record-container" id="divContainer">
                    {toDos.map(x =>
                        <JobElement
                            key={x.id}
                            toDos={toDos}
                            name={x.job}
                            setToDos={setToDos}
                            significance={x.significance}
                        />)}
                </article>
            </section>
        </>
    );
}

export default JobsContainer;