import React from 'react'
import { useContext } from "react";
import { AuthContext } from '../../context/Auth'

const dashboard = () => {
  const { user } = useContext(AuthContext);
  console.log("user from context==>", user);

  return (
    <div>dashboard</div>
  )
}

export default dashboard