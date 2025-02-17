"use client"

import {SectionComplete} from "@/app/controller/sectionController";
import ParagrapheDev from "@/app/components/paragrapheDev";

export default function ParagraphDevContainer({sections}: {sections: SectionComplete[]}) {
    return (
        <div key={sections[0]?.id || 0} className={"bg-foreground text-background p-10 pt-32 flex flex-col justify-center items-center gap-6"}>
            {
                sections?.map((section) => {
                    return (
                        <ParagrapheDev section={section} key={section.id}/>
                    )
                })
            }
        </div>
    )
}