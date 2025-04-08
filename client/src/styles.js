import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '20px auto',
    padding: '8px',
    display: 'flex',
    flexDirection: 'column', // Stack items on mobile
    alignItems: 'center',
    backgroundColor: 'rgb(255, 228, 255) !important',
    // For larger screens, use a row layout:
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  },
  heading: {
    color: 'rgb(59, 13, 59)',
    fontSize: '1.5rem', // Smaller on mobile
    fontWeight: 'bold',
    // Increase font size on small+ screens:
    [theme.breakpoints.up('sm')]: {
      fontSize: '2rem',
    },
  },
  image: {
    marginTop: '10px',
    maxHeight: '50px',
    objectFit: 'contain',
    // Align image inline on larger screens:
    [theme.breakpoints.up('md')]: {
      marginTop: 0,
      marginLeft: '20px',
    },
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'column', // Default to column on mobile
    padding: '10px',
    // Change to row for larger screens:
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  formContainer: {
    width: '100%',
    // For larger screens, add some padding or width adjustments:
    [theme.breakpoints.up('md')]: {
      width: '90%',
    },
  },
}));
