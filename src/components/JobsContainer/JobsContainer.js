import { useEffect, useState } from 'react';
import JobElement from './JobElement'

function JobsContainer({ toDos, setToDos,setVisibility,currentLi,setCurrentLi}) {

  const [sorted,setSorted] = useState([])
    useEffect(()=>{
        let sortedToDos = toDos.sort((a, b) => b.significance.localeCompare(a.significance))
        setSorted(sortedToDos)
    },[toDos])
    return (
        <>
            <section className="to-do-section">
                <article className="record-wrapper">
                    <h1 className="header">JOB LIST</h1>
                    <input className="header" id="search" type="text" placeholder="Search Job" />
                </article>
                <article className="record-container" id="divContainer">
                    {sorted.map(x =>
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