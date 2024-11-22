import dayjs from 'dayjs';
import { useState } from 'react';

export default function useComments() {
    const [comments, setComments] = useState(() => {
        const storedComments = localStorage.getItem('comments')
        if (!storedComments) return []
        return JSON.parse(storedComments)
    })
    
    const addComment = ({ email, comment }) => {
    const id = Math.floor(Math.random() * 1000000)
    const time = dayjs().format('DD/MM/YYYY hh:mm A')
    const newComment = { id, email, comment, time }
        setComments(state => {
            const newState = [...state, newComment]
            localStorage.setItem('comments', JSON.stringify(newState))
            return newState
        })
    }

    const removeComment = (id) => {
        setComments(state => {
            const newState = state.filter(comment => comment.id !== id)
            localStorage.setItem('comments', JSON.stringify(newState))
            return newState
        })
    }

    return {comments, addComment, removeComment}
}