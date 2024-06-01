import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
    const {title} = bookmark
  return (
    <div className='list-decimal'>
        <li className='text-md font-medium text-gray-700'>{title}</li>
    </div>
  )
}

Bookmark.propTypes = {
    bookmark: PropTypes.object
}

export default Bookmark