import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import Figure from 'react-bootstrap/Figure';
import './Profile.css'

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  console.log(user)
  return (
    isAuthenticated && (
      <Figure>
        <Figure.Image
          src={user.picture}
          alt={user.name}
          width="40px"
          height="40px" />
        <Figure.Caption>
          <h6>{user.name}</h6>
        </Figure.Caption>
      </Figure>
    )
  );
};

export default Profile;