import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../../context/GloblaState';
import './PopUpScreen.scss'

function PopUpScreen() {
    const { visible, currentTodo, todos, updateCurrentTodo } = useContext(GlobalContext)

    let jobName = currentTodo.job
    let priority = currentTodo.significance

    const [currentSignificance, setCurrentSignificance] = useState('')

    useEffect(() => {
        setCurrentSignificance(priority)
    }, [priority])

    const changeHandler = (e) => {
        setCurrentSignificance(e.target.value)
    }

    const updateHandleFunction = (e) => {

        e.preventDefault()

        let significance = e.target.description.value

        updateCurrentTodo(currentTodo, significance)

        todos.sort((a, b) => b.significance.localeCompare(a.significance))
    }

    return (
        <form id="pop-up-screen" onSubmit={updateHandleFunction} style={{ display: visible }}>
            <div id="pop-up-content">
                <h2 id="pop-up-title">{jobName}</h2>
                <select name="description" required id="pop-up-job-description" onChange={changeHandler} value={currentSignificance} >
                    <option value="Urgent" >Urgent</option>
                    <option value="Regular">Regular</option>
                    <option value="Trivial">Trivial</option>
                </select>
            </div>
            <button type="submit" id="update-btn" >Update</button>
        </form>
    );
}

export default PopUpScreen;