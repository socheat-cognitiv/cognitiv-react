import React from 'react';
import { Redirect } from 'react-router-dom';

const PublicNoMatch = () => {
  return (
    <Redirect to="/login" />
  )
};

export default PublicNoMatch;
