import React, { useState } from 'react';
import {
  Box, Typography, Card, CardContent, Grid, Button, List, ListItem, 
  ListItemText, ListItemAvatar, Avatar, Chip, IconButton, Badge
} from '@mui/material';
import { IconBell, IconMail, IconCheck, IconTrash, IconSettings } from '@tabler/icons-react';
import PageContainer from '../../../../modernize-dashboard/src/components/container/PageContainer';

const NotificationsMain = () => {
  const [notifications] = useState([
    { id: 1, title: 'New Order Received', message: 'Order #ORD-001 from ABC Corp', type: 'order', time: '2 minutes ago', read: false },
    { id: 2, title: 'Payment Received', message: 'Invoice INV-001 has been paid', type: 'payment', time: '1 hour ago', read: false },
    { id: 3, title: 'Task Deadline', message: 'Website redesign task due tomorrow', type: 'task', time: '3 hours ago', read: true },
    { id: 4, title: 'New Lead', message: 'New lead from contact form', type: 'lead', time: '1 day ago', read: true }
  ]);

  const getTypeColor = (type) => {
    switch (type) {
      case 'order': return 'primary';
      case 'payment': return 'success';
      case 'task': return 'warning';
      case 'lead': return 'info';
      default: return 'default';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'order': return '🛒';
      case 'payment': return '💰';
      case 'task': return '📋';
      case 'lead': return '👤';
      default: return '🔔';
    }
  };

  return (
    <PageContainer title="Notifications" description="System Notifications Center">
      <Box>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography variant="h4">Notifications</Typography>
          <Button variant="outlined" startIcon={<IconSettings />}>
            Settings
          </Button>
        </Box>

        <Grid container spacing={3} mb={3}>
          <Grid item xs={12} md={3}>
            <Card sx={{ 
              backgroundColor: '#f8f9ff',
              border: 'none',
              boxShadow: 'none',
              borderRadius: 2,
              p: 1
            }}>
              <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2, p: '16px !important' }}>
                <Box sx={{ 
                  backgroundColor: '#e8eaff',
                  borderRadius: '8px',
                  p: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: '40px',
                  height: '40px'
                }}>
                  <Box sx={{ fontSize: '20px', color: '#5a67d8' }}>🔔</Box>
                </Box>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1a202c', mb: 0.5 }}>
                    {notifications.length}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#718096', fontSize: '14px' }}>
                    Total
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card sx={{ 
              backgroundColor: '#fff5f5',
              border: 'none',
              boxShadow: 'none',
              borderRadius: 2,
              p: 1
            }}>
              <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2, p: '16px !important' }}>
                <Box sx={{ 
                  backgroundColor: '#fed7d7',
                  borderRadius: '8px',
                  p: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: '40px',
                  height: '40px'
                }}>
                  <Box sx={{ fontSize: '20px', color: '#e53e3e' }}>❗</Box>
                </Box>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1a202c', mb: 0.5 }}>
                    {notifications.filter(n => !n.read).length}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#718096', fontSize: '14px' }}>
                    Unread
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Card>
          <CardContent>
            <Typography variant="h6" mb={2}>Recent Notifications</Typography>
            <List>
              {notifications.map((notification) => (
                <ListItem key={notification.id} sx={{ border: '1px solid #eee', mb: 1, borderRadius: 1 }}>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: !notification.read ? 'primary.main' : 'grey.300' }}>
                      {getTypeIcon(notification.type)}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Box display="flex" alignItems="center" gap={1}>
                        <Typography variant="subtitle1" sx={{ fontWeight: !notification.read ? 'bold' : 'normal' }}>
                          {notification.title}
                        </Typography>
                        {!notification.read && <Badge color="error" variant="dot" />}
                      </Box>
                    }
                    secondary={
                      <Box>
                        <Typography variant="body2" color="text.secondary">
                          {notification.message}
                        </Typography>
                        <Box display="flex" alignItems="center" gap={1} mt={0.5}>
                          <Chip label={notification.type} color={getTypeColor(notification.type)} size="small" />
                          <Typography variant="caption" color="text.secondary">
                            {notification.time}
                          </Typography>
                        </Box>
                      </Box>
                    }
                  />
                  <Box>
                    <IconButton size="small" color="primary">
                      <IconCheck />
                    </IconButton>
                    <IconButton size="small" color="error">
                      <IconTrash />
                    </IconButton>
                  </Box>
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </Box>
    </PageContainer>
  );
};

export default NotificationsMain;