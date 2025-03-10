
interface Player {
    kills: number;
    username: string;
}

export interface Team {
    name: string;
    place: number;
    players: Player[];
    points: number;
    total_kills: number;
}

export interface Match {
    awayScore: number;
    awayTeam: Team;
    homeScore: number;
    homeTeam: Team;
    status: string;
    time: string;
    title: string;
}
