import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',  
  },
  paper: {
    width: '450px',
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '12px',
    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.2)',
    background: 'linear-gradient(120deg, #F8BBD0 0%, #D1C4E9 100%) !important',  
  },
  form: {
    width: '100%',
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',  // ✅ Adds space between all input fields
  },
  textField: {
    width: '100%',
    '& .MuiOutlinedInput-root': {
      borderRadius: '8px',
      backgroundColor: '#FFFFFF',
      '&:hover fieldset': {
        borderColor: '#8E24AA',
      },
    },
  },
  button: {
    backgroundColor: '#7B1FA2',
    color: '#FFFFFF',
    borderRadius: '8px',
    padding: '12px',
    width: '100%',
    marginTop: '10px',
    transition: '0.3s',
    '&:hover': {
      backgroundColor: '#9C27B0',
      transform: 'scale(1.05)',
    },
  },
  switchButton: {
    marginTop: '20px',
    color: '#4A148C',
    fontWeight: 'bold',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));
