
import "../styles/style.css";

interface Props {
  textTask: string;
  buttonTask: string;
}
const Section = ({textTask, buttonTask }: Props) => {
  return (
    <div className="todo-list">
      <div className="task">
        <input type="checkbox" />
        <label>{textTask}</label>
        <button className="button_add taskButton">{buttonTask}</button>
      </div>
      <div className="custom-hr"></div>
    </div>
  );
};

export default Section;
