import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
  Link,
  Table,
  TableBody,
  TableRow,
  TableHead,
  TableCell
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Title from '../title'
import { adminApiNames } from './../../../apis'
import { reducerNames } from './../../../setup'
import tableConfig, { valueType } from './tableConfig'
import CreateProduct from './../../createProduct'
import {
  ComponentToDialog
} from 'root/utils'
import { 
  updateProductTableConfig
} from './../../../actions/content'

const CreateProductDialog = ComponentToDialog(CreateProduct)

function preventDefault (event) {
  event.preventDefault()
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  tableHead: {
    backgroundColor: 'steelblue',
    // boxShadow: '0px 5px steelblue',
    borderBottom: 'solid 3px black'
  },
  headerCellText: {
    color: 'white'
  },
  tableRow: {
    '&:nth-child(even)': {
      backgroundColor: 'lightgray'
    }
  },
}))

const Products = (props) => {
  const classes = useStyles()
  const { 
    productsData: {
      listData = [],
      tableConfig: { columns = [] }
    },
    text = {},
    updateTableConfig
  } = props
  
  useEffect(() => {
    updateTableConfig && typeof updateTableConfig === 'function' && updateTableConfig(tableConfig)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const renderHeader = () => {
    return (
      <TableHead className={classes.tableHead}>
        <TableRow>
          {columns.map((col, index) => (
            !col.hide && <TableCell
              key={`product-table-header-${col.key || index}`}
              align={col.align || 'left'}
              className={classes.headerCellText}
            >
              {text[col.key] || col.name}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    )
  }

  const renderBody = () => {
    return (
      <TableBody className={classes.tableBody}>
        {listData.map((dataRow, index) => (
          <TableRow key={`products-row-${dataRow.key || index}`} className={classes.tableRow}>
            {columns.map((col, index) => (
              !col.hide && <TableCell
                key={`product-table-cell-${col.key || index}`}
                align={col.align || 'left'}
              >
                {col.valueType === valueType.text && dataRow[col.key]}
                {col.valueType === valueType.number && dataRow[col.key]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    )
  }

  return (
    <React.Fragment>
      <Title>{text.product || 'Products'}</Title>
      <CreateProductDialog
        text={{
          cancel: 'Cancel',
          confirm: 'Create',
          title: 'Create Product'
        }}
      />
      <Table size='small'>
        {renderHeader()}
        {renderBody()}
      </Table>
      <div className={classes.seeMore}>
        <Link color='primary' href='#' onClick={preventDefault}>
          {text.loadMore || 'Load More...'}
        </Link>
      </div>
    </React.Fragment>
  )
}

const mapStates = (state) => ({
  productsData: state[reducerNames.adminContent][adminApiNames.products],
})

const mapActions = {
  updateTableConfig: updateProductTableConfig
}

export default connect(mapStates, mapActions)(Products)