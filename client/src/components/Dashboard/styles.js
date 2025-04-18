<<<<<<< HEAD
import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  paper: {
    padding: '20px',
    textAlign: 'center',
    marginBottom: '20px',
  },
}));
=======
// import { makeStyles } from '@mui/styles';

// export default makeStyles((theme) => ({
//   paper: {
//     padding: '20px',
//     textAlign: 'center',
//     marginBottom: '20px',
//   },
// }));



import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  dashboardContainer: {
    minHeight: '100vh',
    padding: '120px 40px 40px',
    background: 'linear-gradient(120deg, #fce4ec, #e3f2fd, #e8f5e9)',
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
  },

  pageTitle: {
    fontSize: '2.5rem',
    fontWeight: '700',
    textAlign: 'center',
    color: '#C2185B', // Dark pink
    marginBottom: '20px',
    fontFamily: "'Poppins', sans-serif",
  },

  sectionCard: {
    background: '#fff',
    borderRadius: '16px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
    padding: '25px 30px',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },

  sectionTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#444',
  },

  buttonList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '15px',
    marginTop: '10px',
  },

  requestButton: {
    background: 'linear-gradient(135deg, #ffca28, #4caf50)',
    color: '#fff',
    fontWeight: 'bold',
    padding: '10px 20px',
    borderRadius: '10px',
    textTransform: 'none',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    '&:hover': {
      background: 'linear-gradient(135deg, #ffb300, #43a047)',
    },
  },
}));

>>>>>>> bd8644c (final changes)
