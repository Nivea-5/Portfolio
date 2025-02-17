"use server";

import {neon} from '@neondatabase/serverless';
import {ElemComplete, getElemCompleteForSection} from "@/app/controller/elemController";
import {PossibleSectionType} from "@/app/controller/enums";
const sql = neon(`${process.env.DATABASE_URL}`);



export interface SectionComplete {
    id: number;
    title: string;
    position: number;
    type: PossibleSectionType;
    elements: ElemComplete[];
    tags: string[];
}

export async function getSectionsCompleteForPage(id: number): Promise<SectionComplete[]> {
    const res = await sql`SELECT section.id, section.title, section.position, section_type.name FROM section JOIN section_type ON section.type_id = section_type.id WHERE page_id = ${id} ORDER BY section.position`;
    const compSect: SectionComplete[] = [];
    for (const sect of res) {
        const elements = await getElemCompleteForSection(sect.id);
        const tags = await sql`SELECT tag.name FROM tag, section_tag as stag WHERE stag.tag_id = tag.id AND stag.section_id = ${sect.id}`;
        compSect.push({
            id: sect.id,
            title: sect.title,
            position: sect.position,
            type: sect.name as PossibleSectionType,
            elements: elements as ElemComplete[],
            tags: tags.map((tag) => tag.name),
        });
    }
    return compSect;
}