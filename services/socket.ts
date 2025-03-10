import { Match } from "../types/match";
import { WS_BASE_URL, ENDPOINTS } from "../config";

const socket = new WebSocket(`${WS_BASE_URL}${ENDPOINTS.WS}`);


export const subscribeToMatchUpdates = (callback: (updatedData: { type: string; data: Match[] }) => void) => {
    socket.onopen = () => {
        console.log("WebSocket соединение установлено");
    };

    socket.onerror = (error) => {
        console.error("Ошибка WebSocket", error);
    };

    socket.onmessage = (event) => {
        const updatedData = JSON.parse(event.data);
        // Обработка обновлений
        if (updatedData && updatedData.type === "update_matches") {
            callback(updatedData);
        }
    };

    socket.onclose = () => {
        console.log("WebSocket соединение закрыто");
    };
};

export const unsubscribeFromMatchUpdates = () => {
    if (socket) {
        socket.close();
    }
};
