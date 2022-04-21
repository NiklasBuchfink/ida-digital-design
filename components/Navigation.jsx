import Link from 'next/link'

export default function Navigation() {
  const navdata = [
    {
      text: "Day 1",
      route: "/process/day1"
    },
    {
      text: "Day 2",
      route: "/process/day2"
    },
  ]

  return (
    <div className="navigation">
      <ul className="flex gap-2">
        {navdata.map((link,index) =>
          <li key={link.route}><Link href={link.route}>{link.text}</Link></li>
        )}
      </ul>
    </div>
  )
}