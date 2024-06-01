import { useEffect, useState } from "react"
import Course from "../Course/Course"
import PropTypes from 'prop-types'

const Courses = ({handleAddToBookmarks,handleAddToTotalCredit, handleAddtoTotalPrice, handleAddToRemainingCredit}) => {
  const [courses, setCourses] = useState([])
  useEffect(() => {
    fetch('course.json')
      .then(res => res.json())
      .then(data => setCourses(data))
  }, [])
  return (
    <div className='flex flex-col gap-10 w-2/3 md:w-2/3 lg:w-3/4 mx-auto'>
      <h3 className="text-2xl font-bold text-gray-800 capitalize">courses</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          courses.map(course => <Course key={course.id} course={course} handleAddToBookmarks={handleAddToBookmarks} handleAddToTotalCredit={handleAddToTotalCredit} handleAddtoTotalPrice={handleAddtoTotalPrice} handleAddToRemainingCredit={handleAddToRemainingCredit}></Course>)
        }
      </div>
    </div>
  )
}

Courses.propTypes = {
  handleAddToBookmarks: PropTypes.func,
  handleAddToTotalCredit: PropTypes.func,
  handleAddtoTotalPrice: PropTypes.func,
  handleAddToRemainingCredit: PropTypes.func
}

export default Courses