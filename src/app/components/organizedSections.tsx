import {SectionComplete} from "@/app/controller/sectionController";
import {PossibleSectionType} from "@/app/controller/enums";
import ParagraphClassiqueContainer from "@/app/components/paragrapheClassiqueContainer";
import TuileContainer from "@/app/components/tuileContainer";
import ParagraphDevContainer from "@/app/components/paragrapheDevContainer";
import {motion} from "framer-motion";
import {useRouter} from "next/navigation";

interface GroupedSections {
    type: PossibleSectionType;
    sections: SectionComplete[];
}

export default function OrganizedSections({sections}: {sections: SectionComplete[]}) {

    const groupedSections = groupSectionsByType(sections);
    const router = useRouter();

    function groupSectionsByType(sections: SectionComplete[]): GroupedSections[] {
        const res : GroupedSections[] = [];

        for (const section of sections) {
            if (res[res.length - 1]?.type === section.type) {
                res[res.length - 1].sections.push(section);
            } else {
                res.push({
                    type: section.type,
                    sections: [section]
                });
            }
        }

        return res;
    }

    if (sections.length === 0) {
        return (
            <motion.div
                initial={{opacity: 0, transform: "scale(.8)"}}
                whileInView={{opacity: 1, transform: "scale(1)"}}
                className={"flex flex-col  justify-center items-center gap-10 mt-24"}
            >
                <img src={"/img/desert.svg"} alt={"image"}
                     className={"md:w-1/4 w-full"}/>
                <h1 className={"md:w-2/3 text-center"}>Hum, ça semble bien tranquille ici...</h1>
                <p className={"w-2/3 text-center"}>Aucun contenu n&apos;est disponible pour le moment. Merci de
                    réessayer
                    plus tard.</p>
                <button
                    onClick={() => router.push("/contact")}
                >
                    Me contacter
                    <img alt={"message"} src={"/ico/chat-solid.svg"}/>
                </button>
            </motion.div>
        )
    }

    return (
        <>
            {
                groupedSections.map((group, index) => {
                    switch (group.type) {
                        case PossibleSectionType.paragrapheClassique:
                            return <ParagraphClassiqueContainer sections={group.sections} key={index}/>;
                        case PossibleSectionType.tuile:
                            return <TuileContainer sections={group.sections} key={index}/>;
                        case PossibleSectionType.paragrapheDev:
                            return <ParagraphDevContainer sections={group.sections} key={index}/>;
                    }
                })
            }
        </>
    )
}