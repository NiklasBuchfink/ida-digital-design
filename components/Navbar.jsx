import Link from 'next/link'

export default function Navbar() {
  const navdata = [
    {
      text: "Home",
      route: "/"
    },
    {
      text: "Task 1",
      route: "/process/task1"
    },
    {
      text: "Task 2",
      route: "/process/task2"
    },
    {
      text: "Task 3",
      route: "/process/task3"
    },
    {
      text: "Task 4",
      route: "/process/task4"
    },
    {
      text: "Workshop",
      route: "/workshop"
    },
  ]

  return (
    <div className="navigation m-4">
      <ul className="flex gap-4">
        {navdata.map(link =>
          <li className="hover:underline" key={link.route}><Link href={link.route}>{link.text}</Link></li>
        )}
      </ul>
    </div>
  )
}