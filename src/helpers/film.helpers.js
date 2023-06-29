 

export function filterFilmsByDirector(list, director){
    if(director) return list.filter((film) => film.director == director);
    else return list;
}

export function getListOf(list, prop){
    return [...new Set(list.map((film) => film[prop] || ""))];
}

export function getFilmStats(list){
    return list.reduce(
        (stats, film) => {
            stats.total++;
            
            stats.acc_score += Number(film.rt_score)
            stats.avg_score = stats.acc_score / stats.total;
            if (stats.latest == null || stats.latest <film.release_date){
                stats.latest = film.release_date;
            }
            return stats;
        },
        {
            acc_score: 0,
            avg_score: 0,
            total: 0,
            latest: null,

        }
        );
}