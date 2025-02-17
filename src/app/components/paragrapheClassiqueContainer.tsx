"use client"

import {SectionComplete} from "@/app/controller/sectionController";
import ParagrapheClassique from "@/app/components/paragrapheClassique";
import {motion} from "framer-motion";
import {useRouter} from "next/navigation";

export default function ParagraphClassiqueContainer({sections}: {sections: SectionComplete[]}) {
    const router = useRouter();
    return (
        <div className={"bg-foreground text-background p-10 pt-32 flex flex-col justify-center items-center gap-32"}>
            {
                sections?.map((section) => {
                    return (
                        <ParagrapheClassique section={section} key={section.id}/>
                    )
                })
            }
            {
                sections.length === 0 &&
                <motion.div
                    initial={{opacity: 0, transform: "scale(.8)"}}
                    whileInView={{opacity: 1, transform: "scale(1)"}}
                    className={"flex flex-col  justify-center items-center gap-10"}
                >
                    <img src={"/img/desert.svg"} alt={"image"}
                         className={"md:w-1/4 w-full"}/>
                    <h1 className={"md:w-2/3 text-center"}>Hum, ça semble bien tranquille ici...</h1>
                    <p className={"w-2/3 text-center"}>Aucun contenu n'est disponible pour le moment. Merci de réessayer
                        plus tard.</p>
                    <button
                        onClick={() => router.push("/contact")}
                    >
                        Me contacter
                        <img alt={"message"} src={"/ico/chat-solid.svg"}/>
                    </button>
                </motion.div>
            }
        </div>
    )
}