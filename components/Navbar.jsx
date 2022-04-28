import Link from 'next/link'

export default function Navbar() {
  const navdata = [
    {
      text: "Home",
      route: "/"
    },
    {
      text: "Day 1",
      route: "/process/day1"
    },
    {
      text: "Day 2",
      route: "/process/day2"
    },
    {
      text: "Day 3",
      route: "/process/day3"
    },
    {
      text: "Day 4",
      route: "/process/day4"
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