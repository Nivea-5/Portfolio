"use client"

import {motion, useScroll, useTransform} from "framer-motion";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {getPageCompleteFromName, PageComplete} from "@/app/controller/pageController";
import LoadingSection from "@/app/components/loadingSection";
import ParagrapheClassique from "@/app/components/paragrapheClassique";
import ParagraphClassiqueContainer from "@/app/components/paragrapheClassiqueContainer";

export default function Home() {
    const router = useRouter();
    const {scrollY} = useScroll();
    const slowParallaxY = useTransform(scrollY, [0, 1000], [0, 400]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState<PageComplete | null>(null);

    useEffect(() => {
        getPageCompleteFromName("accueil").then((page) => {
            setPage(page);
        }).catch((error) => {
            console.error(error);
        }).finally(() => {
            setLoading(false);
        });
    }, []);

    return (
        <div>
            <div className={"relative h-[100vh] bg-background text-foreground"}>
                <motion.img
                    initial={{transform: "scale(3)"}}
                    animate={{transform: "scale(1)"}}
                    transition={{
                        duration: 0.5,
                    }}
                    className={"md:w-full md:h-auto h-full z-10 md:object-contain object-cover absolute bottom-0 left-0"}
                    src={"/img/background.png"}
                    alt={"background"}
                />
                <motion.h1
                    initial={{transform: "scale(0) translateY(500px)", transformOrigin: "bottom"}}
                    animate={{transform: "scale(1) translateY(0)"}}
                    transition={{
                        duration: 1,
                    }}
                    style={{top: slowParallaxY}}
                    className={"md:text-9xl text-7xl text-center z-0 w-full absolute mt-24 left-0"}
                >
                    Maël Garnier
                </motion.h1>
                <motion.p
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{
                        delay: 1,
                        duration: 1
                    }}
                    className={"text-background absolute bottom-10 w-full md:p-0 p-10 text-center left-0 z-10 text-xl"}
                >
                    Développeur fullstack et d&apos;applications
                </motion.p>
            </div>

            {
                loading ? <LoadingSection/> :
                    <ParagraphClassiqueContainer sections={page?.sections || []}/>
            }

            <motion.div
                initial={{opacity: 0, transform: "scale(.8)"}}
                whileInView={{opacity: 1, transform: "scale(1)"}}
                className={"flex flex-col  justify-center items-center gap-10 mb-24 mt-24"}>
                <h1 className={"md:w-2/3 text-center"}>Apprenez-en plus !</h1>
                <p className={"w-2/3 text-center"}>Apprenez-en plus sur mes valeurs professionnelles, mon parcours et
                    moi-même.</p>
                <button
                    onClick={() => router.push("/a-propos")}
                >
                    C&apos;est parti
                    <img alt={"rocket"} src={"/ico/rocket-solid.svg"}/>
                </button>
            </motion.div>
        </div>
    );
}
