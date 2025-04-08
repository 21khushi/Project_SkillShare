import axios from 'axios';

export const signup = (formData, navigate, setError) => async (dispatch) => {
    try {
        const { data } = await axios.post('http://localhost:5000/auth/signup', formData);
        alert(data.message);  // ✅ Show success message
        navigate('/auth');  // ✅ Redirect to Login page
    } catch (error) {
        if (error.response && error.response.data.message) {
            setError(error.response.data.message);
        } else {
            setError("Something went wrong. Please try again.");
        }
    }
};




export const login = (formData, navigate, setError) => async (dispatch) => {
    try {
        const { data } = await axios.post('http://localhost:5000/auth/login', formData);
        dispatch({ type: "AUTH", payload: data });

        localStorage.setItem("profile", JSON.stringify(data));  // ✅ Save user info in local storage
        navigate('/');  // ✅ Redirect to home page
    } catch (error) {
        if (error.response && error.response.data.message) {
            setError(error.response.data.message);
        } else {
            setError("Something went wrong. Please try again.");
        }
    }
};
