"use client"

import {useEffect, useState} from "react";
import {getPageCompleteFromName, PageComplete} from "@/app/controller/pageController";
import {motion} from "framer-motion";
import LoadingSection from "@/app/components/loadingSection";
import OrganizedSections from "@/app/components/organizedSections";

export default function Projets() {
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState<PageComplete | null>(null);

    useEffect(() => {
        getPageCompleteFromName("projets").then((page) => {
            setPage(page);
        }).catch((error) => {
            console.log(error);
        }).finally(() => {
            setLoading(false);
        });
    }, []);

    return (
        <main>

            <motion.div
                initial={{opacity: 0, transform: "scale(.8)"}}
                whileInView={{opacity: 1, transform: "scale(1)"}}
                className={"flex flex-col  justify-center items-center gap-3"}
            >
                <h1>Mes projets</h1>
                <p>Mes projets réalisés en groupe ou seul, dans le cadre de l&apos;université ou de ma propre entreprise.</p>
            </motion.div>

            {
                loading ? <LoadingSection/> :
                    <OrganizedSections sections={page?.sections || []}/>
            }

        </main>
    )
}