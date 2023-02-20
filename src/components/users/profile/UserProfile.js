import React, { useState } from "react";

import ChangePassForm from "./ChangePassForm";

const UserProfile = () => {
  const [passwordMsg, setPasswordMsg] = useState("");

  async function changePasswordHandler(passwordData) {
    const response = await fetch('/api/user/change-password', {
      method: 'PATCH',
      body: JSON.stringify(passwordData),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    console.log(data);

    setPasswordMsg(data.message)
  }

  return(
    <div>
      <p>Forgot password?</p>
      {passwordMsg && <div className="pt-6 text-bold text-xl text-red-600">{passwordMsg}</div>}
      <ChangePassForm onChangePassword={changePasswordHandler} />
    </div>
  )
};

export default UserProfile;