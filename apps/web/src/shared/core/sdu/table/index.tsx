import { Typography } from '@repo/ui/server'
import SDUParagraph, { textVariants } from '../paragraph'

interface TableProps {
  type: 'table'
  has_column_header?: boolean
  has_row_header?: boolean
  rows: {
    type: 'table_row'
    table_row: {
      cells: Array<
        Array<{
          type: 'text'
          props: {
            text: string
            link: string | null
            bold: boolean
            italic: boolean
            strikethrough: boolean
            underline: boolean
            code: boolean
          }
        }>
      >
    }
  }[]
}

const SDUTable = ({ has_column_header, has_row_header, rows }: TableProps) => {
  return (
    <div className='w-full overflow-x-auto'>
      <table className='min-w-full border-collapse border border-gray-200'>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.table_row.cells.map((cell, cellIndex) => {
                const isColumnHeader = has_column_header && rowIndex === 0
                const isRowHeader = has_row_header && cellIndex === 0

                return (
                  <td
                    key={cellIndex}
                    className={`border border-neutral-95 p-4 ${
                      isColumnHeader || isRowHeader ? 'bg-background-alternative' : ''
                    } `}>
                    {cell.map((content, contentIndex) => (
                      <Typography
                        key={contentIndex}
                        variant='body-2-reading'
                        fontWeight={content.props.bold ? 'semibold' : 'medium'}
                        className={textVariants({
                          link: !!content.props.link,
                          strikethrough: content.props.strikethrough,
                          underline: content.props.underline,
                          code: content.props.code,
                          italic: content.props.italic
                        })}
                        asChild>
                        {content.props.link ? (
                          <a href={content.props.link}>{content.props.text}</a>
                        ) : (
                          <span>{content.props.text}</span>
                        )}
                      </Typography>
                    ))}
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
