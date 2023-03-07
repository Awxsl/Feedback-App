import { useContext } from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import FeedBackItem from './FeedbackItem'
import FeedbackContext from '../context/FeedbackContext'
import Spinner from './shared/Spinner'

function FeedbackList() {
  const {feedback, isLoading} = useContext(FeedbackContext)

  if ((!feedback || feedback.length === 0) && !isLoading) {
    return <p>No Feedback Yet!</p>
  }

  if(isLoading) {
    return <Spinner/>
  }

  return (
    <div className='feedback-list'>
        <AnimatePresence>
          {feedback.map((item) => (
              <motion.div key={item.id} initial={{scale: 0, opacity: 0}} animate={{scale: 1, opacity: 1}} exit={{scale: 0, opacity: 0}}>
                <FeedBackItem key={item.id} item={item}/>
              </motion.div>
          ))}
        </AnimatePresence>
    </div>
  )

  //   return (
  //   <div className='feedback-list'>
  //       {feedback.map((item) => (
  //           <FeedBackItem key={item.id} item={item} handleDelete={handleDelete} />
  //       ))}
  //   </div>
  // )
}


export default FeedbackList