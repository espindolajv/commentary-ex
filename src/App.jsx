import Form from "./components/Form";
import styles from './styles/App.module.css';
import Comments from "./components/Comments";
import useComments from "./hooks/useComments";

export default function App() {

  const {comments, addComment, removeComment} = useComments()

  return (
    <div className={styles.containerMain}>
      <Form addComment={addComment}/>
      <hr />
      <div>
          {comments.length > 0 ? 
            comments.map(comment => (
              <Comments 
                key={comment.id}
                comment={comment.comment}
                email={comment.email}
                time={comment.time}
                deleteComment={removeComment}
                id={comment.id}
              />
            )): <h3>Be the first to comment!</h3>  
          }
      </div>
    </div>
  )
}