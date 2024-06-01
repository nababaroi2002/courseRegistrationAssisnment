
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({ bookmarks, totalCredit, totalPrice, remainingCredit}) => {
    // console.log(bookmarks);
    // console.log(bookmarks);

    return (

        <div className="flex flex-col gap-4 p-10 mt-[72px] mt h-fit bg-white rounded-lg">
            <h4 className="text-lg font-bold text-[#2F80ED] capitalize">credit hour remaining: {remainingCredit}</h4>
            <hr />
            <h3 className="text-xl font-bold text-gray-800 capitalize">course name</h3>       
                <ol className='flex flex-col gap-4 ml-5'>
                {
                    bookmarks?.map((bookmark, idx) =><Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
                </ol>    
              
            <hr />
            <p className="text-base font-medium text-gray-600">total credit: {totalCredit}</p>
            <hr />
            <p className="text-base font-medium text-gray-600">total price: {totalPrice} $</p>
        </div>


    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    totalCredit: PropTypes.number,
    totalPrice: PropTypes.number,
    remainingCredit: PropTypes.number
}

export default Bookmarks;