import SDUBookmark from './bookmark'
import SDUBulletedListItem from './bulleted-list-item'
import SDUButton from './button'
import SDUCallout from './callout'
import SDUCheckbox from './checkbox'
import SDUCode from './code'
import SDUColumnList from './column-list'
import SDUDivider from './divider'
import SDUFile from './file'
import SDUHeading1 from './heading1'
import SDUHeading2 from './heading2'
import SDUHeading3 from './heading3'
import SDUImage from './image'
import SDUNumberedListItem from './numbered-list-item'
import SDUQuote from './quote'
import SDUTable from './table'
import SDUTableOfContent from './table-of-content'
import SDUText from './text'
import SDUToggle from './toggle'

export const SDUComponents = {
  heading_1: SDUHeading1,
  heading_2: SDUHeading2,
  heading_3: SDUHeading3,
  toggle: SDUToggle,
  text: SDUText,
  divider: SDUDivider,
  bulleted_list_item: SDUBulletedListItem,
  numbered_list_item: SDUNumberedListItem,
  image: SDUImage,
  file: SDUFile,
  bookmark: SDUBookmark,
  quote: SDUQuote,
  callout: SDUCallout,
  table: SDUTable,
  button: SDUButton,
  checkbox: SDUCheckbox,
  table_of_content: SDUTableOfContent,
  code: SDUCode,
  column_list: SDUColumnList
} as const
