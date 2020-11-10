import React from "react";
import "./EditCourse.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { getCourseById, getCourseCategories, updateCourse } from "../../../actions/courseAction";
import { toast } from 'react-toastify';




const EditCourse = (props) => {
    const [course, setCourse] = React.useState({});
    const [courseCategories, setCourseCategories] = React.useState([]);
    const errors = {}
    const handleInputChange = e => {
        const { name, value } = e.target;
        setCourse({ ...course, [name]: value })
    }


    const onSubmit = () => {
        updateCourse(props.match.params.courseId, course, (response) => {
            if (response && response.status == "OK") {
                toast.success(response.message, {
                    position: toast.POSITION.TOP_RIGHT
                });
            } else {
                toast.error(response.message || response.msg, {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
        })
    };

    React.useEffect(() => {
        getCourseById(props.match.params.courseId, (response) => {
            if (response && response.status == "OK") {
                setCourse(response.data.item)
            }
        })
        getCourseCategories((response) => {
            if (response && response.status == "OK") {
                setCourseCategories(response.data)
            }
        })
    }, []);

    console.log("course", course)

    return (
        <div className="changefm-container col-md-6 col-lg-5 mx-auto">
            <h4>Edit Course</h4>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="name" value={course.name} className={`form-control ${errors.name ? 'is-invalid' : ''}`} onChange={handleInputChange} />
                    <div className="invalid-feedback">{errors.name?.message}</div>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input type="text" name="description" value={course.description} className={`form-control ${errors.description ? 'is-invalid' : ''}`} onChange={handleInputChange} />
                    <div className="invalid-feedback">{errors.description?.message}</div>
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input type="text" name="price" value={course.price} className={`form-control ${errors.price ? 'is-invalid' : ''}`} onChange={handleInputChange} />
                    <div className="invalid-feedback">{errors.price?.message}</div>
                </div>
                <div className="form-group">
                    <label>Duration (in hours)</label>
                    <input type="text" name="duration" value={course.duration} className={`form-control ${errors.duration ? 'is-invalid' : ''}`} onChange={handleInputChange} />
                    <div className="invalid-feedback">{errors.duration?.message}</div>
                </div> <div className="form-group">
                    <label>Slug</label>
                    <input type="text" name="slug" value={course.slug} className={`form-control ${errors.slug ? 'is-invalid' : ''}`} onChange={handleInputChange} />
                    <div className="invalid-feedback">{errors.slug?.message}</div>
                </div> <div className="form-group">
                    <label>Total Classes</label>
                    <input type="text" name="total_classes" value={course.total_classes} className={`form-control ${errors.total_classes ? 'is-invalid' : ''}`} onChange={handleInputChange} />
                    <div className="invalid-feedback">{errors.total_classes?.message}</div>
                </div>
                <div className="form-group">
                    <label>Course Category</label>
                    <select type="select" multiple="true" name="course_category_id" className={`form-control ${errors.course_category_id ? 'is-invalid' : ''}`} onChange={handleInputChange} >
                        {courseCategories.map(el => {
                            return <option value={el._id}>{el.name}</option>
                        })}

                    </select>
                    <div className="invalid-feedback">{errors.course_category_id?.message}</div>
                </div>
                <div className="btn-cont form-group">
                    <input type="submit" value="Update Course" />
                </div>
            </form>
        </div>
    );
};

export default EditCourse;