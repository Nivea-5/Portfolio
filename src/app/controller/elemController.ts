"use server";

import {neon} from '@neondatabase/serverless';
import {PossibleElemType} from "@/app/controller/enums";
const sql = neon(`${process.env.DATABASE_URL}`);

export interface ElemComplete {
    id: number;
    type: PossibleElemType;
    position: number;
    content: string;
}

export async function getElemCompleteForSection(id: number): Promise<ElemComplete[]> {
    const res = await sql`SELECT elem.id, elem.position, elem.content, elem_type.name FROM element as elem JOIN element_type as elem_type ON elem.type_id = elem_type.id WHERE section_id = ${id} ORDER BY elem.position`;
    const compElem: ElemComplete[] = [];
    for (const elem of res) {
        compElem.push({
            id: elem.id,
            type: elem.name as PossibleElemType,
            position: elem.position,
            content: elem.content,
        });
    }
    return compElem;
}



