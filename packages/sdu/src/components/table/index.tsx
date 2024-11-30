import { ColorStyle } from '@repo/sdu/types/common'
import cn from '@repo/util/cn'

import SDUText, { TextProps } from '../text'

type Props = {
  has_column_header?: boolean
  has_row_header?: boolean
  rows: {
    type: 'table_row'
    table_row: {
      cells: Array<{
        rich_text: TextProps[]
        style?: ColorStyle
      }>
    }
  }[]
}

const SDUTable = ({ has_column_header, has_row_header, rows }: Props) => {
  return (
    <div className='w-full overflow-x-auto'>
      <table className='min-w-full border-collapse border border-gray-200'>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.table_row.cells.map((cell, cellIndex) => {
                const isHeader =
                  (has_column_header && rowIndex === 0) || (has_row_header && cellIndex === 0)
                return (
                  <td
                    key={cellIndex}
                    className={cn(
                      'border border-neutral-95 p-4',
                      isHeader && 'bg-background-alternative'
                    )}
                    style={cell.style}>
                    <SDUText
                      rich_text={cell.rich_text}
                      tag='span'
                    />
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SDUTable
