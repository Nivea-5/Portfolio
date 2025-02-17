"use client";

import {SectionComplete} from "@/app/controller/sectionController";
import {AnimatePresence, motion} from "framer-motion";
import {PossibleElemType} from "@/app/controller/enums";
import {useState} from "react";

export default function Tuile({section}: { section: SectionComplete }) {
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
                            initial={{transform: "scale(0)", opacity: 0}}
                            animate={{transform: "scale(1)", opacity: 1}}
                            exit={{transform: "scale(0)", opacity: 0}}
                            style={{scrollbarWidth: "none"}}
                            className={`fixed top-[10vh] h-[85vh] min-h-[85vh] max-h-[85vh] box-border z-40 w-1/3 left-1/3 flex flex-col bg-dark overflow-auto p-8 rounded-2xl gap-10 items-center`}
                        >
                            <div onClick={() => setFullScreen(false)} className={"flex cursor-pointer hover:bg-darkHover rounded-3xl justify-center items-center w-12 h-12 fixed right-2 z-50 top-2"}>
                                <img src={"/ico/close-outline.svg"} alt={"close"} className={"w-8 h-8 invert"}/>
                            </div>
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
                                                        className={"md:w-3/4 w-full rounded-sm"}/>
                                        case PossibleElemType.titre:
                                            return <h1 className={"text-center"} key={element.id}>{element.content}</h1>
                                        case PossibleElemType.texte:
                                            return <p key={element.id}>{element.content}</p>
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
                            relative items-center gap-4 bg-dark flex-1 max-w-[200px] min-w-[200px] h-[350px] p-4 rounded-2xl 
                            overflow-hidden md:hover:bg-darkHover
                            `}
            >

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

                {
                    section.elements.map((element) => {
                        switch (element.type) {
                            case PossibleElemType.image:
                                return <img key={element.id} src={element.content} alt={"image"}
                                            className={"md:w-3/4 w-full rounded-sm"}/>
                            case PossibleElemType.titre:
                                return <h3 className={"text-xl"} key={element.id}>{element.content}</h3>
                            case PossibleElemType.texte:
                                return <p className={"text-sm"} key={element.id}>{element.content}</p>
                            case PossibleElemType.lien:
                                return <a key={element.id} href={element.content}>{element.content}</a>
                        }
                    })
                }
                <span
                    className={"absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-dark to-transparent"}/>
            </motion.div>
        </>

    )
}