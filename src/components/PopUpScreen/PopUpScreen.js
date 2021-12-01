import './PopUpScreen.scss'
import { useEffect, useState } from 'react'
import updateHandle from '../../helpers/updateHandler'


function PopUpScreen({ visibility, setVisibility, currentLi, toDos, setToDos,sorted,setSorted }) {
    let priority = currentLi.significance
    let jobName = currentLi.job

    const [currentSignificance, setCurrentSignificance] = useState('')
    const [currentJobName, setCurrentJobName] = useState('')

    const changeHandler =(e) => {setCurrentSignificance(e.target.value)}

    const updateHandleFunction = (e) => {
        updateHandle(e, setVisibility, currentLi, setToDos, toDos,setSorted)
    }

    useEffect(() => {
        setCurrentSignificance(priority)
        setCurrentJobName(jobName)
    }, [priority, jobName])

    return (
        <form onSubmit={updateHandleFunction} id="pop-up-screen" style={{ display: visibility }}>
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