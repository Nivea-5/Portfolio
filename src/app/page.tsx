"use client"

import {motion, useScroll, useTransform} from "framer-motion";
import {useRouter} from "next/navigation";

export default function Home() {
    const router = useRouter();
    const {scrollY} = useScroll();
    const slowParallaxY = useTransform(scrollY, [0, 1000], [0, 400]);

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
            <div
                className={"bg-foreground text-background p-10 pt-32 flex flex-col justify-center items-center gap-32"}>

                <motion.div
                    initial={{opacity: 0, transform: "scale(.8)"}}
                    whileInView={{opacity: 1, transform: "scale(1)"}}
                    className={"flex flex-col  justify-center items-center gap-10"}
                >
                    <img src={"/img/aircraft.svg"} alt={"aircraft!"} className={"md:w-1/4 w-full"}/>

                    <h1 className={"md:w-2/3 text-center"}>Briser les cadres, ouvrir les possibles.</h1>
                    <p className={"w-2/3 text-center"}>Au cours de mon parcours, j&apos;ai appris à penser au-delà des cadres
                        et des limites établies, convaincu que l&apos;innovation véritable naît de la capacité à explorer
                        l&apos;inconnu et à imaginer de nouvelles perspectives.</p>
                </motion.div>

                <motion.div
                    initial={{opacity: 0, transform: "scale(.8)"}}
                    whileInView={{opacity: 1, transform: "scale(1)"}}
                    className={"flex flex-col  justify-center items-center gap-10"}
                >
                    <img src={"/img/to-the-moon.svg"} alt={"to the moon!"} className={"md:w-1/4 w-full"}/>

                    <h1 className={"md:w-2/3 text-center"}>Optimisation au pixel près, innovation à chaque étape.</h1>
                    <p className={"w-2/3 text-center"}>Au fil de mon expérience en développement et en gestion de
                        projets,
                        j&apos;ai acquis la certitude que chaque détail, aussi infime soit-il, joue un
                        rôle essentiel dans la création d&apos;un résultat répondant aux attentes de toutes les parties
                        prenantes.</p>
                </motion.div>

                <motion.div
                    initial={{opacity: 0, transform: "scale(.8)"}}
                    whileInView={{opacity: 1, transform: "scale(1)"}}
                    className={"flex flex-col  justify-center items-center gap-10"}>
                    <img src={"/img/team.svg"} alt={"team!"} className={"md:w-1/4 w-full"}/>

                    <h1 className={"md:w-2/3 text-center"}>Le succès se construit toujours à plusieurs.</h1>
                    <p className={"w-2/3 text-center"}>Tout au long de mon parcours, j&apos;ai découvert que les meilleures
                        réussites naissent de la collaboration, où chaque talent contribue à créer des solutions plus
                        fortes, plus innovantes et plus durables.</p>
                </motion.div>

                <motion.div
                    initial={{opacity: 0, transform: "scale(.8)"}}
                    whileInView={{opacity: 1, transform: "scale(1)"}}
                    className={"flex flex-col  justify-center items-center gap-10"}>
                    <h1 className={"md:w-2/3 text-center"}>Apprenez-en plus !</h1>
                    <p className={"w-2/3 text-center"}>Apprenez-en plus sur mes valeurs professionnelles, mon parcours et moi-même.</p>
                    <button
                        onClick={() => router.push("/a-propos")}
                    >
                        C&apos;est parti
                        <img alt={"rocket"} src={"/ico/rocket-solid.svg"}/>
                    </button>
                </motion.div>

            </div>
        </div>
    );
}
