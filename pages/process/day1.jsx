import { motion, AnimatePresence } from "framer-motion"

export default function Day1() {
  const waypoints = [
    "Studentenzimmer", "Küche", "Flur", "Treppenhaus", "Seitenstraße", "Tankstelle", "Hauptstraße", "Kantine", "Eventräume", "Veranstaltungstechniker", "Baustelle", "Banner- und Schilderhandel", "Aufzug", "Vorlesungsraum"
  ]

  const variants = {
    hidden: {
      opacity: 0,
      translateY: 80
    },
    visible: {
      opacity: 1,
      translateY: 0
    }
  }

  return(
    <div>
      <h1 className="mx-auto my-64 w-fit">Weg zur Viscosi</h1>
      <div className="mx-auto w-fit">
        <ul className="flex flex-col gap-32 text-6xl color-teal-400 my-64 uppercase">
          <AnimatePresence exitBeforeEnter>
            {waypoints.map((point,index) =>
              <motion.li 
                className="blur-sm duration-300 hover:blur-none"
                key={index}
                variants={variants}
                initial="hidden"
                whileInView="visible"
                exit="hidden"
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                }}
              >
                {point}
              </motion.li>
            )}
          </AnimatePresence>
        </ul>
      </div>
    </div>
  )
}