export default function Day2() { 
  const drinks = [
    {drink: "Sparkling Water", company: "SodaStream", color: "bg-cyan-200", color2: "bg-sky-500", amount: "200", time: "7.5", location: "Dormitory", container: "glass bottle"},
    {drink: "Coffee", company: "Jakobs", color: "bg-yellow-900", color2: "bg-green-900", amount: "400", time: "8", location: "Dormitory", container: "mug"},
    {drink: "Sparkling Water", company: "SodaStream", color: "bg-cyan-200", color2: "bg-sky-500", amount: "200", time: "12.5", location: "HSLU", container: "glass bottle"},
    {drink: "Sparkling Water", company: "SodaStream", color: "bg-cyan-200", color2: "bg-sky-500", amount: "200", time: "14.5", location: "HSLU", container: "glass bottle"},
    {drink: "Ginger Ale", company: "Freeway", color: "bg-amber-300", color2: "bg-green-700", amount:"300", time: "16.5", location: "Dormitory", container: "plastic bottle"},
    {drink: "Sparkling Water", company: "SodaStream", color: "bg-cyan-200", color2: "bg-sky-500", amount: "300", time: "17.5", location: "Dormitory", container: "glass bottle"},
    {drink: "Mate Vodka", company: "El Tony", color: "bg-amber-400", color2: "bg-blue-800", amount: "300", time: "19", location: "Max Bar", container: "glass bottle"},
    {drink: "Beer", company: "Super Bock", color: "bg-yellow-500", color2: "bg-white", amount: "300", time: "19.75", location: "Max Bar", container: "glass bottle"},
    {drink: "Beer", company: "Eichhof", color: "bg-yellow-500", color2: "bg-white", amount: "400", time: "21.75", location: "Parterre Bar", container: "glass"},
    {drink: "Beer", company: "Eichhof", color: "bg-yellow-500", color2: "bg-white", amount: "500", time: "22.16", location: "Parterre Bar", container: "glass"},
    {drink: "Beer", company: "Eichhof", color: "bg-yellow-500", color2: "bg-white", amount: "500", time: "23.33", location: "Bar 59", container: "glass"},
  ]

  return(
    <div>
      <h1 className="mx-auto my-64 w-fit">Drinks of the day</h1>
      <div className="mx-auto w-fit">
        <ul className="flex flex-col gap-32 text-md font-bold color-teal-400 my-64">
          {drinks.map((item,index) =>
            <li key={index}>
              <div className={`p-4 rounded-t-md ${item.color2}`}>
                <div className="text-stone-900 text-center">{item.company}</div>
              </div>
              <div className={`flex flex-col text-stone-900 px-8 py-4 rounded-b-md ${item.color}`}>
                <span className="text-black text-xl mb-4">{item.drink}</span>
                <span>Amount: {item.amount}</span>
                <span>Container: {item.container}</span>
                <span>Location: {item.location}</span>
              </div>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}