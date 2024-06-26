import './App.css';

import awsconfig from './aws-exports';
import {Authenticator, amplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify'; // Correct import
import awsExports from './aws-exports'; 
import '@aws-amplify/ui-react/styles.css';
import { Storage } from 'aws-amplify';
import FileUpload from './uploadFile'; 


//Amplify.configure(awsconfig);
Amplify.configure(awsExports);
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <amplifySignOut /> 
        <h2>My app content</h2>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
*/
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AmplifySignOut />
        <h2>My app content</h2>
        <FileUpload />
      </header>
    </div>
  );
}

export default withAuthenticator(App);
