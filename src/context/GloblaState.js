import { useReducer } from "react"
import React from "react"
import { ACTIONS } from "../App"
import reducer from "./AppReducer"

// Initial state
const initialState = {
    todos: [],
    visibility: 'none',
    currentTodo: '',
    filteredTodos:[]
}

// Create context
export const GlobalContext = React.createContext(initialState)

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // Actions
    function addTodo(todo) {
        dispatch({
            type: ACTIONS.ADD_TODO,
            payload: todo
        })
    }
    function deleteTodo(todo) {
        dispatch({
            type: ACTIONS.DELETE_TODO,
            payload: { id: todo.id }
        })
    }
    function showScreen(todo) {
        dispatch({
            type: ACTIONS.SHOW_SCREEN,
            payload: { curr: todo, vis: 'block' }
        })
    }
    function updateCurrentTodo(todo, updatedSignificance) {
        dispatch({
            type: ACTIONS.UPDATE_CURRENT_TODO,
            payload: { id: todo.id, significance: updatedSignificance, vis: 'none' }
        })
    }
    function searchTodo(text) {
        dispatch({
            type: ACTIONS.SEARCH_TODO,
            payload: {text:text}
        })
    }

    return (
        <GlobalContext.Provider value={{
            todos: state.todos,
            visible: state.visibility,
            currentTodo: state.currentTodo,
            filteredTodos:state.filteredTodos,
            addTodo,
            deleteTodo,
            showScreen,
            updateCurrentTodo,
            searchTodo
        }}>
            {children}
        </GlobalContext.Provider>)
}

