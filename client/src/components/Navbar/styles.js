// import { makeStyles } from '@mui/styles';

// export default makeStyles(() => ({
//   appBar: {
//     width: '100vw',
//     height: '85px',
//     background: 'linear-gradient(120deg, #F8BBD0 0%, #D1C4E9 100%) !important',  
//     position: 'fixed',
//     top: '0px',
//     left: '0px',
//     zIndex: 1500,
//     display: 'flex',
//     alignItems: 'center',
//     padding: '0 40px',
//     boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.15)',
//     borderBottom: '3px solid rgba(200, 150, 255, 0.5)',
//   },
//   toolbar: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     width: '100%',
//   },
//   title: {
//     flexGrow: 1,
//     textAlign: 'center',
//     fontSize: '3rem',  // ✅ Emphasized text
//     fontWeight: '1800',  // ✅ Extra bold
//     background: 'linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 50%,rgb(105, 193, 255) 100%)',  // ✅ Half white, half pink gradient
//     WebkitBackgroundClip: 'text',  // ✅ Apply gradient to text
//     WebkitTextFillColor: 'transparent',  // ✅ Make gradient visible
//     letterSpacing: '3px',
//     fontFamily: "'Poppins', sans-serif",
//     transition: '0.4s ease-in-out',
//     cursor: 'pointer',  
//     '&:hover': {
//       transform: 'scale(1.1)',  // ✅ Slight zoom effect
//       textShadow: '0px 0px 15px rgba(255, 105, 180, 0.6)',  // ✅ Soft pink glow
//     },
//   },


//   rightSection: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '20px',
//   },
//   homeButton: {
//     background: 'rgb(0, 132, 255) !important',
//     color: 'white !important',
//     fontWeight: 'bold',
//     fontSize: '1rem',
//     textTransform: 'uppercase', // ✅ Uppercase for bold look
//     borderRadius: '10px',
//     padding: '12px 30px', // ✅ More padding for better button size
//     boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', // ✅ Adds elevation effect
//     transition: 'all 0.3s ease-in-out',
//     '&:hover': {
//       color:'blue !important',
//       background: 'white !important',
//       transform: 'scale(1.08)', // ✅ Enlarges slightly for 3D effect
//       boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.3)', // ✅ Stronger shadow for depth
//     },
//     '&:active': {
//       transform: 'scale(0.95)', // ✅ Pressing effect
//       boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.2)',
//     },
//   },

//   menuButton: {
//     color: '#6A1B9A',
//     transition: '0.3s',
//     '&:hover': {
//       color: '#4A148C',
//       transform: 'rotate(90deg)',
//     },
//   },
//   menu: {
//     marginTop: '50px',
//     '& .MuiPaper-root': {
//       backgroundColor: '#E1BEE7',
//       color: '#4A148C',
//       borderRadius: '10px',
//     },
//     '& .MuiMenuItem-root': {
//       transition: '0.3s',
//       '&:hover': {
//         backgroundColor: '#CE93D8',
//         transform: 'scale(1.05)',
//       },
//     },
//   },
// }));




import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  appBar: {
    width: '100vw',
    height: '80px',
    padding: '10px 30px',
    background: 'linear-gradient(120deg, #F8BBD0 0%, #D1C4E9 100%) !important',  
    position: 'fixed',
    top: '0px',
    left: '0px',
    zIndex: 1500,
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    alignItems: 'center',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  profile: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginLeft: '20px',  // ✅ Push profile to the left
  },
  avatar: {
    backgroundColor: '#673AB7',  // ✅ Purple Avatar Background
    color: '#fff',
    width: '45px',
    height: '45px',
    fontSize: '1.2rem',
  },
  userName: {
    fontWeight: 'bold',
    fontSize: '1rem',
    color: '#673AB7',
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  homeButton: {
    backgroundColor: '#1E88E5',
    color: '#FFFFFF',
    fontWeight: 'bold',
    borderRadius: '8px',
    padding: '10px 20px',
    '&:hover': {
      backgroundColor: '#1565C0',
    },
  },
}));



