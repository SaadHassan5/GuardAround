import React from "react";
import { StyleSheet } from "react-native";
import { palette } from "../../config/colors";
import { HP, WP } from "../../config/screen-ratio";
// import { HP, WP } from "../../config/screen-ratio";
// import { palette } from '../../config/colors'
export const IncidentStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: palette.white,
        // paddingHorizontal:WP((10/375)*100),
        // paddingHorizontal:WP(2.5)

    },
})