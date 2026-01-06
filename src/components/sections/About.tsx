import type { Lang } from "@/types"

type AboutProps = {
    lang: Lang;
};

export default function About({ lang }: AboutProps) {
    return <h1>About</h1>
}