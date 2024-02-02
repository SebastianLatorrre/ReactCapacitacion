import { TareaA } from "../types/Tarea";
const data: TareaA[] = [
    {
        id: 1,
        title: 'Estudio React',
        complete: true  
    },
    {
        id: 2,
        title: 'Logica',
        complete: false  
    },
    {
        id: 3,
        title: 'Matematicas',
        complete: false  
    },
    {
        id: 4,
        title: 'Ingles IV',
        complete: false  
    },
    {
        id: 5,
        title: 'Prueba',
        complete: false  
    }

];
export const getTodos = () : TareaA[] =>{
    return data;
}