import {SectionComplete} from "@/app/controller/sectionController";
import {PossibleSectionType} from "@/app/controller/enums";
import ParagraphClassiqueContainer from "@/app/components/paragrapheClassiqueContainer";
import TuileContainer from "@/app/components/tuileContainer";
import ParagraphDevContainer from "@/app/components/paragrapheDevContainer";

interface GroupedSections {
    type: PossibleSectionType;
    sections: SectionComplete[];
}

export default function OrganizedSections({sections}: {sections: SectionComplete[]}) {

    const groupedSections = groupSectionsByType(sections);


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