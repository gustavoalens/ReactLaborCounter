import { Colors } from '@/constants/Colors'
import { Component, ReactNode, Children, cloneElement } from 'react'
import { TouchableOpacity, View, GestureResponderEvent, StyleSheet, Text, ViewStyle, StyleProp } from 'react-native'

type CardProps = {
    children: ReactNode
    contentStyle?: StyleProp<ViewStyle>
    onPress?: (event: GestureResponderEvent) => void
}

export default class CardBase extends Component<CardProps> {
    constructor(props: CardProps) {
        super(props)
    }

    render(): ReactNode {
        if (!this.props.onPress) {
            return (
                <View
                style = { styles.cardStyle }>
                    {  <this.ContentView contentStyle = {this.props.contentStyle } children={ this.props.children } /> }
                </View>
            )
        }
        return (
            <TouchableOpacity 
            onPress = { this.props.onPress }
            style = { styles.cardStyle }
            >
                {  <this.ContentView contentStyle = {this.props.contentStyle } children={ this.props.children } /> }
            </TouchableOpacity>
        )
    }

    ContentView(props: CardProps): ReactNode {
        return (
            <View style = { props.contentStyle }>
                { props.children }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cardStyle: {
        borderRadius: 8,
        backgroundColor: Colors.light.tabIconDefault,
        padding: 6
    }
})