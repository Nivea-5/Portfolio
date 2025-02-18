"use client"

import {SectionComplete} from "@/app/controller/sectionController";
import Tuile from "@/app/components/tuile";
import {useEffect} from "react";

export default function TuileContainer({sections}: {sections: SectionComplete[]}) {

    useEffect(() => {
        console.log(sections);
    }, []);
    return (
        <div key={sections[0]?.id || 0} className={"bg-foreground text-background p-0 pt-20 flex flex-wrap justify-center items-center gap-4"}>
            {
                sections?.map((section) => {
                    return (
                        <Tuile section={section} key={section.id}/>
                    )
                })
            }
        </div>
    )
}