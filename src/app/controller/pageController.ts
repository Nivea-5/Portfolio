"use server";

import {neon} from '@neondatabase/serverless';
import {getSectionsCompleteForPage, SectionComplete} from "@/app/controller/sectionController";

const sql = neon(`${process.env.DATABASE_URL}`);

export interface PageComplete {
    id: number;
    title: string;
    sections: SectionComplete[];
}

export async function getPageCompleteFromName(name: string): Promise<PageComplete> {
    const res = await sql`SELECT page.id, page.title FROM page WHERE page.title = ${name}`;
    if (res.length === 0) {
        throw `Une erreur est survenue lors de la récupération des données de la page ${name}.`;
    }
    const sections = await getSectionsCompleteForPage(res[0].id);
    return {
        id: res[0].id,
        title: res[0].title,
        sections: sections,
    };
}