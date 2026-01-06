import type { Lang } from "@/types";

import en from "./translations/en.json";
import ar from "./translations/ar.json";
import ku from "./translations/ku.json";

const dictionaries = {
    en,
    ar,
    ku,
};

export function createT(lang: Lang) {
    const dict = dictionaries[lang];

    return function t(key: string): string {
        const keys = key.split(".");
        let value: any = dict;

        for (const k of keys) {
            value = value?.[k];
        }

        if(!value) {
            console.warn(`Missing translation: ${lang}.${key}`);
            return key;
        }

        return value;
    };
}