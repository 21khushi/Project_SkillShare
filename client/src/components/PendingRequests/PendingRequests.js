import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Typography, Paper, List, ListItem, ListItemText, ListItemSecondaryAction, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { fetchPendingRequests, handleAccessRequest } from '../../actions/posts';

const PendingRequests = () => {
  const user = useSelector((state) => state.auth.user);
  const [pendingRequests, setPendingRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [processingRequestId, setProcessingRequestId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/auth');
      return;
    }
    const loadPendingRequests = async () => {
      setLoading(true);
      try {
        const data = await fetchPendingRequests(user.user._id);
        setPendingRequests(data);
      } catch (error) {
        console.error('Failed to fetch pending requests:', error);
      }
      setLoading(false);
    };
    loadPendingRequests();
  }, [user, navigate]);

  const handleApproveReject = async (postId, requestId, status) => {
    setProcessingRequestId(requestId);
    try {
      await handleAccessRequest(postId, requestId, status);
      setPendingRequests((prev) =>
        prev.filter((req) => req.requestId !== requestId)
      );
    } catch (error) {
      console.error(`Failed to ${status.toLowerCase()} request:`, error);
    }
    setProcessingRequestId(null);
  };

  if (loading) {
    return <CircularProgress />;
  }

  if (pendingRequests.length === 0) {
    return <Typography>No pending requests.</Typography>;
  }

  return (
    <Paper style={{ padding: 20 }}>
      <Typography variant="h5" gutterBottom>
        Pending Access Requests
      </Typography>
      <List>
        {pendingRequests.map((request) => (
          <ListItem key={request.requestId} divider>
            <ListItemText
              primary={`Post: ${request.postTitle}`}
              secondary={`User: ${request.userName} (${request.userEmail})`}
            />
            <ListItemSecondaryAction>
              <Button
                variant="contained"
                color="primary"
                disabled={processingRequestId === request.requestId}
                onClick={() =>
                  handleApproveReject(request.postId, request.requestId, 'Approved')
                }
                style={{ marginRight: 8 }}
              >
                Approve
              </Button>
              <Button
                variant="contained"
                color="secondary"
                disabled={processingRequestId === request.requestId}
                onClick={() =>
                  handleApproveReject(request.postId, request.requestId, 'Rejected')
                }
              >
                Reject
              </Button>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default PendingRequests;
