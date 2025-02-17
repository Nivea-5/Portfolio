import {SectionComplete} from "@/app/controller/sectionController";
import {motion} from "framer-motion";
import {PossibleElemType} from "@/app/controller/enums";


export default function ParagrapheClassique({section} : {section: SectionComplete}) {
    return (
        <motion.div
            key={section.id}
            initial={{opacity: 0, transform: "scale(.8)"}}
            whileInView={{opacity: 1, transform: "scale(1)"}}
            className={"flex flex-col  justify-center items-center gap-10"}
        >
            {
                section.elements.map((element) => {
                    switch (element.type) {
                        case PossibleElemType.image:
                            return <img key={element.id} src={element.content} alt={"image"} className={"md:w-1/4 w-full rounded-sm"}/>
                        case PossibleElemType.titre:
                            return <h2 key={element.id} className={"md:w-2/3 text-center"}>{element.content}</h2>
                        case PossibleElemType.texte:
                            return <p key={element.id} className={"w-2/3 text-center"}>{element.content}</p>
                        case PossibleElemType.lien:
                            return <a key={element.id} href={element.content}>{element.content}</a>
                    }
                })
            }
        </motion.div>
    )

}