import React from "react";
import "./ChangePassword.scss";
import { useForm } from "react-hook-form";

const ChangePassword = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
      console.log('ddd')};
  return (
    <div className="changefm-container col-md-6 col-lg-5 mx-auto">
      <h4>Change Password</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div class="form-group">
          <label>New Password</label>
          <input type="text" name="newPassword" class="form-control" ref={register({ required: true })} />
          {errors.newPassword && <span className="form-error">This field is required</span>}
        </div>
        <div class="form-group">
          <label>Confirm Password</label>
          <input type="password" name="confirmPassword" class="form-control" ref={register({ required: true })} />
          {errors.confirmPassword && <span className="form-error">This field is required</span>}
        </div>
        <div class="btn-cont form-group">
          <input type="submit" value="Change Password"/>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
