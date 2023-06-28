import e from "express";

export function filterFilmsByDirector(list, director){
    if(director) return list.filter((film) => film.director == director);
    else return list;
}

export function getListOf(list, prop){
    return [...new Set(list.map((film) => film[prop] || ""))];
}

export function getFilmStats(list){
    const stats = {
        "avg_score": list.reduce((acc, film) => acc + film.rt_score, 0) / list.length,
        "acc_score": list.reduce((acc, film) => acc + film.rt_score, 0),
        "total": list.length,
        "latest": list[0].release_date,
    }
    return stats;
}