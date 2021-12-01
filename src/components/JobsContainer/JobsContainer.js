import { useEffect, useState } from 'react';

import searchFunction from '../../helpers/searchHandler';
import JobElement from './JobElement'


function JobsContainer({ toDos, setToDos, setVisibility, setCurrentLi, sorted, setSorted }) {

    const [filteredText, setFilteredText] = useState('')

    const searchHandleFunction = (e) => {
        searchFunction(e, setFilteredText)
    }

    useEffect(() => {
        let filteredArr = toDos.filter(obj => obj.job.toUpperCase().includes(filteredText.toUpperCase()))
        let sortedToDos = filteredArr.sort((a, b) => b.significance.localeCompare(a.significance))
        setSorted(sortedToDos)
    }, [toDos, filteredText, setSorted])

    return (
        <>
            <section className="to-do-section">
                <article className="record-wrapper">
                    <h1 className="header">JOB LIST</h1>
                    <input className="header" id="search" type="text" onKeyUp={searchHandleFunction} placeholder="Search Job" />
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