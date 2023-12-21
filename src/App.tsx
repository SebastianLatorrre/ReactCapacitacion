
import Encabezado from './components/Encabezado'
import Section from './components/Section'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Encabezado 
      title={'Trabajo REACT'} 
      placeholder={'Añade tu tarea'} 
      textButton={'Añadir'}>
      <Section 
      textTask='Generacion de componentes en React'
      buttonTask='Añadir'/>
      <Section 
      textTask='Generacion de componentes en React'
      buttonTask='Añadir'/>
      <Section 
      textTask='Generacion de componentes en React'
      buttonTask='Añadir'/>
      </Encabezado>
      
    </>
  )
}

export default App
