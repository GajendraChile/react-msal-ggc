import logo from './logo.svg';
import './App.css';

import {
  AuthenticatedTemplate,
  useMsal,
  useIsAuthenticated
} from '@azure/msal-react';

import { InteractionStatus, EventType } from '@azure/msal-browser';
import { loginRequest } from './authConfig';
import { useEffect } from 'react';

function App() {
  const isAuthenticated = useIsAuthenticated();
  const { instance, inProgress } = useMsal();

  useEffect(() => {
    const accounts = instance.getAllAccounts();
if (accounts.length > 0) {
  instance.setActiveAccount(accounts[0]);
}
/* else {
  instance.loginRedirect(loginRequest);
} */

/* instance.addEventCallback((event) => {
  // set active account after redirect
  if (event.eventType === EventType.LOGIN_SUCCESS && event.payload.account) {
    const account = event.payload.account;
    instance.setActiveAccount(account);
  }
}, error=>{
  console.log('error', error);
});
*/

else{
// handle auth redired/do all initial setup for msal
instance.handleRedirectPromise().then(authResult=>{
  // Check if user signed in 
  const account = instance.getActiveAccount();
  if(!account){
    // redirect anonymous user to login page 
    instance.loginRedirect(loginRequest);
  }
}).catch(err=>{
  // TODO: Handle errors
  console.log(err);
});
}

console.log('get active account', instance.getActiveAccount());
   },[]);

  return (
    <AuthenticatedTemplate>
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </AuthenticatedTemplate>
  );
}

export default App;
