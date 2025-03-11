import { Match } from "../types/match";
import { API_BASE_URL, ENDPOINTS } from "../config";

interface ApiResponse {
    data: {
        matches: Match[];
    };
    ok: boolean;
}

export const fetchMatches = async (): Promise<ApiResponse> => {
    const response = await fetch("https://app.ftoyd.com/fronttemp-service/fronttemp");
    return response.json();
};

