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

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {}, 
        edit: false
    })

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    const updateFeedback = (id, updatedItem) => {
        setFeedback(feedback.map((item) => (item.id === id ? { ...item, ...updatedItem} : item)))
    }


    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit, 
        deleteFeedback, 
        addFeedback, 
        editFeedback, 
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext