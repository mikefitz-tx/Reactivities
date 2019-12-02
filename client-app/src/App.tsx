import React from 'react';
import logo from './logo.svg';
import {Header, Icon} from 'semantic-ui-react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
        <Header as='h2'>
          <Icon name='users'/>
          <Header.Content>Reactivities</Header.Content>
        </Header>
    </div>
  );
}

export default App;
