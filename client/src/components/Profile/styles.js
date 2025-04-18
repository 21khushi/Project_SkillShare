import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  paper: {
    marginTop: 40,
    padding: '40px 30px',
    borderRadius: 16,
    backgroundColor: '#ffffff',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s ease',
    '&:hover': {
      boxShadow: '0 15px 40px rgba(0, 0, 0, 0.2)',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '20px 15px',
    },
  },
  avatar: {
    backgroundColor: '#1976d2',
    width: 100,
    height: 100,
    fontSize: 40,
    border: '3px solid white',
    marginBottom: 20,
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  form: {
    marginTop: 30,
    animation: 'fadeIn 1s ease-out',
  },
  textField: {
    marginBottom: 20,
    borderRadius: 8,
    transition: 'all 0.3s ease-in-out',
    '&:focus-within': {
      borderColor: '#1976d2',
      boxShadow: '0 0 10px rgba(25, 118, 210, 0.5)',
    },
  },
  button: {
    marginTop: 20,
    padding: '12px 0',
    fontSize: '16px',
    borderRadius: 8,
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
    '&:hover': {
      backgroundColor: '#1565c0',
      transform: 'translateY(-2px)',
    },
  },
  skillsContainer: {
    marginTop: 20,
    display: 'flex',
    flexWrap: 'wrap',
    gap: 10,
  },
  skillButton: {
    padding: '5px 12px',
    fontSize: '14px',
    borderRadius: 20,
    backgroundColor: '#e3f2fd',
    color: '#1976d2',
    border: '1px solid #1976d2',
    '&:hover': {
      backgroundColor: '#1976d2',
      color: '#fff',
    },
  },
  uploadButton: {
    backgroundColor: '#1976d2',
    color: '#fff',
    padding: '8px 16px',
    borderRadius: 8,
    fontSize: '14px',
    '&:hover': {
      backgroundColor: '#1565c0',
    },
  },
  inputFile: {
    display: 'none',
  },
  background: {
    background: 'linear-gradient(45deg, #00bcd4, #1976d2)',  // Gradient background
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundAttachment: 'fixed',  // Keep background fixed when scrolling
    backgroundSize: 'cover',  // Make the background cover the entire screen
  },
}));
