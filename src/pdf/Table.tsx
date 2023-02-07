import { View, StyleSheet, Text } from '@react-pdf/renderer'
import { config } from './config'

const styles = StyleSheet.create({
  table: {
    width: '100%'
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: config.primaryColorTable,
    color: '#fff',
    padding: 3
  },
  headerCell: {
    fontWeight: 'heavy',
    white: '#fff',
    width: '11.11%',
    fontSize: config.normalFontSize
  },
  body: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#f5f5f5'
  },
  cell: {
    width: '12.5%',
    fontSize: 10,
    textAlign: 'center',
    fontFamily: 'Times-Roman'
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5px 3px'
  }
})

const Table = ({children}:any) => <View style={styles.table}>{children}</View>

const TableHeader = ({ children }:any) => (
  <View style={styles.header}>{children}</View>
)

const TableHeaderCell = ({ children }:any) => (
  <Text style={styles.headerCell}>{children}</Text>
)

const TableBody = ({ children }:any) => <View style={styles.body}>{children}</View>

const TableRow = ({ children }:any) => <View style={styles.row}>{children}</View>

const TableCell = ({ children }:any) => <Text style={styles.cell}>{children}</Text>

Table.Header = TableHeader
Table.Body = TableBody
Table.Row = TableRow
Table.HeaderCell = TableHeaderCell
Table.Cell = TableCell

export default Table
