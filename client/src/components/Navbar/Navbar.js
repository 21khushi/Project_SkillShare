// import React, { useState } from 'react';
// import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, IconButton } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Link } from 'react-router-dom';
// import useStyles from './styles';

// const Navbar = () => {
//   const classes = useStyles();
//   const [anchorEl, setAnchorEl] = useState(null);

//   const handleMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <AppBar className={classes.appBar} position="fixed">
//       <Toolbar className={classes.toolbar}>
//         <Typography variant="h4" className={classes.title}>
//           SkillShare  {/* ✅ Bold & Bigger */}
//         </Typography>
//         <div className={classes.rightSection}>
//           <Button component={Link} to="/" className={classes.homeButton}>
//             Home  {/* ✅ Blue Box Button */}
//           </Button>
//           <IconButton onClick={handleMenuOpen} className={classes.menuButton}>
//             <MenuIcon fontSize="large" />
//           </IconButton>
//         </div>
//         <Menu
//           anchorEl={anchorEl}
//           open={Boolean(anchorEl)}
//           onClose={handleMenuClose}
//           className={classes.menu}
//         >
//           <MenuItem onClick={handleMenuClose} component={Link} to="/profile">Profile</MenuItem>
//           <MenuItem onClick={handleMenuClose} component={Link} to="/saved-posts">Saved Posts</MenuItem>
//           <MenuItem onClick={handleMenuClose} component={Link} to="/auth">Login / Signup</MenuItem>
//           <MenuItem onClick={handleMenuClose} component={Link} to="/create-post">Edit / Create Post</MenuItem>
//         </Menu>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;




import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, IconButton, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';  // ✅ Import useSelector to get user from Redux
import useStyles from './styles';

const Navbar = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  
  const user = useSelector((state) => state.auth.user);  // ✅ Get user from Redux
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar className={classes.appBar} position="fixed">
      <Toolbar className={classes.toolbar}>
        {/* ✅ Show Profile when Logged In */}
        {user ? (
          <div className={classes.profile}>
            <Avatar className={classes.avatar} alt={user?.user?.name}>
              {user?.user?.name?.charAt(0).toUpperCase()}  {/* ✅ Show First Letter of Name */}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user?.user?.name}
            </Typography>
          </div>
        ) : (
          <Button component={Link} to="/auth" variant="contained" color="primary">
            Login / Signup
          </Button>
        )}
         <Typography variant="h4" className={classes.title}>
          SkillShare  {/* ✅ Bold & Bigger */}
      </Typography>
        {/* ✅ Home & Hamburger Menu */}
        <div className={classes.rightSection}>
          <Button component={Link} to="/" className={classes.homeButton}>
            Home
          </Button>
          <IconButton onClick={handleMenuOpen} className={classes.menuButton}>
            <MenuIcon fontSize="large" />
          </IconButton>
        </div>

        {/* ✅ Dropdown Menu */}
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose} className={classes.menu}>
        <MenuItem onClick={handleMenuClose} component={Link} to="/profile">Profile</MenuItem>
        <MenuItem onClick={handleMenuClose} component={Link} to="/saved-posts">Saved Posts</MenuItem>
      <MenuItem onClick={handleMenuClose} component={Link} to="/auth">Login / Signup</MenuItem>
         <MenuItem onClick={handleMenuClose} component={Link} to="/create-post">Edit / Create Post</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;




