import JobElement from './JobElement'

function JobsContainer({ toDos, setToDos,setVisibility,setCurrentLi}) {

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
                            todo = {x}
                            key={x.id}
                            id = {x.id}
                            toDos={toDos}
                            name={x.job}
                            setToDos={setToDos}
                            significance={x.significance}
                            setVisibility = {setVisibility}
                            setCurrentLi = {setCurrentLi}
                        />)}
                </article>
            </section>
        </>
    );
}

export default JobsContainer;