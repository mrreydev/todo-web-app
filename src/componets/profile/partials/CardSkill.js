function CardSkill (props) {
  const { skill } = props
  return (
    <div className="card-skill flex justify-between p-5 border border-slate-200 hover:shadow-xl items-center rounded
    transition-all ease-linear delay-300">
      <div className="flex flex-col">
        <h5 className="text-xl font-bold mb-3">{skill.name}</h5>
        <span className="rounded inline-block w-max px-2 py-1 bg-indigo-700 text-white text-base">{skill.rating}</span>
      </div>
      <img src={skill.img} alt="icon-skill" className="w-20"/>
    </div>
  );
}

export default CardSkill;
