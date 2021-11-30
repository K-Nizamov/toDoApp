import './PopUpScreen.scss'
import { useEffect, useState } from 'react'

function PopUpScreen({ visibility, setVisibility, currentLi,toDos,setToDos}) {
    let priority = currentLi.significance
    let jobName = currentLi.job

    function updateHandler(e) {
        e.preventDefault()
        setVisibility('none')
        let significance = e.target.description.value
        currentLi.significance = significance

        let sortedToDos = toDos.sort((a, b) => b.significance.localeCompare(a.significance))
        setToDos(sortedToDos)
    }

    const [currentSignificance,setCurrentSignificance] = useState('')
    const [currentJobName,setCurrentJobName] = useState('')

    useEffect(()=>{
        setCurrentSignificance(priority)
        setCurrentJobName(jobName)
    },[priority,jobName])


    function changeHandler(e){
        setCurrentSignificance(e.target.value)
    }


    return (
        <form onSubmit={updateHandler}  id="pop-up-screen" style={{ display: visibility }}>
            <div id="pop-up-content">
                <h2 id="pop-up-title">{currentJobName}</h2>
                <select name="description" required id="pop-up-job-description" onChange={changeHandler} value = {currentSignificance} >
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