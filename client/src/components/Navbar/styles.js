<<<<<<< HEAD
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




=======
>>>>>>> bd8644c (final changes)
import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  appBar: {
    width: '100vw',
    height: '80px',
    padding: '10px 30px',
<<<<<<< HEAD
    background: 'linear-gradient(120deg, #F8BBD0 0%, #D1C4E9 100%) !important',  
    position: 'fixed',
    top: '0px',
    left: '0px',
    zIndex: 1500,
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    alignItems: 'center',
  },
=======
    background: 'linear-gradient(90deg, #b2ebf2, #f8bbd0, #fff9c4, #c8e6c9)', // Light gradient background
    backgroundSize: '400% 400%',
    animation: '$gradientFlow 12s ease infinite',
    backdropFilter: 'blur(8px)',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1500,
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    alignItems: 'center',
    borderBottom: '2px solid #ff80ab',
  },

>>>>>>> bd8644c (final changes)
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
<<<<<<< HEAD
=======

  title: {
    flexGrow: 1,
    textAlign: 'center',
    fontSize: '2.4rem',
    fontWeight: 800,
    fontFamily: "'Poppins', sans-serif",
    color: '#C2185B', // Dark pink
    letterSpacing: '2px',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.08)',
    },
  },
  

>>>>>>> bd8644c (final changes)
  profile: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
<<<<<<< HEAD
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



=======
    marginLeft: '20px',
  },

  avatar: {
    backgroundColor: '#ff80ab',
    color: '#fff',
    width: '44px',
    height: '44px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
  },

  userName: {
    fontWeight: 'bold',
    fontSize: '1rem',
    color: '#f5f5f5',
  },

  rightSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '18px',
  },

  homeButton: {
    background: 'linear-gradient(135deg, #fff176, #f48fb1, #81d4fa, #a5d6a7)',
    backgroundSize: '300% 300%',
    animation: '$gradientFlow 8s ease infinite',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '0.95rem',
    padding: '10px 20px',
    borderRadius: '10px',
    textTransform: 'uppercase',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)',
    },
  },

  '@keyframes gradientFlow': {
    '0%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' },
  },
}));
>>>>>>> bd8644c (final changes)
