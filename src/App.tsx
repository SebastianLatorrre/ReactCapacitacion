import Encabezado from "./components/Encabezado";
import Section from "./components/Section";

import { useState } from "react";
import { getTodos } from "./service/todoService";
import { TareaA } from "./types/Tarea";
import "../src/styles/style.scss";
//preguntar si esto por buenas practicas va en el componente
const todos = JSON.parse(sessionStorage.getItem("todos")!) ||  sessionStorage.setItem("todos", JSON.stringify(getTodos()));

function App() {
  const [tareas, setTareas] = useState<TareaA[]>(todos);
  
  const deletTask = (id: number) => {
    const deletT = tareas.filter(tarea=>tarea.id!==id);
    setTareas(deletT); 
    sessionStorage.setItem("todos", JSON.stringify(deletT));
  };
  return (
      <Encabezado 
        title={"TODO APP"} 
        placeholder={"Añade tu tarea"} 
        textButton={"Añadir"} 
        imgLogoR="src/assets/react.svg"
        imgLogoV="src/assets/vitejs.svg"
        imgLogoT="src/assets/typescript.svg">
        <Section 
          buttonTask="src/assets/biggarbagebin_121980.svg" 
          buttonTaskEdit="src/assets/353430-checkbox-edit-pen-pencil_107516.svg"
          tareas={tareas} 
          deletTask={deletTask} />
      </Encabezado>
  );
}

export default App;
