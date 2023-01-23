import { Text, StyleSheet, View } from '@react-pdf/renderer'
import { config } from './config'
import { getDate } from '../utils/utilities'

const styles = StyleSheet.create({
  footer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    fontSize: config.normalFontSize,
    bottom: 15,
    left: 50,
    right: 50,
    textAlign: 'left',
    color: config.grayColor,
    borderTopWidth: 1,
    borderTopColor: '#cccccc',
    paddingTop: 5
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 10,
    left: 0,
    right: 0,
    textAlign: 'right',
    color: 'grey',
  },
})

const SectionFooter = ({ children= '', secondary = false, style = {} }) => (
    <View style={styles.footer} fixed>
    <Text>
      Generated {getDate()} by the Centurion Blockchain web
      application
    </Text>
    <Text style={styles.pageNumber}
      fixed
      render={({ pageNumber, totalPages }) =>
        `Page ${pageNumber} of ${totalPages}`
      }
    />
  </View>
)

export default SectionFooter
