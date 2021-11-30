
import colorChange from "../../helpers/colorChange";
import { deleteFunctionHandler } from "../../helpers/deleteHandler";

function JobElement(props) {
    let significanceText = props.significance

    let backgroundColorOfLiElement = colorChange(significanceText)

    let deleteFunction = () => { deleteFunctionHandler(props) }

    function editFunctionHandler(e) {
        props.setVisibility('block')
        props.setCurrentLi(props.todo)
    }

    return (
        <>
            <div className="li-wrapper" style={backgroundColorOfLiElement}>
                <li className="li-style">{props.name}</li>
                <li className="li-style">{props.significance}</li>
                <li className="li-style">
                    <button className="record-section-btn" onClick={editFunctionHandler}>Edit</button>
                    <button className="record-section-btn" onClick={deleteFunction}>Delete</button>
                </li>
            </div>
        </>
    );
}

export default JobElement;