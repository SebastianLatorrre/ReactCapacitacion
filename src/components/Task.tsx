import { TareaA } from "../types/Tarea";

interface Props {

  tareas: TareaA[];
  buttonTask: string;
  buttonTaskEdit: string;
  deletTask: (id: number) => void;
}
const Task = ({ tareas, deletTask, buttonTask, buttonTaskEdit,  }: Props) => {
  return (
    <>
      {tareas.map((tarea: TareaA) => (
        <div className="task" key={tarea.id}>
          <label className="checkbox-custom">
            <input type="checkbox" />
            <span className="checkmark"></span>
            {tarea.title}
          </label>
          <div className="conten__logos__actions">
            <img
              src={buttonTask}
              alt=""
              className="button delete "
              onClick={() => deletTask(tarea.id)}
            />
            <img src={buttonTaskEdit} alt="" className="button edit" />
          </div>
        </div>
      ))}
    </>
  );
};

export default Task;
