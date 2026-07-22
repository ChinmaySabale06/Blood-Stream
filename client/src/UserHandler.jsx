import React, { useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';
import api from './lib/api';

// This component handles saving a new Clerk user to your database.
// You should place it in your app's main layout or App.js file.
const UserHandler = () => {
  // `useUser` is a hook provided by Clerk to access user information.
  // `isLoaded` is true when the user object has been loaded.
  // `user` is the object containing the signed-in user's data.
  const { user, isLoaded } = useUser();

  // The `useEffect` hook runs after the component renders.
  useEffect(() => {
    // We check if the user data is loaded and a user is signed in.
    if (isLoaded && user) {
      // Define an asynchronous function to handle the API call.
      const saveUserToDatabase = async () => {
        // Prepare the data to be sent to your backend.
        const userData = {
          // Get the primary email address from the user object.
          email: user.emailAddresses[0].emailAddress,
          // Assign a role. This can be dynamic based on your app's logic.
          // clerkId is derived server-side from the verified session token.
          role: 'hospital',
        };

        try {
          const response = await api.post('/api/save-user', userData);

          // Log the successful response from the server.
          console.log('User saved successfully!', response.data);
        } catch (error) {
          // Log any errors that occur during the API call.
          console.error('Error saving user:', error.response ? error.response.data : error.message);
        }
      };

      // Call the function to save the user data.
      saveUserToDatabase();
    }
  }, [isLoaded, user]); // The effect re-runs only when `isLoaded` or `user` changes.

  return null; // This component doesn't render any UI.
};

export default UserHandler;
