import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const[feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This is feedback item 1', 
            rating: 6
        },  
        {
            id: 2,
            text: 'This is feedback item 2', 
            rating: 9
        }, 
        {
            id: 3,
            text: 'This is feedback item 3', 
            rating: 1
        }, 
        {
            id: 4,
            text: 'This is feedback item 4', 
            rating: 7
        },       
        {
            id: 5,
            text: 'This is feedback item 5', 
            rating: 4
        }, 
    ])

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    return <FeedbackContext.Provider value={{
        feedback: feedback,
        deleteFeedback, 
        addFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext