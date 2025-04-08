const initialState = { user: null };  // ✅ Ensure state starts with user as null

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "AUTH":
            localStorage.setItem("profile", JSON.stringify(action.payload));  // ✅ Save user in localStorage
            return { ...state, user: action.payload };  // ✅ Ensure user is stored properly
        default:
            return state;
    }
};

export default authReducer;
