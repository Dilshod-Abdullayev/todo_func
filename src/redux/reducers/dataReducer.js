const initialState = [
    {
        id: null,
        name: "",
        lastName: ""
    },
];

let currentId = 1;

export default function dataReducer(state = initialState, action) {
    switch (action.type) {
        case "addelement":
            const newItem = {
                id: currentId,
                name: action.payload.name,
                lastName: action.payload.lastName
            };
            currentId++;
            return [...state, newItem];
        default:
            return state;
    }
}