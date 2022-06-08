import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image";

export default function Day4() {
  const imglist = [];
  for (let i = 0; i < 50; i++) {
    imglist.push(
      <Image 
        src={`https://picsum.photos/id/${i+10}//200/?grayscale`}
        alt="random image" 
        width={200} 
        height={200}
      />
    );
  }

  const variants = {
    hidden: {
      opacity: 0,
      translateY: 80,
      rotate: -90
    },
    visible: {
      opacity: 1,
      translateY: 0,
      rotate:0
    }
  }
  return (
    <div>
      <h1 className="mx-auto my-32 w-fit">Random Image Collage</h1>
      <div className="mx-auto w-4/5">
        <motion.ul 
          className="flex flex-row flex-wrap justify-between gap-4 text-xl color-teal-400 my-32 uppercase"
          transition={{
            delayChildren: 0.4,
            staggerDirection: 1
          }}
        >
          <AnimatePresence exitBeforeEnter>
            {imglist.map((img,index) =>
              <motion.li 
                className="h-48 w-48"
                key={index}
                variants={variants}
                initial="hidden"
                whileInView="visible"
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                  type: "spring",
                }}
              >
                {img}
              </motion.li>
            )}
          </AnimatePresence>
        </motion.ul>
      </div>
    </div>
  )
}