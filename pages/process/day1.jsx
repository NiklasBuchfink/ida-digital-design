import Waypoint from "../../components/Waypoint"

export default function Day1() { 
  const waypoints = [
    "Studentenzimmer", "Küche", "Flur", "Treppenhaus", "Seitenstraße", "Tankstelle", "Hauptstraße", "Kantine", "Eventräume", "Beratung für audiovisuelle Anwendungen", "Baustelle", "Banner- und Schilderhandel", "Aufzug", "Vorlesungsraum"
  ]

  return(
    <div>
      <h1 className="mx-auto my-64 w-fit">Weg zur Viscosi</h1>
      <div className="mx-auto w-fit">
        <ul className="flex flex-col gap-32 text-6xl color-teal-400 my-64 uppercase">
          {waypoints.map((point,index) =>
            <li className="w-fit blur-sm hover:blur-none" key={index}>{point}</li>
          )}
        </ul>
      </div>
    </div>
  )
}