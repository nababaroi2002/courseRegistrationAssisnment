import PropTypes from 'prop-types'
import { FiBookOpen } from 'react-icons/fi';
import { LuDollarSign } from 'react-icons/lu';

const Course = ({ course,handleAddToBookmarks, handleAddToTotalCredit, handleAddtoTotalPrice, handleAddToRemainingCredit}) => {
    const { img, title, description, price, credit } = course;
    const handleAddtoFunctions = (course, credit, price, title) =>{
        console.log(course, credit);
        handleAddToBookmarks(course, credit);
        handleAddToTotalCredit(credit, title);
        handleAddtoTotalPrice(price, credit, title);
        handleAddToRemainingCredit(credit, title)
    }
    return (
        <div className='flex flex-col gap-4 p-4 bg-white rounded-lg'>
            <img src={img} alt="" />
            <h3 className='text-md md:text-lg lg:text-lg font-bold capitalize'>{title}</h3>
            <p className='text-sm font-normal'>{description}</p>
            <div className='flex flex-col md:flex-row lg:flex-row gap-4 md:gap-0 lg:gap-0 justify-between items-center'>
            <div className='flex gap-2 items-center'>
                <LuDollarSign className='text-gray-500'></LuDollarSign>
                <p className='text-base font-medium text-gray-500 capitalize'>price: {price}</p>                
            </div>
            <div className='flex gap-2 items-center'>
            <FiBookOpen className='text-gray-500'></FiBookOpen>
            <p className='text-base font-normal text-gray-500 capitalize'>credit: {credit}</p>
            </div>
            </div>
            <button onClick={()=>handleAddtoFunctions(course,credit,price, title)} className='text-lg text-white font-semibold py-2 rounded-md text-center w-full bg-[#2F80ED]'>select</button>
        </div>
    );
};
Course.propTypes = {
    course: PropTypes.object,
    handleAddToBookmarks: PropTypes.func,
    handleAddToTotalCredit: PropTypes.func,
    handleAddtoTotalPrice: PropTypes.func,
    handleAddToRemainingCredit: PropTypes.func
}

export default Course;