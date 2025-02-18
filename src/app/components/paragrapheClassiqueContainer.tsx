"use client"

import {SectionComplete} from "@/app/controller/sectionController";
import ParagrapheClassique from "@/app/components/paragrapheClassique";

export default function ParagraphClassiqueContainer({sections}: {sections: SectionComplete[]}) {
    return (
        <div key={sections[0]?.id || 0} className={"bg-foreground text-background p-0 pt-32 flex flex-col justify-center items-center gap-32"}>
            {
                sections?.map((section) => {
                    return (
                        <ParagrapheClassique section={section} key={section.id}/>
                    )
                })
            }
        </div>
    )
}