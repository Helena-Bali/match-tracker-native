import React from "react";
import {styles} from './styles'
import {errorStyles} from './errorStyles'
import {Match} from "../types/match";
import logo from "../assets/images/icon.png"
import arrowUp from '../assets/images/chevron-up(1).png'
import arrowDown from '../assets/images/arrow-down.png'
import Toggled from "./Toggled";
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import Error from "./Error";
import DropDown from "./dropDown";
import AnimatedScore from "./AnimatedScore";
import refresh from "../assets/images/Refresh.png";

interface MatchListProps {
    matches: Match[],
    isTablet: boolean,
    isLaptop: boolean,
    selectedStatus: string,
    setSelectedStatus: (selectedStatus: string) => void,
    isDropdownOpen: boolean,
    setDropdownOpen: (isDropdownOpen: boolean) => void,
    isError: boolean,
    getMatches: () => void,
    filteredMatches: Match[],
    toggleExpand: (index: number) => void,
    expandedMatches: Set<number>,
    onRetry: () => void
}


const MatchList = ({
                       matches,
                       isTablet,
                       isLaptop,
                       selectedStatus,
                       setSelectedStatus,
                       isDropdownOpen,
                       setDropdownOpen,
                       isError,
                       onRetry,
                       filteredMatches,
                       toggleExpand,
                       expandedMatches
                   }: MatchListProps): JSX.Element => {
    return (
        <ScrollView style={styles.container}>
            <View style={isTablet ? styles.errorRowContainer : null}>
                <View style={isTablet ? styles.headerRowContainer : null}>
                    <Text style={styles.header}>Match Tracker</Text>
                    <DropDown matches={matches}
                              isTablet={isTablet}
                              selectedStatus={selectedStatus}
                              setSelectedStatus={setSelectedStatus}
                              isDropdownOpen={isDropdownOpen}
                              setDropdownOpen={setDropdownOpen}
                    />
                </View>
                {isError && <Error isTablet={isTablet}/>}
                <TouchableOpacity style={isTablet ? errorStyles.rowRefreshButton : errorStyles.refreshButton}
                                  onPress={() => {
                                      onRetry()
                                  }}>
                    <View style={errorStyles.buttonContent}>
                        <Text style={errorStyles.buttonText}>Обновить</Text>
                        <Image source={refresh} style={errorStyles.refreshIcon}/>
                    </View>
                </TouchableOpacity>
            </View>
            {filteredMatches.map((match, index) => {
                const status = match.status == "Ongoing" ? "Live" :
                    match.status == "Scheduled" ?
                        "Match preparing" :
                        match.status == "Finished" ?
                            "Finished" : match.status
                return <View key={`${match.time}`}>
                    <View key={`${match.time}`} style={styles.matchContainer}>
                        <View style={styles.teamContainer}>
                            <Image source={logo} style={styles.teamLogo}/>
                            <Text style={styles.teamName}>{match.awayTeam.name}</Text>
                        </View>
                        <View style={styles.scoreContainer}>
                            <Text style={styles.score}>
                                <AnimatedScore score={match.awayScore}/> : <AnimatedScore score={match.homeScore}/>
                            </Text>
                            <Text style={[styles.status, styles[match.status.toLowerCase()]]}>{status}</Text>
                        </View>
                        <View style={styles.teamContainer}>
                            <Text style={styles.teamName}>{match.homeTeam.name}</Text>
                            <Image source={logo} style={styles.teamLogo}/>
                            {isLaptop && (
                                <TouchableOpacity onPress={() => toggleExpand(index)}>
                                    <Image style={styles.expandButton}
                                           source={expandedMatches.has(index) ? arrowUp : arrowDown}/>
                                </TouchableOpacity>)}
                        </View>
                    </View>
                    <View style={styles.arrowContainer}>
                        {expandedMatches.has(index) && <Toggled match={match} isLaptop={isLaptop}/>}
                        {!isLaptop && (
                            <TouchableOpacity onPress={() => toggleExpand(index)}>
                                <Image style={styles.expandButton}
                                       source={expandedMatches.has(index) ? arrowUp : arrowDown}/>
                            </TouchableOpacity>)}
                    </View>
                </View>
            })}
        </ScrollView>
    );
};

export default MatchList;
