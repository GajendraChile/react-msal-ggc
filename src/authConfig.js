export const msalConfig = {
    auth: {
      clientId: "6dff84ac-d18b-4ca1-a033-c7833f16615a",
      authority: "https://login.microsoftonline.com/8ee0a592-63cf-4f0b-b322-f834804baf2c",
      redirectUri: "http://localhost:3000",
    },
    cache: {
      cacheLocation: "localStorage", // This configures where your cache will be stored
      storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
  };
  
  // Add scopes here for ID token to be used at Microsoft identity platform endpoints.
  export const loginRequest = {
   scopes: ["User.Read"]
  };