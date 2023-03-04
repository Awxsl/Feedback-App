import React from 'react'
import PropTypes from 'prop-types'
import FeedBackItem from './FeedbackItem'

function FeedbackList({feedback}) {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet!</p>
  }
    return (
    <div className='feedback-list'>
        {feedback.map((item) => (
            <FeedBackItem item={item} />
        ))}
    </div>
  )
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