import './PopUpScreen.scss'

function PopUpScreen() {
    return (
        <div id="pop-up-screen">
            <div id="pop-up-content">
                <h2 id="pop-up-title">My job name</h2>
                <select required id="pop-up-job-description">
                    <option defaultValue="Urgent">Urgent</option>
                    <option defaultValue="Regular">Regular</option>
                    <option defaultValue="Trivial">Trivial</option>
                </select>
            </div>
            <button type="submit" id="update-btn">Update</button>
        </div>
    );
}

export default PopUpScreen;