import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
<<<<<<< HEAD
    minHeight: '100vh',  
=======
    minHeight: '100vh',
>>>>>>> bd8644c (final changes)
  },
  paper: {
    width: '450px',
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
<<<<<<< HEAD
    borderRadius: '12px',
    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.2)',
    background: 'linear-gradient(120deg, #F8BBD0 0%, #D1C4E9 100%) !important',  
=======
    borderRadius: '16px',
    backgroundColor: '#fffde7',
    boxShadow: '0 0 20px rgba(255, 235, 59, 0.4)', // stronger glow
    border: '2px solid #fdd835',    
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#ff4081',
    marginBottom: '20px',
    textShadow: '0 0 10px rgba(255, 64, 129, 0.6)',
>>>>>>> bd8644c (final changes)
  },
  form: {
    width: '100%',
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column',
<<<<<<< HEAD
    gap: '20px',  // ✅ Adds space between all input fields
=======
    gap: '20px',
>>>>>>> bd8644c (final changes)
  },
  textField: {
    width: '100%',
    '& .MuiOutlinedInput-root': {
      borderRadius: '8px',
<<<<<<< HEAD
      backgroundColor: '#FFFFFF',
      '&:hover fieldset': {
        borderColor: '#8E24AA',
      },
    },
  },
  button: {
    backgroundColor: '#7B1FA2',
    color: '#FFFFFF',
=======
      backgroundColor: '#ffffff',
      '& fieldset': {
        borderColor: '#ccc',
      },
      '&:hover fieldset': {
        borderColor: '#fdd835',
      },
    },
    '& .MuiInputLabel-root': {
      color: '#333',
    },
  },
  button: {
    backgroundColor: '#00bcd4',
    color: '#fff',
    fontWeight: 'bold',
>>>>>>> bd8644c (final changes)
    borderRadius: '8px',
    padding: '12px',
    width: '100%',
    marginTop: '10px',
    transition: '0.3s',
<<<<<<< HEAD
    '&:hover': {
      backgroundColor: '#9C27B0',
=======
    boxShadow: '0 0 12px rgba(0, 188, 212, 0.4)',
    '&:hover': {
      backgroundColor: 'transparent',
      color: '#00bcd4',
      border: '2px solid #00bcd4',
>>>>>>> bd8644c (final changes)
      transform: 'scale(1.05)',
    },
  },
  switchButton: {
    marginTop: '20px',
<<<<<<< HEAD
    color: '#4A148C',
=======
    color: '#00bcd4',
>>>>>>> bd8644c (final changes)
    fontWeight: 'bold',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));
