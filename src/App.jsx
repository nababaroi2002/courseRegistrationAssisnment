
import { useState } from 'react'
import './App.css'
import Courses from './Components/Courses/Courses'
import Header from './Components/Header'
import Bookmarks from './Components/Bookmarks/Bookmarks';
function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0.0);
  const [remainingCredit, setRemainingCredit] = useState(20);

  const handleAddToBookmarks = (course, credit) => {
    const existingCourse = bookmarks.find(bookmark => bookmark.title === course.title);
    const newBookmarks = [...bookmarks,course]
    const newRemainingCredit = remainingCredit - credit;
    if(newRemainingCredit >= 0){
      if(!existingCourse){
        setBookmarks(newBookmarks)
      }
    }

  }
  const handleAddToTotalCredit = (credit, title) => {
    const newTotalCredit = totalCredit + credit;
    const existingCourse = bookmarks.find(bookmark => bookmark.title === title);
    
      if (!existingCourse) {
        if (newTotalCredit <= 20) {
          setTotalCredit(newTotalCredit)
        }
        else { alert('you can not have more than 20 credit') }
      }
      return
  }
  const handleAddtoTotalPrice = (price,credit, title) => {
    const newTotalPrice = totalPrice + price;
    const newTotalCredit = totalCredit + credit;
    const fixedNewTotalPrice = parseFloat(newTotalPrice.toFixed(3));
    const existingCourse = bookmarks.find(bookmark => bookmark.title === title);
    if (!existingCourse) {
      if (newTotalCredit <= 20) {
        setTotalPrice(fixedNewTotalPrice);
      }
      return
    }
    return
  }
  const handleAddToRemainingCredit = (credit,title) => {
    const newRemainingCredit = remainingCredit - credit;
    const existingCourse = bookmarks.find(bookmark => bookmark.title === title);
    if (newRemainingCredit >= 0) {
      if(!existingCourse){
      setRemainingCredit(newRemainingCredit)
    }
    return
    }
    else { alert('your doesn;t have sufficient credit hour') }
  }
  return (
    <div>
      <Header></Header>
      <div className='flex flex-col md:flex-row lg:flex-row gap-6 container mx-auto lg:p-10'>
        <Courses handleAddToBookmarks={handleAddToBookmarks} handleAddToTotalCredit={handleAddToTotalCredit} handleAddtoTotalPrice={handleAddtoTotalPrice} handleAddToRemainingCredit={handleAddToRemainingCredit}></Courses>
        <Bookmarks bookmarks={bookmarks} totalCredit={totalCredit} totalPrice={totalPrice} remainingCredit={remainingCredit}></Bookmarks>
      </div>

    </div>
  )
}

export default App
