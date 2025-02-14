"use client"

import {usePathname, useRouter} from "next/navigation";
import {useEffect, useState} from "react";

export default function Navbar() {

    const pathname = usePathname();
    const router = useRouter();
    const isActive = (path: string) => pathname === path;
    const [isMobile, setIsMobile] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        // Fonction pour vérifier la largeur de l'écran
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024); // Détecte si c'est mobile (moins de 768px)
        };
        // Vérifie la largeur initiale
        handleResize();

        // Écoute les changements de taille d'écran
        window.addEventListener("resize", handleResize);

        // Nettoie l'écouteur pour éviter les fuites de mémoire
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    function navigate(path: string) {
        router.push(path);
        setIsMenuOpen(false);
    }

    if (isMobile) {
        return (
            <nav className={"fixed top-2 right-2 z-50"}>
                <div onClick={() => setIsMenuOpen(true)} className={"h-14 w-14 bg-background flex justify-center items-center p-2 rounded-[100px]"}>
                    <img src={"/ico/bars-outline.svg"} alt={"bars"} className={""}/>
                </div>
                {
                    isMenuOpen &&
                    <div
                        className={"fixed top-0 left-0 w-full h-[100vh] bg-foreground flex gap-6 flex-col justify-center items-center p-14"}>
                        <div onClick={() => setIsMenuOpen(false)}
                             className={"absolute top-2 right-2 h-14 w-14 bg-background flex justify-center items-center p-2 rounded-[100px]"}>
                            <img src={"/ico/close-outline.svg"} alt={"bars"} className={""}/>
                        </div>
                        <button onClick={() => navigate("/")} className={"w-full p-4 gap-3"}>
                        Accueil
                            <img src={"/ico/home-solid.svg"} alt={"home"} className={"static"}/>
                        </button>
                        <button onClick={() => navigate("/a-propos")} className={"w-full p-4 gap-3"}>
                            A propos
                            <img src={"/ico/user-solid.svg"} alt={"user"} className={"static"}/>
                        </button>
                        <button onClick={() => navigate("/competences")} className={"w-full p-4 gap-3"}>
                            Compétences
                            <img src={"/ico/command-line-solid.svg"} alt={"command"} className={"static"}/>
                        </button>
                        <button onClick={() => navigate("/projets")} className={"w-full p-4 gap-3"}>
                            Projets
                            <img src={"/ico/document-solid.svg"} alt={"document"} className={"static"}/>
                        </button>
                        <button onClick={() => navigate("/experiences")} className={"w-full p-4 gap-3"}>
                            Experiences
                            <img src={"/ico/briefcase-solid.svg"} alt={"briefcase"} className={"static"}/>
                        </button>
                        <button onClick={() => navigate("/rechercher")} className={"w-full p-4 gap-3"}>
                            Rechercher
                            <img src={"/ico/search-outline.svg"} alt={"search"} className={"static"}/>
                        </button>
                        <button onClick={() => navigate("/contact")} className={"w-full p-4 gap-3"}>
                            Contact
                            <img src={"/ico/chat-solid.svg"} alt={"chat"} className={"static"}/>
                        </button>
                    </div>

                }
            </nav>
        )
    }

    return (
        <nav className={"fixed top-4  w-full flex justify-center items-center z-50"}>
            <ul className={"w-fit bg-foreground border-2 border-background rounded-[100px] flex justify-center items-center gap-1 p-1"}>
                <li onClick={() => router.push("/")} className={`${isActive("/") ? "bg-white hover:bg-light text-foreground text-[14px] gap-2" : "bg-foreground hover:bg-darkHover"} hover:text-[14px] hover:gap-2 text-[0px] pl-4 pr-4 cursor-pointer h-8 w-fit flex justify-center items-center rounded-3xl bg-foreground`}>
                    <img src={"/ico/home-solid.svg"} alt={"home"} className={`${!isActive("/") && "invert"} w-4`}/>
                    Accueil
                </li>
                <li onClick={() => router.push("/a-propos")} className={`${isActive("/a-propos") ? "bg-white hover:bg-light text-foreground text-[14px] gap-2" : "bg-foreground hover:bg-darkHover"} hover:text-[14px] hover:gap-2 pl-4 pr-4 text-[0px] cursor-pointer h-8 w-fit flex justify-center items-center rounded-3xl bg-foreground`}>
                    <img src={"/ico/user-solid.svg"} alt={"user"} className={`${!isActive("/a-propos") && "invert"} w-4`}/>
                    A propos
                </li>
                <li onClick={() => router.push("/competences")} className={`${isActive("/competences") ? "bg-white hover:bg-light text-foreground text-[14px] gap-2" : "bg-foreground hover:bg-darkHover"} hover:text-[14px] hover:gap-2 pl-4 pr-4 text-[0px] cursor-pointer h-8 w-fit flex justify-center items-center rounded-3xl bg-foreground`}>
                    <img src={"/ico/command-line-solid.svg"} alt={"command"} className={`${!isActive("/competences") && "invert"} w-4`}/>
                    Compétences
                </li>
                <li onClick={() => router.push("/projets")} className={`${isActive("/projets") ? "bg-white hover:bg-light text-foreground text-[14px] gap-2" : "bg-foreground hover:bg-darkHover"} hover:text-[14px] hover:gap-2 pl-4 pr-4 text-[0px] cursor-pointer h-8 w-fit flex justify-center items-center rounded-3xl bg-foreground`}>
                    <img src={"/ico/document-solid.svg"} alt={"document"} className={`${!isActive("/projets") && "invert"} w-4`}/>
                    Projets
                </li>
                <li onClick={() => router.push("/experiences")} className={`${isActive("/experiences") ? "bg-white hover:bg-light text-foreground text-[14px] gap-2" : "bg-foreground hover:bg-darkHover"} hover:text-[14px] hover:gap-2 pl-4 pr-4 text-[0px] cursor-pointer h-8 w-fit flex justify-center items-center rounded-3xl bg-foreground`}>
                    <img src={"/ico/briefcase-solid.svg"} alt={"briefcase"} className={`${!isActive("/experiences") && "invert"} w-4`}/>
                    Experience
                </li>
                <li onClick={() => router.push("/rechercher")} className={`${isActive("/rechercher") ? "bg-white hover:bg-light text-foreground text-[14px] gap-2" : "bg-foreground hover:bg-darkHover"} hover:text-[14px] hover:gap-2 pl-4 pr-4 text-[0px] cursor-pointer h-8 w-fit flex justify-center items-center rounded-3xl bg-foreground`}>
                    <img src={"/ico/search-outline.svg"} alt={"search"} className={`${!isActive("/rechercher") && "invert"} w-4`}/>
                    Rechercher
                </li>
                <li onClick={() => router.push("/contact")} className={`${isActive("/contact") ? "bg-white hover:bg-light text-foreground text-[14px] gap-2" : "bg-foreground hover:bg-darkHover"} hover:text-[14px] hover:gap-2 pl-4 pr-4 text-[0px] cursor-pointer h-8 w-fit flex justify-center items-center rounded-3xl bg-foreground`}>
                    <img src={"/ico/chat-solid.svg"} alt={"chat"} className={`${!isActive("/contact") && "invert"} w-4`}/>
                    Contact
                </li>
            </ul>
        </nav>
    )
}