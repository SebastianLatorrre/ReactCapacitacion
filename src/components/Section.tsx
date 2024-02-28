import { ReactNode } from "react";
import "../styles/style.scss";
interface Props {
  children: ReactNode;
  // tareas: TareaA[];
  //  buttonTask: string;
  // buttonTaskEdit: string;
  //  deletTask: (id: number) => void;
  
}

const Section = ({children}: Props) => {
  return (
    <div className="todo_list">
      {children}
    </div>
  );
};  

export default Section;
