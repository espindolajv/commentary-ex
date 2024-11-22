import { useState } from 'react';
import styles from '../styles/App.module.css';
import PropTypes from 'prop-types'

Form.propTypes = {
    addComment: PropTypes.func
}

export default function Form({ addComment }) {
    const [email, setEmail] = useState('')
    const [comment, setComment] = useState('')

    const noRefresh = (ev) => {
        ev.preventDefault()
        addComment({ email, comment })
        setEmail('')
        setComment('')
    }

    return (
        <div className={styles.containerComment}>
            <form onSubmit={noRefresh} className={styles.formComment}>
                <h2>Comments Section</h2>
                <div>
                    <label htmlFor="email">Email or Username:</label>
                    <input 
                        type="text" 
                        name="email" 
                        id="email" 
                        value={email} 
                        onChange={(ev) => setEmail(ev.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="comentario">Comment:</label>
                    <textarea 
                        name="comentario" 
                        id="comentario" 
                        rows={10} 
                        value={comment}
                        onChange={(ev) => setComment(ev.target.value)}
                        required
                    ></textarea>
                </div>
                <button type='submit'>Send comment</button>
            </form>
        </div>
    )
}