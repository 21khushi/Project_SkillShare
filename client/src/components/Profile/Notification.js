//Notification.js
import React from 'react';
import { Snackbar, Alert } from '@mui/material';

const Notification = ({ open, message, onClose, severity }) => {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
      <Alert onClose={onClose} severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
