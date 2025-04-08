import React, { useEffect } from 'react';
import { Container, Typography, Button, Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getPendingRequests } from '../../actions/posts';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("profile"));
  const pendingRequests = useSelector(state => state.pendingRequests || []);

  useEffect(() => {
    if (user?.result?._id) {
      dispatch(getPendingRequests(user.result._id));
    }
  }, [dispatch, user]);

  return (
    <Container>
      <Typography variant="h4" align="center">Dashboard</Typography>

      {/* ✅ Pending Requests Section */}
      {pendingRequests.length > 0 && (
        <Paper style={{ padding: "15px", marginTop: "20px" }}>
          <Typography variant="h6">Pending Access Requests</Typography>
          {pendingRequests.map((post) => (
            <Button
              key={post._id}
              variant="contained"
              onClick={() => navigate(`/pending-requests/${post._id}`)}
            >
              {post.title} - {post.accessRequests.length} Request(s)
            </Button>
          ))}
        </Paper>
      )}
    </Container>
  );
};

export default Dashboard;
