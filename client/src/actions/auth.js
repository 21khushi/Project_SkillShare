import axios from 'axios';

export const signup = (formData, navigate, setError) => async (dispatch) => {
    try {
        const { data } = await axios.post('http://localhost:5000/auth/signup', formData);
<<<<<<< HEAD
        alert(data.message);  // ✅ Show success message
        navigate('/auth');  // ✅ Redirect to Login page
=======
        alert(data.message);  // Show success message
        navigate('/auth');  //  Redirect to Login page
>>>>>>> bd8644c (final changes)
    } catch (error) {
        if (error.response && error.response.data.message) {
            setError(error.response.data.message);
        } else {
            setError("Something went wrong. Please try again.");
        }
    }
};



<<<<<<< HEAD

=======
>>>>>>> bd8644c (final changes)
export const login = (formData, navigate, setError) => async (dispatch) => {
    try {
        const { data } = await axios.post('http://localhost:5000/auth/login', formData);
        dispatch({ type: "AUTH", payload: data });

<<<<<<< HEAD
        localStorage.setItem("profile", JSON.stringify(data));  // ✅ Save user info in local storage
        navigate('/');  // ✅ Redirect to home page
    } catch (error) {
=======
        localStorage.setItem("profile", JSON.stringify(data));  // Save user info in local storage
        axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`; // Set auth token

        navigate('/Home');  // Redirect to home page
    } catch (error) {
        console.log(error); // Log the error for debugging
>>>>>>> bd8644c (final changes)
        if (error.response && error.response.data.message) {
            setError(error.response.data.message);
        } else {
            setError("Something went wrong. Please try again.");
        }
    }
};
