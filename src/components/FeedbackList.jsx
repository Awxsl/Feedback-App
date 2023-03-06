import {motion, AnimatePresence} from 'framer-motion'
import React from 'react'
import PropTypes from 'prop-types'
import FeedBackItem from './FeedbackItem'

function FeedbackList({feedback, handleDelete}) {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet!</p>
  }

  return (
    <div className='feedback-list'>
        <AnimatePresence>
          {feedback.map((item) => (
              <motion.div key={item.id} initial={{scale: 0}} animate={{scale: 1}} whileHover={{scale: 1.05}} exit={{scale: 0}}>
                <FeedBackItem key={item.id} item={item} handleDelete={handleDelete} />
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

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired, 
            rating: PropTypes.number.isRequired
        })
    )
}

export default FeedbackList