import React  from "react";
import "./ChangePassword.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers//yup';
import * as Yup from 'yup';

const ChangePassword = () => {
  const validationSchema = Yup.object().shape({
    oldPassword: Yup.string()
        .required('Old Password required'),
    newPassword: Yup.string()
        .required('Password is required')
        .min(4, 'Password must be at least 6 characters'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
        .required('Confirm Password is required'),
});
const { register, handleSubmit, reset, errors} = useForm({
  resolver: yupResolver(validationSchema)
});
  const onSubmit = (data) => {
      console.log('ddd')
  };
  return (
    <div className="changefm-container col-md-6 col-lg-5 mx-auto">
      <h4>Change Password</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div class="form-group">
          <label>Old Password</label>
          <input type="password" name="oldPassword" className={`form-control ${errors.oldPassword ? 'is-invalid' : ''}`} ref={register} />
          <div className="invalid-feedback">{errors.oldPassword?.message}</div>
        </div>
        <div class="form-group">
          <label>New Password</label>
          <input type="password" name="newPassword" className={`form-control ${errors.newPassword ? 'is-invalid' : ''}`} ref={register} />
          <div className="invalid-feedback">{errors.newPassword?.message}</div>
        </div>
        <div class="form-group">
          <label>Confirm Password</label>
          <input type="password" name="confirmPassword" className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`} ref={register} />
          <div className="invalid-feedback">{errors.confirmPassword?.message}</div>
        </div>
        <div class="btn-cont form-group">
          <input type="submit" value="Change Password"/>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
