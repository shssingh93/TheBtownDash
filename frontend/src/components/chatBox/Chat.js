import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ChatIcon from '@material-ui/icons/Chat';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import Alert from '@material-ui/lab/Alert';

const styles = {
  chatContainer: {
    position: 'fixed',
    bottom: 20,
    right: 20,
    zIndex: 1000,
  },
  chatIcon: {
    backgroundColor: '#FFC300',
    color: '#ffffff',
    borderRadius: '50%',
  },
  chatWindow: {
    position: 'absolute',
    bottom: 60,
    right: 0,
    width: 300,
    height: 400,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: 10,
  },
  chatMessages: {
    height: '80%',
    overflowY: 'auto',
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: '10px 10px 0px 0px',
  },
  chatInput: {
    display: 'flex',
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#ffffff',
    borderRadius: '0px 0px 10px 10px',
  },
};

function Chat({ classes }) {
  const [showChat, setShowChat] = useState(false);

  const handleChatIconClick = () => {
    setShowChat(!showChat);
  };

  // Sample messages
  const messages = [
    { type: 'received', text: 'Hello! How can I help you?' },
  ];

  return (
    <div className={classes.chatContainer}>
      {showChat && (
        <Paper className={classes.chatWindow}>
          <div className={classes.chatMessages}>
            {messages.map((message, index) => (
              <Alert
                key={index}
                severity={message.type === 'received' ? 'info' : 'success'}
                style={{ borderRadius: 5, marginBottom: 5 }}
              >
                {message.text}
              </Alert>
            ))}
          </div>
          <div className={classes.chatInput}>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              placeholder="Type your message"
              style={{ borderRadius: 25 }}
            />
            <IconButton>
              <SendIcon />
            </IconButton>
          </div>
        </Paper>
      )}
      <IconButton className={classes.chatIcon} onClick={handleChatIconClick}>
        <ChatIcon />
      </IconButton>
    </div>
  );
}

export default withStyles(styles)(Chat);