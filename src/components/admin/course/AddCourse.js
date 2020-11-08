import React from "react";
import "./EditCourse.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { getCourseCategories, addCourse } from "../../../actions/courseAction";
import { toast } from 'react-toastify';




const AddCourse = (props) => {
    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('Name is required'),
        description: Yup.string()
            .required('Description is required')
            .min(2, 'Description must be at least 20 characters'),
        price: Yup.string()
            .required('Price is required'),
        duration: Yup.string()
            .required('Duration is required'),
        course_category_id: Yup.array()
            .required('Course Category is required'),
    });
    const { register, handleSubmit, reset, errors } = useForm({
        resolver: yupResolver(validationSchema)
    });
    const onSubmit = (data) => {
        addCourse(data, (response) => {
            if (response && response.status == "OK") {
                toast.success(response.message, {
                    position: toast.POSITION.TOP_RIGHT
                });
                props.history.push("/courses");
            } else {
                toast.error(response.message || response.msg, {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
        })
    };

    return (
        <div className="changefm-container col-md-6 col-lg-5 mx-auto">
            <h4>New Course</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="name" className={`form-control ${errors.name ? 'is-invalid' : ''}`} ref={register} />
                    <div className="invalid-feedback">{errors.name?.message}</div>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input type="text" name="description" className={`form-control ${errors.description ? 'is-invalid' : ''}`} ref={register} />
                    <div className="invalid-feedback">{errors.description?.message}</div>
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input type="text" name="price" className={`form-control ${errors.price ? 'is-invalid' : ''}`} ref={register} />
                    <div className="invalid-feedback">{errors.price?.message}</div>
                </div>
                <div className="form-group">
                    <label>Duration (in hours)</label>
                    <input type="text" name="duration" className={`form-control ${errors.duration ? 'is-invalid' : ''}`} ref={register} />
                    <div className="invalid-feedback">{errors.duration?.message}</div>
                </div> <div className="form-group">
                    <label>Slug</label>
                    <input type="text" name="slug" className={`form-control ${errors.slug ? 'is-invalid' : ''}`} ref={register} />
                    <div className="invalid-feedback">{errors.slug?.message}</div>
                </div> <div className="form-group">
                    <label>Total Classes</label>
                    <input type="text" name="total_classes" className={`form-control ${errors.total_classes ? 'is-invalid' : ''}`} ref={register} />
                    <div className="invalid-feedback">{errors.total_classes?.message}</div>
                </div>
                <div className="form-group">
                    <label>Course Category</label>
                    <select type="select" multiple="true" name="course_category_id" className={`form-control ${errors.course_category_id ? 'is-invalid' : ''}`} ref={register} >
                        {props.courseCategories.map(el => {
                            return <option value={el._id}>{el.name}</option>
                        })}

                    </select>
                    <div className="invalid-feedback">{errors.course_category_id?.message}</div>
                </div>
                <div className="btn-cont form-group">
                    <input type="submit" value="Save Course" />
                </div>
            </form>
        </div>
    );
};

export default AddCourse;