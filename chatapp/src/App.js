import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
      return (
            <ChatEngine
                  height = "100vh"
                  projectID = "f7af689a-55ef-49a7-bbd5-237c264f5cac"
                  userName = "technician_faysal"
                  userSecret = "technici@nG@dget"
                  renderChatFeed = {(chatAppProps) => < ChatFeed  {...chatAppProps} />}
            />
      );
}

export default App;