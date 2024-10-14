import { Colors } from '@/constants/Colors'
import { GestureResponderEvent, Image, StyleSheet, TouchableOpacity, View, ImageProps } from 'react-native'

type ButtonProps = { 
    image: ImageProps,
    size: number,
    onPress: (event: GestureResponderEvent) => void
}

export function RoundedButton(props: ButtonProps) {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={[
            styles.roundedButton,
            { height: props.size, width: props.size, borderRadius: props.size },
            ]}>
                <Image 
                style={styles.image}
                source={props.image}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    roundedButton: {
        alignSelf: "center",
        // alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.light.tabIconDefault
    },

    image: {
        height: "75%",
        width: "75%",
        alignSelf: "center"
    }
})