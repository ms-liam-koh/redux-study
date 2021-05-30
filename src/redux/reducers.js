function todoList(state = initialState, action) {
    switch (action.type) {
        case CREATE:
            console.log(state, action.payload)
            const newTodo = action.payload;
            return state.concat(newTodo)
        case UPDATE:
            const newTodo2 = action.payload;

            return state.map((todo, index) => {
                if (todo.id === newTodo2.id) {
                    return newTodo2;
                } else {
                    return todo;
                }
            })
        case REMOVE:
            console.log(state, action)
            return state.filter(todo => {
                return todo.id !== action.payload
            })
        default: return state;
    }
}