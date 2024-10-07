interface Props {
    name: string,
    title: string,
    roles: Array<string>
}

const JobTitle = ({ name, title, roles }: Props) => {
  return (
    <div className="flex flex-col absolute bottom-2 left-5 font-semibold">
        <p className="text-white">{name}</p>
        <p className="text-white">{title}</p>
        <div className="flex gap-x-2">
            {
                roles.length > 0 ? roles.map((value: string, index: number) => (
                    <span className="border px-3 py-2 text-white text-xs rounded-full mt-2" key={index}>{value}</span>
                )) : ""
            }
        </div>
    </div>
  )
}

export default JobTitle;