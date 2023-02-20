import React from "react";

import { useForm } from "react-hook-form";

const ChangePassForm = (props) => {
  
  const { register, handleSubmit, reset, formState: { errors, isDirty, isValid } } = useForm({
    defaultValues: {
      oldPassword: '',
      newPassword: ''
    }
  });

  function onSubmit(data) {
    const enteredOldPassword = data.oldPassword;
    const enteredNewPassword = data.newPassword;

    console.log(enteredOldPassword)
    console.log(enteredNewPassword)

    props.onChangePassword({
      oldPassword: enteredOldPassword,
      newPassword: enteredNewPassword
    });

    reset()
  }  
  
  return(
    <div className="pt-10">

      <form onSubmit={handleSubmit(onSubmit)}>
        <p className="pb-4">Change password Form</p>

        <div className="pb-6">
          <label htmlFor='oldPassword' className="pr-6">Old password</label>
          <input type='password' id='oldPassword' {...register("oldPassword", { required: {
            value: true,
            message: 'This field is required'
          }, minLength: {
            value: 7,
            message: 'Minimum length: 7 characters' 
          } })}/>
        </div>

        <div className="pb-6">
          <label htmlFor='newPassword' className="pr-6">New password</label>
          <input type='password' id='newPassword' {...register("newPassword", { required: {
            value: true,
            message: 'This field is required'
          }, minLength: {
            value: 7,
            message: 'Minimum length: 7 characters' 
          } })}/>
        </div>

        <button type="submit" className='outline mt-6 px-4 py-6 bg-slate-700 disabled:bg-gray-400 text-[whitesmoke]' disabled={!isDirty || !isValid}>Change password</button>

      </form>

    </div>
  )
};

export default ChangePassForm;