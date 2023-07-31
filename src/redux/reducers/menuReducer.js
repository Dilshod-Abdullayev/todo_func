const initialState = {
    menu: true,
};

export default function menuReducer(state = initialState, action) {
    switch (action.type) {
        case "menuChange":
            return {
                ...state,
                menu: !state.menu,
            };
        default:
            return state;
    }
}
