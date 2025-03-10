import React from "react";
import {styles} from './dropDownStyles'
import arrowUp from '../assets/images/arrowup2.png'
import arrowDown from '../assets/images/arrowdown2.png'
import {View, Text, Image, TouchableOpacity} from 'react-native';

interface DropDownProps {
    selectedStatus: string,
    isDropdownOpen: boolean,
    setDropdownOpen: (isDropdownOpen: boolean) => void,
    setSelectedStatus: (selectedStatus: string) => void
}

const DropDown = ({
                      setDropdownOpen,
                      isDropdownOpen,
                      selectedStatus,
                      setSelectedStatus
                  }: DropDownProps): JSX.Element => {
    return (
        <View>
            <TouchableOpacity onPress={() => setDropdownOpen(!isDropdownOpen)} style={styles.dropDownContainer}>
                <Text style={styles.dropDownText}>{selectedStatus === "all" ? "Все статусы" : selectedStatus}</Text>
                <Image source={isDropdownOpen ? arrowUp : arrowDown} style={styles.dropDownIcon}/>
            </TouchableOpacity>
            {isDropdownOpen && (
                <View style={styles.dropDownList}>
                    {['all', 'Ongoing', 'Finished', 'Scheduled'].map(status => (
                        <TouchableOpacity key={status} onPress={() => {
                            setSelectedStatus(status);
                            setDropdownOpen(false);
                        }}>
                            <Text style={styles.dropDownItem}>{status === "all" ? "Все статусы" : status}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </View>
    );
};

export default DropDown;
