import {motion} from "framer-motion";


export default function LoadingSection() {
    return (
        <motion.div
            initial={{opacity: 0, transform: "scale(.8)"}}
            whileInView={{opacity: 1, transform: "scale(1)"}}
            className={"flex flex-col  justify-center items-center gap-10 h-40"}
        >
            <img src={"/ico/loader.gif"} alt={"chargement..."} className={"w-11 h-11"}/>
        </motion.div>
    )
}