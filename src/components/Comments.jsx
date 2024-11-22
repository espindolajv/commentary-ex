import PropTypes from 'prop-types'
import styles from '../styles/App.module.css';

Comments.propTypes = {
    comment: PropTypes.string,
    email: PropTypes.string,
    time: PropTypes.string,
    id: PropTypes.string,
    deleteComment: PropTypes.func
}

export default function Comments({ email, comment, time, deleteComment, id }) {
    return (
        <div className={styles.containerComment}>
           <div className={styles.containerTop}>
                <div>
                    <h3>User: {email}</h3>
                    <p className={styles.hourText}>{time}</p>
                </div>
                <div className={styles.containerBtn}>
                    <button className={styles.btnDelete} onClick={() => deleteComment(id)}></button>
                </div>
           </div>
           <div className={styles.comment}>
                <p>{comment}</p>
           </div>
        </div>
    )
}