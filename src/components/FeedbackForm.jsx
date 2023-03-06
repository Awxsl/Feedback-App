import { useState } from 'react'
import React from 'react'
import Card from './shared/Card'
import Button from './shared/Button'

function FeedbackForm() {

    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')


    const handleTextChange = (e) => {
        setText(e.target.value)
        if(text === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if(message !== '' && text.trim().length <= 10) {
            setBtnDisabled(true)
            setMessage('Text must be at least 10 characters')
        } else {
            setBtnDisabled(false)
            setMessage(null)
        }
        
    }

  return (
    <Card>
        <form>
            <h2>How would you rate your service with us?</h2>
            {/* TODO: Rating select component */}
            <div className="input-group">
                <input onChange={handleTextChange} type="text" placeholder='Write a review'/>
                <Button type='submit' isDiesabled={btnDisabled}>Send</Button>
            </div>
            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm