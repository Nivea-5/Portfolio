"use client";

import {SectionComplete} from "@/app/controller/sectionController";
import {AnimatePresence, motion} from "framer-motion";
import {PossibleElemType} from "@/app/controller/enums";
import {useState} from "react";

export default function ParagrapheDev({section}: { section: SectionComplete }) {
    const [fullScreen, setFullScreen] = useState<boolean>(false);

    return (
        <>
            <AnimatePresence>
                {fullScreen &&
                    <>
                        <motion.span
                            key={"background-blur"}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            onClick={() => setFullScreen(false)}
                            className={"fixed  z-30 top-0 left-0 w-full h-[100vh] backdrop-blur bg-foregroundTransparent"}/>

                        <motion.div
                            key={"big-element"}
                            initial={{transform: "scale(0)", opacity: 0, transformOrigin: "bottom"}}
                            animate={{transform: "scale(1)", opacity: 1, transformOrigin: "bottom"}}
                            exit={{transform: "scale(0)", opacity: 0, transformOrigin: "bottom"}}
                            style={{scrollbarWidth: "none"}}
                            className={`fixed bottom-0 h-[80vh] min-h-[80vh] max-h-[80vh] box-border z-40 md:w-3/4 w-full md:left-[12.5%] left-0 flex flex-col bg-dark overflow-auto p-8 rounded-t-2xl gap-10 items-center`}
                        >
                            <div onClick={() => setFullScreen(false)} className={"flex cursor-pointer hover:bg-darkHover rounded-3xl justify-center items-center w-12 h-12 fixed right-2 z-50 top-2"}>
                                <img src={"/ico/close-outline.svg"} alt={"close"} className={"w-8 h-8 invert"}/>
                            </div>
                            <h1>{section.title}</h1>
                            <div className={"flex flex-wrap w-full gap-2"}>
                                {
                                    section.tags.map((tag, id) => {
                                        return (
                                            <p key={id}
                                               className={"bg-blue text-foreground pt-1 pb-1 pl-3 pr-3 rounded-3xl"}>{tag}</p>
                                        )
                                    })
                                }
                            </div>

                            {
                                section.elements.map((element) => {
                                    switch (element.type) {
                                        case PossibleElemType.image:
                                            return <img key={element.id} src={element.content} alt={"image"}
                                                        className={"md:w-1/2 w-full"}/>
                                        case PossibleElemType.titre:
                                            return <h3 className={"w-full"} key={element.id}>{element.content}</h3>
                                        case PossibleElemType.texte:
                                            return <p className={"w-full"} key={element.id}>{element.content}</p>
                                        case PossibleElemType.lien:
                                            return <a key={element.id} href={element.content}>{element.content}</a>
                                    }
                                })
                            }

                        </motion.div>
                    </>

                }
            </AnimatePresence>
            <motion.div
                key={"small-element"}
                onClick={() => setFullScreen(true)}
                initial={{opacity: 0, transform: "scale(.8)"}}
                whileInView={{opacity: 1, transform: "scale(1)"}}
                className={`
                            flex flex-col cursor-pointer 
                            relative gap-6 bg-dark w-full h-fit p-4 rounded-xl 
                            overflow-hidden md:hover:bg-darkHover md:max-w-[800px]
                            `}
            >
                {
                    section.tags.length > 0 &&
                    <div className={"flex flex-wrap w-full gap-2"}>
                        {
                            section.tags.map((tag, id) => {
                                return (
                                    <p key={id}
                                       className={"bg-blueHover text-foreground pt-1 pb-1 pl-3 pr-3 rounded-3xl text-xs"}>{tag}</p>
                                )
                            })
                        }
                    </div>
                }

                <h2>{section.title}</h2>
            </motion.div>
        </>

    )
}