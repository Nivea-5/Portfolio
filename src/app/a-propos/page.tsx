"use client"

import {useEffect, useState} from "react";
import {getPageCompleteFromName, PageComplete} from "@/app/controller/pageController";
import {motion} from "framer-motion";
import LoadingSection from "@/app/components/loadingSection";
import OrganizedSections from "@/app/components/organizedSections";

export default function APropos() {
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState<PageComplete | null>(null);

    useEffect(() => {
        getPageCompleteFromName("à propos").then((page) => {
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
                <h1 className={"md:text-center w-full"}>À propos de moi</h1>
                <p className={"md:text-center w-full"}>Apprenez-en plus sur moi-même, mes passions et mon parcours scolaire et universitaire.</p>
            </motion.div>

            {
                loading ? <LoadingSection/> :
                    <OrganizedSections sections={page?.sections || []}/>
            }

        </main>
    )
}