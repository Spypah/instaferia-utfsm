import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    maxWidth: 400,
    color: theme.palette.text.primary,
  }));

export const Comment = ({img, msg}) => {
    return (
        <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
          
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
                <Avatar>
                    <img
                        alt="."
                        src={img}
                        width="100%"
                        height="100%"
                    />{' '}
                </Avatar>
              </Grid>
              <Grid item xs>
              <StyledPaper
            sx={{
              my: 1,
              mx: 'auto',
              p: 2,
            }}
          >
                <Typography>{msg}</Typography>
          </StyledPaper>
              </Grid>
            </Grid>
        </Box>
      );
};

export default Comment;