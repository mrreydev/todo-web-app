
import IconStar from '../images/icon-star.svg'
function CardTodo (props) {
  const { todo } = props

  return (
    <div onClick={props.onClick} className="card-todo flex justify-between p-5 border border-slate-200 hover:shadow-xl items-center rounded cursor-pointer transition-all ease-linear delay-300">
      <div className="flex flex-col w-full">
        <div className="flex justify-between align-middle  mb-3">
          <h5 className="text-xl font-bold truncate">{todo.name}</h5>
          { todo.important && <img src={IconStar} alt="icon-star" /> }
        </div>
        <p className="text-gray-500" style={{
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }
        }>
          { todo.description }
        </p>
      </div>
    </div>
    );

}

export default CardTodo;
