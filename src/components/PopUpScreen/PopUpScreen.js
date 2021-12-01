import './PopUpScreen.scss'
import { useContext, useEffect, useState } from 'react'
import updateHandle from '../../helpers/updateHandler'
import ToDoContext from '../../context/ToDoContext'


function PopUpScreen() {

    const context = useContext(ToDoContext)

    let priority = context.currentLi.significance
    let jobName = context.currentLi.job

    const [currentSignificance, setCurrentSignificance] = useState('')
    const [currentJobName, setCurrentJobName] = useState('')

    const changeHandler =(e) => {setCurrentSignificance(e.target.value)}

    const updateHandleFunction = (e) => {
        updateHandle(e, context.setVisibility, context.currentLi, context.toDos,context.setSorted)
    }

    useEffect(() => {
        setCurrentSignificance(priority)
        setCurrentJobName(jobName)
    }, [priority, jobName])

    return (
        <form onSubmit={updateHandleFunction} id="pop-up-screen" style={{ display: context.visibility }}>
            <div id="pop-up-content">
                <h2 id="pop-up-title">{currentJobName}</h2>
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