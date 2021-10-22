import React from 'react';
import {
  CardHeader,
  CardContent,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Card,
  IconButton,
  Typography,
} from '@mui/material';

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import DeleteIcon from '@mui/icons-material/Delete';

export const FeedbackList = ({ feedbacks, onDeleteFeedback }) => {
  return (
    <>
      <Card>
        <CardHeader title="Отзывы:" />
        <CardContent>
          <List>
            {feedbacks.map((feedback, id) => {
              return (
                <ListItem key={id}>
                  <ListItemAvatar>
                    <Avatar>
                      <PersonOutlineIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={feedback.fullName}
                    secondary={
                      <React.Fragment>
                        <Typography sx={{ display: 'block' }} component="span" variant="body2">
                          {feedback.createdAt}
                        </Typography>
                        {feedback.text}
                      </React.Fragment>
                    }
                  />
                  <IconButton onClick={() => onDeleteFeedback(id)}>
                    <DeleteIcon />
                  </IconButton>
                </ListItem>
              );
            })}
          </List>
        </CardContent>
      </Card>
    </>
  );
};
