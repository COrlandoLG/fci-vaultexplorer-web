import { StyleSheet } from '@react-pdf/renderer'
import { Image } from "@react-pdf/renderer";
import img1 from "../images/cNFT.png";

const styles = StyleSheet.create({
    coin: {
        position: 'absolute',
        aspectRatio: 1,
        height:"150px",
        zIndex: 1
    },
})

const Coin = ({ style = {} }) => (
    <Image src={img1} style={[styles.coin,style]}></Image>
)

export default Coin
