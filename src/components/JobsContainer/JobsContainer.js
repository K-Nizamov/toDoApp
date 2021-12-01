import { useContext, useEffect, useState } from 'react';
import ToDoContext from '../../context/ToDoContext';

import searchFunction from '../../helpers/searchHandler';
import JobElement from './JobElement'


function JobsContainer() {

    const context = useContext(ToDoContext)

    const [filteredText, setFilteredText] = useState('')

    const searchHandleFunction = (e) => {
        searchFunction(e,setFilteredText)
    }

    useEffect(() => {
        let filteredArr = context.toDos.filter(obj => obj.job.toUpperCase().includes(filteredText.toUpperCase()))
        let sortedToDos = filteredArr.sort((a, b) => b.significance.localeCompare(a.significance))
        context.setSorted(sortedToDos)
    }, [context.toDos, filteredText, context.setSorted])

    return (
        <>
            <section className="to-do-section">
                <article className="record-wrapper">
                    <h1 className="header">JOB LIST</h1>
                    <input className="header" id="search" type="text" onKeyUp={searchHandleFunction} placeholder="Search Job" />
                </article>
                <article className="record-container" id="divContainer">
                    {context.sorted.map(x =>
                        <JobElement
                            todo={x}
                            key={x.id}
                            id={x.id}
                            name={x.job}
                            significance={x.significance}
                        />)}
                </article>
            </section>
        </>
    );
}

export default JobsContainer;