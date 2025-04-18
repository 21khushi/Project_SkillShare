import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Avatar,
  TextField,
  Button,
  Paper,
  Grid2,
  Input,
  Box,
  LinearProgress,
  Card,
  CardContent,
  MenuItem,
  Select,
  FormControl,
  InputLabel
} from '@mui/material';
import { LinkedIn, GitHub } from '@mui/icons-material'; // Social icons
import useStyles from './styles'; // Assuming useStyles is correctly implemented

const Profile = () => {
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'))?.result;
  const [formData, setFormData] = useState({
    name: '',
    bio: '',
    skills: [],
    studyPreferences: '',
    image: '', 
    education: '',
    location: '',
    contact: '',
    occupation: '',  // Added occupation field
    socialLinks: {
      linkedin: '',
      github: '',
    },
  });

  const [profileCompletion, setProfileCompletion] = useState(0);
  const [saveStatus, setSaveStatus] = useState(''); // For profile save status

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        bio: user.bio || '',
        skills: user.skills || [],
        studyPreferences: user.studyPreferences || '',
        image: user.image || '',
        education: user.education || '',
        location: user.location || '',
        contact: user.contact || '',
        occupation: user.occupation || '',  // Initial occupation value
        socialLinks: user.socialLinks || {},
      });
    }
  }, [user]);

  useEffect(() => {
    const totalFields = 9; // Now includes the occupation field
    let filledFields = 0;

    if (formData.name) filledFields++;
    if (formData.bio) filledFields++;
    if (formData.skills.length > 0) filledFields++;
    if (formData.studyPreferences) filledFields++;
    if (formData.image) filledFields++;
    if (formData.education) filledFields++;
    if (formData.location) filledFields++;
    if (formData.contact) filledFields++;
    if (Object.values(formData.socialLinks).some((link) => link)) filledFields++;
    if (formData.occupation) filledFields++;  // Check if occupation is filled

    const completionPercentage = Math.round((filledFields / totalFields) * 100);
    setProfileCompletion(completionPercentage);
  }, [formData]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSkillChange = (e) => {
    const newSkills = e.target.value.split(',').map((skill) => skill.trim());
    setFormData({ ...formData, skills: newSkills });
  };

  const handleSocialLinkChange = (e) => {
    setFormData({
      ...formData,
      socialLinks: { ...formData.socialLinks, [e.target.name]: e.target.value },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate save process
    if (profileCompletion === 100) {
      setSaveStatus('Profile Updated Successfully');
    } else {
      setSaveStatus('Profile Pending');
    }
    console.log('Updated Profile:', formData);
    // Add logic to dispatch the updated data or save to a database
  };

  return (
    <Container maxWidth="md" sx={{ minHeight: '100vh', padding: 3 }}>
      <Paper className={classes.paper} elevation={3} sx={{ width: '100%', padding: 3 }}>
        <Grid2 container direction="column" alignItems="center" spacing={2}>
          <Grid2 item>
            <Avatar
              className={classes.avatar}
              src={formData.image || '/default-avatar.png'}
              sx={{ width: 120, height: 120 }}
            >
              {!formData.image && user?.name?.charAt(0).toUpperCase()}
            </Avatar>
          </Grid2>
          <Grid2 item>
            {/* Display logged-in user's name dynamically */}
            <Typography variant="h5" gutterBottom color="black">
              {user?.name}
            </Typography>
          </Grid2>
        </Grid2>

        <Box marginBottom={2}>
          <Typography variant="body2" color="textSecondary" align="center">
            Profile Completion
          </Typography>
          <LinearProgress variant="determinate" value={profileCompletion} sx={{ marginTop: 1 }} />
          <Typography variant="body2" align="center" color="black">
            {profileCompletion}% Completed
          </Typography>
        </Box>

        {/* Display Save Status */}
        <Box marginBottom={2}>
          <Typography variant="body1" color={saveStatus === 'Profile Updated Successfully' ? 'green' : 'orange'} align="center">
            {saveStatus}
          </Typography>
        </Box>

        <form className={classes.form} onSubmit={handleSubmit}>
          {/* Image Upload */}
          <Box display="flex" flexDirection="column" alignItems="center" marginBottom={2}>
            <Button variant="contained" component="label" color="primary">
              Upload Image
              <Input
                type="file"
                onChange={handleImageChange}
                hidden
                accept="image/*"
              />
            </Button>
          </Box>

          {/* Name */}
          <TextField
            name="name"
            label="Name"
            fullWidth
            value={formData.name}
            onChange={handleChange}
            margin="normal"
            sx={{
              backgroundColor: '#F8D4E1', // Light pink background
              border: '2px solid #FFD700', // Dark yellow border
              '& .MuiInputBase-input': {
                color: 'black', // Black text
              }
            }}
          />

          {/* Bio */}
          <TextField
            name="bio"
            label="Bio"
            fullWidth
            multiline
            rows={4}
            value={formData.bio}
            onChange={handleChange}
            margin="normal"
            sx={{
              backgroundColor: '#F8D4E1', // Light pink background
              border: '2px solid #FFD700', // Dark yellow border
              '& .MuiInputBase-input': {
                color: 'black', // Black text
              }
            }}
          />

          {/* Skills */}
          <TextField
            name="skills"
            label="Skills (comma separated)"
            fullWidth
            value={formData.skills.join(', ')}
            onChange={handleSkillChange}
            margin="normal"
            sx={{
              backgroundColor: '#F8D4E1', // Light pink background
              border: '2px solid #FFD700', // Dark yellow border
              '& .MuiInputBase-input': {
                color: 'black', // Black text
              }
            }}
          />

          {/* Education */}
          <TextField
            name="education"
            label="Educational Background"
            fullWidth
            value={formData.education}
            onChange={handleChange}
            margin="normal"
            sx={{
              backgroundColor: '#F8D4E1', // Light pink background
              border: '2px solid #FFD700', // Dark yellow border
              '& .MuiInputBase-input': {
                color: 'black', // Black text
              }
            }}
          />

          {/* Location */}
          <TextField
            name="location"
            label="Location"
            fullWidth
            value={formData.location}
            onChange={handleChange}
            margin="normal"
            sx={{
              backgroundColor: '#F8D4E1', // Light pink background
              border: '2px solid #FFD700', // Dark yellow border
              '& .MuiInputBase-input': {
                color: 'black', // Black text
              }
            }}
          />

          {/* Contact Information */}
          <TextField
            name="contact"
            label="Contact Info"
            fullWidth
            value={formData.contact}
            onChange={handleChange}
            margin="normal"
            sx={{
              backgroundColor: '#F8D4E1', // Light pink background
              border: '2px solid #FFD700', // Dark yellow border
              '& .MuiInputBase-input': {
                color: 'black', // Black text
              }
            }}
          />

          {/* Occupation Dropdown */}
          <FormControl fullWidth margin="normal">
            <InputLabel>Occupation</InputLabel>
            <Select
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              label="Occupation"
              sx={{
                backgroundColor: '#F8D4E1', // Light pink background
                border: '2px solid #FFD700', // Dark yellow border
                color: 'black', // Black text
              }}
            >
              <MenuItem value="Student">Student</MenuItem>
              <MenuItem value="Employed">Employed</MenuItem>
            </Select>
          </FormControl>

          {/* Social Links */}
          <Card sx={{ marginTop: 2, backgroundColor: '#FFF' }}>
            <CardContent>
              <Typography variant="h6" color="black">Social Links</Typography>
              <TextField
                name="linkedin"
                label="LinkedIn URL"
                fullWidth
                value={formData.socialLinks.linkedin}
                onChange={handleSocialLinkChange}
                margin="normal"
                sx={{
                  backgroundColor: '#F8D4E1', // Light pink background
                  border: '2px solid #FFD700', // Dark yellow border
                  '& .MuiInputBase-input': {
                    color: 'black', // Black text
                  }
                }}
              />
              <TextField
                name="github"
                label="GitHub URL"
                fullWidth
                value={formData.socialLinks.github}
                onChange={handleSocialLinkChange}
                margin="normal"
                sx={{
                  backgroundColor: '#F8D4E1', // Light pink background
                  border: '2px solid #FFD700', // Dark yellow border
                  '& .MuiInputBase-input': {
                    color: 'black', // Black text
                  }
                }}
              />
            </CardContent>
          </Card>

          {/* Submit Button */}
          <Box display="flex" justifyContent="center" marginTop={3}>
            <Button type="submit" variant="contained" color="primary">
              Save Changes
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default Profile;
