import { useContext } from "react";
import { GlobalContext } from "../../context/GloblaState";
import colorChange from "../../helpers/colorChange";

function JobElement({ todo }) {
    const { deleteTodo, showScreen} = useContext(GlobalContext)
    let color = colorChange(todo.significance)

    return (
        <>
            <div className="li-wrapper" style={color}>
                <li className="li-style">{todo.job}</li>
                <li className="li-style">{todo.significance}</li>
                <li className="li-style">
                    <button className="record-section-btn" onClick={() => showScreen(todo)} >Edit</button>
                    <button className="record-section-btn" onClick={() => deleteTodo(todo)} >Delete</button>
                </li>
            </div>
        </>
    );
}

export default JobElement;