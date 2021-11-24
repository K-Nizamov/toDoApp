import './PopUpScreen.scss'

function PopUpScreen() {
    return (
        <div id="pop-up-screen">
            <div id="pop-up-content">
                <h2 id="pop-up-title">My job name</h2>
                <select required id="pop-up-job-description">
                    <option value="Urgent">Urgent</option>
                    <option value="Regular">Regular</option>
                    <option value="Trivial">Trivial</option>
                </select>
            </div>
            <button type="submit" id="update-btn">Update</button>
        </div>
    );
}

export default PopUpScreen;