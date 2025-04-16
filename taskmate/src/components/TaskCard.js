import "./taskCard.css"
import styles from "./TaskCard.module.css"

export const TaskCard = ({ task, handleDelete, info }) => {
  return (
    <div className="taskcard">
      <li className={`${task.completed ? "completed" : "incomplete"}`}>
        <span className={styles.title} >{task.id} - {task.name} - {info}</span>
        <button className="delete" onClick={() => handleDelete(task.id)}>Delete</button>
      </li>
    </div>
  )
}
