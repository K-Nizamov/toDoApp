import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../../context/GloblaState';

import JobElement from './JobElement'

function JobsContainer() {
    const { todos, filteredTodos, searchTodo} = useContext(GlobalContext)
    const [filterText, setFilterText] = useState("")

    const searchHandle = (e) => {
        e.preventDefault()
        setFilterText(e.target.value)
    }
    useEffect(()=>{
        searchTodo(filterText)
    },[filterText])

    return (
        <>
            <section className="to-do-section">
                <article className="record-wrapper">
                    <h1 className="header">JOB LIST</h1>
                    <input className="header" id="search" type="text" placeholder="Search Job" onKeyUp={searchHandle} />
                </article>
                <article className="record-container" id="divContainer">
                    {filterText.length > 0 ? filteredTodos.map(todo => (
                        <JobElement key={todo.id} todo={todo} />
                    )) : todos.map(todo => (
                        <JobElement key={todo.id} todo={todo} />
                    ))}
                </article>
            </section>
        </>
    );
}

export default JobsContainer;