import { Text, StyleSheet, View } from '@react-pdf/renderer'
import { config } from './config'
import { getDate } from '../utils/utilities'

const styles = StyleSheet.create({
  sectionHeader: {
    fontWeight: 'bold',
    margin: '5px 0',
    flex: 1,
  },
  header: {
    fontSize: 12,
    paddingTop: 60,
    textAlign: 'center',
    color: 'grey',
  },
  title: {
    fontSize: 24,
    textAlign: 'center'
  },
  author: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 10,
  },
  children: {
    paddingTop: 20,
    fontSize: 20,
    textAlign: 'center'
  },
})

const SectionHeader = ({ children= '', secondary = false, style = {} }) => (
  <View
    style={[
      styles.sectionHeader,
      {
        color: secondary ? config.primaryColor : config.blackColor,
        fontSize: secondary
          ? config.sectionTitleFontSize - 1
          : config.sectionTitleFontSize
      },
      style
    ]}>
      <Text style={styles.header} fixed>Date of NFT: {getDate()}</Text>
      <Text style={styles.title}>cNFT Certified by Centurion Blockchain</Text>
      <Text style={styles.author}>Instrument Serviced by: FCI Lender Services, Inc.</Text>
      <Text style={styles.children}>{children}</Text>
  </View>
)

export default SectionHeader
