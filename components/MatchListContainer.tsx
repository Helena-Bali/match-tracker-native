import React, {useCallback, useEffect, useState} from "react";
import {fetchMatches} from "../services/api";
import {Match} from "../types/match";
import MatchList from "./MatchList";
import { useWindowDimensions} from 'react-native';
import {subscribeToMatchUpdates, unsubscribeFromMatchUpdates} from "../services/socket";

interface MatchListProps {
    onSelectMatch: (match: Match) => void;
}

const MatchListContainer: React.FC<MatchListProps> = () => {
    const {width} = useWindowDimensions();
    const isLaptop = width >= 1280;
    const isTablet = width >= 991;
    const [matches, setMatches] = useState<Match[]>([]);
    const [expandedMatches, setExpandedMatches] = useState<Set<string>>(new Set());
    const [selectedStatus, setSelectedStatus] = useState<string>("all");
    const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    const getMatches = useCallback(() => {
        fetchMatches()
            .then(data => {
                setMatches(data.data.matches);
                setIsError(false)
            })
            .catch(error => {
                console.error("Ошибка: не удалось загрузить информацию", error);
                setIsError(true)
            });
    }, [setMatches]);

    useEffect(() => {
        getMatches()
    }, []);


    useEffect(() => {
        const handleMatchUpdate = (updatedData: { type: string; data: Match[] }) => {
            if (!updatedData || !updatedData.data) return;

            const newMatches = updatedData.data;
            setMatches((prevMatches: Match[]) =>
                prevMatches.map(match => {
                        const createUniqueKey = (match) => `${match.title}-${match.time}`;
                        const updatedMatch = newMatches.find(
                            (newMatch) => createUniqueKey(match) === createUniqueKey(newMatch)
                        )
                        return updatedMatch ? updatedMatch : match
                    }
                )
            );
        };
        subscribeToMatchUpdates(handleMatchUpdate);
        return () => {
            unsubscribeFromMatchUpdates();
        };
    }, []);

    const filteredMatches = selectedStatus === "all"
        ? matches
        : matches.filter(match => match.status.toLowerCase() === selectedStatus.toLowerCase());

    const toggleExpand = useCallback((index) => {
        setExpandedMatches(prev => {
            const newSet = new Set(prev);
            newSet.has(index) ? newSet.delete(index) : newSet.add(index);
            return newSet;
        });
    }, []);

    return (
        <MatchList matches={matches} isTablet={isTablet} isLaptop={isLaptop} selectedStatus={selectedStatus}
                   setSelectedStatus={setSelectedStatus}
                   isDropdownOpen={isDropdownOpen} setDropdownOpen={setDropdownOpen} isError={isError}
                   getMatches={getMatches} filteredMatches={filteredMatches} toggleExpand={toggleExpand}
                   expandedMatches={expandedMatches}/>
    );
};

export default MatchListContainer;
