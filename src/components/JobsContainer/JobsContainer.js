import { useEffect, useState } from 'react';
import JobElement from './JobElement'

function JobsContainer({ toDos, setToDos, setVisibility, setCurrentLi }) {

    const [filteredText, setFilteredText] = useState('')
  
    function searchFunction(e) {
        e.preventDefault()
        let filterText = e.target.value
        setFilteredText(filterText)
    }

    const [sorted, setSorted] = useState([])
    useEffect(() => {
        let filteredArr = toDos.filter(obj => obj.job.toUpperCase().includes(filteredText.toUpperCase()))
        let sortedToDos = filteredArr.sort((a, b) => b.significance.localeCompare(a.significance))
        setSorted(sortedToDos)
    }, [toDos,filteredText])

    return (
        <>
            <section className="to-do-section">
                <article className="record-wrapper">
                    <h1 className="header">JOB LIST</h1>
                    <input className="header" id="search" type="text" onKeyUp={searchFunction} placeholder="Search Job" />
                </article>
                <article className="record-container" id="divContainer">
                    {sorted.map(x =>
                        <JobElement
                            todo={x}
                            key={x.id}
                            id={x.id}
                            toDos={toDos}
                            name={x.job}
                            setToDos={setToDos}
                            significance={x.significance}
                            setVisibility={setVisibility}
                            setCurrentLi={setCurrentLi}
                        />)}
                </article>
            </section>
        </>
    );
}

export default JobsContainer;