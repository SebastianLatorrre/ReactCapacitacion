import { ReactNode } from "react";
import "../styles/style.scss";

interface Props {
  children: ReactNode;
  title: string;
  placeholder: string;
  textButton: string;
  imgLogoR: string;
  imgLogoV: string;
  imgLogoT: string;
}
const Encabezado = ({
  title,
  placeholder,
  textButton,
  children,
  imgLogoR,
  imgLogoV,
  imgLogoT,
}: Props) => {
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
          <input type="text" placeholder={placeholder} className="input" />
          <button className="add">{textButton}</button>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Encabezado;
