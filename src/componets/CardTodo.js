
import IconStar from '../images/icon-star.svg'
function CardTodo (props) {
  const { todo } = props
  return (
    <div className="card-todo flex justify-between p-5 border border-slate-200 hover:shadow-xl items-center rounded transition-all ease-linear delay-300">
      <div className="flex flex-col w-full">
        <div className="flex justify-between align-middle  mb-3">
          <h5 className="text-xl font-bold">{todo.name}</h5>
          { todo.important && <img src={IconStar} alt="icon-star" /> }
        </div>
        <p className="text-gray-500">
          { todo.description }
        </p>
      </div>
    </div>
    );

}

export default CardTodo;
