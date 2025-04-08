import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
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
