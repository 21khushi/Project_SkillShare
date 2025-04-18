<<<<<<< HEAD
=======
// import { makeStyles } from '@mui/styles';

// export default makeStyles(() => ({
//   card: {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     borderRadius: '15px',
//     height: '450px',  // ✅ Increase height for visibility
//     width: '450px',   // ✅ Wider cards for row layout
//     position: 'relative',
//     boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)',  
//     padding: '15px',
//     overflow: 'hidden',
//     backgroundColor: '#fff',
//   },
//   media: {
//     height: '200px',  // ✅ Bigger image for visibility
//     width: '100%',
//     objectFit: 'cover',
//     borderRadius: '10px',
//   },
//   details: {
//     fontSize: '1rem',
//     margin: '10px',
//   },
//   title: {
//     fontSize: '1.3rem',  
//     padding: '0 10px',
//   },
//   cardActions: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     padding: '10px',
//   },
// }));


>>>>>>> bd8644c (final changes)
import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
<<<<<<< HEAD
    borderRadius: '15px',
    height: '450px',  // ✅ Increase height for visibility
    width: '450px',   // ✅ Wider cards for row layout
    position: 'relative',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)',  
    padding: '15px',
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  media: {
    height: '200px',  // ✅ Bigger image for visibility
    width: '100%',
    objectFit: 'cover',
    borderRadius: '10px',
  },
  details: {
    fontSize: '1rem',
    margin: '10px',
  },
  title: {
    fontSize: '1.3rem',  
    padding: '0 10px',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
  },
}));
=======
    borderRadius: '16px',
    height: '480px',
    width: '460px',
    position: 'relative',
    padding: '16px',
    backgroundColor: '#fffde7', //  Light Yellow
    border: '2px solid #fdd835', //  Bold Yellow border
    boxShadow: '0 8px 24px rgba(253, 216, 53, 0.3)', // glowing effect
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'scale(1.03)',
      boxShadow: '0 12px 32px rgba(253, 216, 53, 0.4)',
    },
  },
  media: {
    height: '200px',
    width: '100%',
    objectFit: 'cover',
    borderRadius: '12px',
  },
  details: {
    fontSize: '1rem',
    margin: '10px 0',
    color: '#444',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    padding: '0 10px',
    color: '#f57f17', // Deeper orange-yellow for title
    textShadow: '0 1px 3px rgba(0,0,0,0.1)',
  },
  
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 10px 0',
    '& button': {
      fontWeight: 'bold',
      borderRadius: '8px',
      padding: '6px 16px',
      fontSize: '0.9rem',
      transition: '0.3s ease',
      color: '#fff',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    },
    '& button:nth-child(1)': {
      backgroundColor: '#ff4081', // pink
      '&:hover': {
        backgroundColor: '#e91e63',
      },
    },
    '& button:nth-child(2)': {
      backgroundColor: '#4caf50', // green
      '&:hover': {
        backgroundColor: '#388e3c',
      },
    },
    '& button:nth-child(3)': {
      backgroundColor: 'blue', // green
      '&:hover': {
        backgroundColor: '#81d4fa',
      },
    },
    '& button:nth-child(4)': {
      backgroundColor: 'orange', // green
      '&:hover': {
        backgroundColor: 'yellow',
      },
    },
  }
  
  
}));
>>>>>>> bd8644c (final changes)
