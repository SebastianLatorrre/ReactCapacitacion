import { ReactNode, useState } from "react";
import { TareaA } from "../types/Tarea";


interface Props {
  children: ReactNode;
  title: string;
  placeholder: string;
  textButton: string;
  imgLogoR: string;
  imgLogoV: string;
  imgLogoT: string;
  addTask: (tarea: TareaA) => void;
}

const Encabezado = ({
  title,
  placeholder,
  textButton,
  children,
  imgLogoR,
  imgLogoV,
  imgLogoT,
  addTask,
}: Props) => {
  const [nuevaTarea, setNuevaTarea] = useState(""); // Estado para almacenar el valor del campo de entrada

  const handleAddTask = () => {
    if (!nuevaTarea.trim()) return; // Evitar agregar tareas vacías
    addTask({ id: Math.random() , title: nuevaTarea, }); // Llamar a la función addTask con la nueva tarea
    setNuevaTarea(""); // Limpiar el campo de entrada después de agregar la tarea
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNuevaTarea(event.target.value); // Actualizar el estado con el valor del campo de entrada
  };

  return (
    <div className="container">
      <div className="container__cabecera">
        <h1>{title}</h1>
        <div className="cabecera__logos">
          <img className="logos" src={imgLogoR} alt="img React" />
          <img className="logos" src={imgLogoV} alt="img Vite" />
          <img className="logos" src={imgLogoT} alt="img Ty" />
        </div>

        <div className="add-task">
          <input
            type="text"
            placeholder={placeholder}
            value={nuevaTarea}
            onChange={handleChange} // Manejar el evento onChange del campo de entrada
            className="input"
          />
          <button className="add" onClick={handleAddTask}>
            {textButton}
          </button>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Encabezado;
