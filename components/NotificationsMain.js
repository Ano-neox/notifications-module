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
            <Card>
              <CardContent>
                <Typography variant="h6">Total</Typography>
                <Typography variant="h4" color="primary">{notifications.length}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6">Unread</Typography>
                <Typography variant="h4" color="error.main">
                  {notifications.filter(n => !n.read).length}
                </Typography>
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