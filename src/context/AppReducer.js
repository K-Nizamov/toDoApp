import { ACTIONS } from "../App";
export default function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return {
                ...state,
                todos: [action.payload, ...state.todos]
                    .sort((a, b) => b.significance.localeCompare(a.significance))
            }
        case ACTIONS.DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload.id)
            }

        case ACTIONS.SHOW_SCREEN:
            return {
                ...state,
                visibility: action.payload.vis,
                currentTodo: action.payload.curr
            }

        case ACTIONS.UPDATE_CURRENT_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload.id) {
                        todo.significance = action.payload.significance
                        return todo
                    }
                    return todo
                }).sort((a, b) => b.significance.localeCompare(a.significance)),
                visibility: action.payload.vis
            }
        case ACTIONS.SEARCH_TODO:
            return {
                ...state,
                filteredTodos: state.todos
                    .filter(todo => todo.job.toUpperCase().includes(action.payload.text.toUpperCase()))
                    .sort((a, b) => b.significance.localeCompare(a.significance))
            }
        default:
            return state;
    }
}