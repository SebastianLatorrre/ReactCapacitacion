import Encabezado from "./components/Encabezado";
import Section from "./components/Section";

import "../src/styles/style.scss";
import { useState } from "react";
import { getTodos } from "./service/todoService";
import { TareaA } from "./types/Tarea";
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
    <>
      <Encabezado title={"Trabajo REACT"} placeholder={"Añade tu tarea"} textButton={"Añadir"}>
        <Section buttonTask="ELIMINAR" tareas={tareas} deletTask={deletTask} />
      </Encabezado>
    </>
  );
}

export default App;
