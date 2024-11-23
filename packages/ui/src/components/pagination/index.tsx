import cn from '@repo/util/cn'
import { ComponentProps, createContext, ReactNode, useContext, useMemo, useState } from 'react'

import Icon from '../icon'
import Typography from '../typography'

export type PaginationContextProps = {
  currentPage: number
  setCurrentPage: (page: number) => void
  itemsPerPage: number
  totalItems: number
  totalSection: number
  currentSection: number
  currentGroupStart: number
  currentGroupEnd: number
}

const PaginationContext = createContext<PaginationContextProps | undefined>(undefined)

const DEFAULT_CURRENT_PAGE = 1

type PaginationProviderProps = {
  totalItems: number
  children: ReactNode
  itemsPerPage: number
}

const PaginationProvider = ({ totalItems, itemsPerPage, children }: PaginationProviderProps) => {
  const [currentPage, setCurrentPage] = useState(DEFAULT_CURRENT_PAGE)

  const totalSection = useMemo(
    () => Math.ceil(totalItems / itemsPerPage),
    [totalItems, itemsPerPage]
  )
  const currentSection = useMemo(
    () => Math.ceil(currentPage / itemsPerPage),
    [currentPage, itemsPerPage]
  )

  const currentGroupStart = useMemo(
    () => (currentSection - 1) * itemsPerPage + 1,
    [currentSection, itemsPerPage]
  )
  const currentGroupEnd = useMemo(
    () => Math.min(currentSection * itemsPerPage, totalItems),
    [currentSection, itemsPerPage, totalItems]
  )

  return (
    <PaginationContext.Provider
      value={{
        itemsPerPage,
        currentPage,
        setCurrentPage,
        totalItems,
        totalSection,
        currentSection,
        currentGroupStart,
        currentGroupEnd
      }}>
      {children}
    </PaginationContext.Provider>
  )
}

const usePagination = (): PaginationContextProps => {
  const context = useContext(PaginationContext)
  if (!context) {
    throw new Error('usePagination must be used within a PaginationProvider')
  }
  return context
}

type PaginationProps = ComponentProps<'div'> & {
  totalItems: number
  itemsPerPage: number
}

function Pagination({ totalItems, itemsPerPage, className, ...props }: PaginationProps) {
  return (
    <PaginationProvider
      totalItems={totalItems}
      itemsPerPage={itemsPerPage}>
      <div
        className={cn('relative flex', className)}
        {...props}
      />
    </PaginationProvider>
  )
}

function Prev({ onClick, ...props }: ComponentProps<'button'>) {
  const { currentPage, setCurrentPage, itemsPerPage } = usePagination()

  const onPrev = () => {
    const isStartOfGroup = (currentPage - 1) % itemsPerPage === 0
    const newPage = currentPage - 1

    if (newPage < 1) return

    if (isStartOfGroup) {
      // 그룹 시작일 경우, 이전 그룹의 마지막 페이지로 이동
      setCurrentPage(newPage)
    } else {
      // 같은 그룹 내에서 한 페이지 뒤로 이동
      setCurrentPage(newPage)
    }
  }
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPrev()
    if (onClick) {
      onClick(event)
    }
  }

  const isButtonDisabled = useMemo(() => currentPage === 1, [currentPage])

  return (
    <button
      onClick={handleClick}
      disabled={isButtonDisabled}
      {...props}>
      <Icon
        name='LeftOutlined'
        className={isButtonDisabled ? 'text-label-assistive' : 'text-label-normal'}
      />
    </button>
  )
}

function Next({ onClick, ...props }: ComponentProps<'button'>) {
  const { currentPage, setCurrentPage, totalItems } = usePagination()

  const onNext = () => {
    if (currentPage === totalItems) return
    setCurrentPage(currentPage + 1)
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onNext()
    if (onClick) {
      onClick(event)
    }
  }

  const isButtonDisabled = useMemo(() => currentPage === totalItems, [currentPage, totalItems])

  return (
    <button
      onClick={handleClick}
      disabled={isButtonDisabled}
      {...props}>
      <Icon
        name='RightOutlined'
        className={isButtonDisabled ? 'text-label-assistive' : 'text-label-normal'}
      />
    </button>
  )
}

function PageButton({ value, onClick, ...props }: ComponentProps<'button'>) {
  const { currentPage, setCurrentPage } = usePagination()

  const pageValue = Number(value)
  const onClickPage = () => setCurrentPage(pageValue)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClickPage()
    if (onClick) {
      onClick(event)
    }
  }

  const isButtonDisabled = useMemo(() => currentPage === pageValue, [currentPage, pageValue])

  return (
    <button
      onClick={handleClick}
      disabled={isButtonDisabled}
      className='flex min-w-4 items-center justify-center'
      {...props}>
      <Typography
        variant='caption-1'
        fontWeight='medium'
        color={isButtonDisabled ? 'assistive' : 'normal'}>
        {pageValue}
      </Typography>
    </button>
  )
}

function PageButtonList() {
  const { itemsPerPage, currentGroupStart, currentGroupEnd } = usePagination()

  // 현재 그룹에 해당하는 페이지 배열 생성

  const pageArray = useMemo(
    () => Array.from({ length: itemsPerPage }, (_, index) => currentGroupStart + index),
    [currentGroupStart, currentGroupEnd]
  )

  return (
    <div className='flex gap-[0.75rem]'>
      {pageArray.map((page) => (
        <PageButton
          value={page}
          key={page}
        />
      ))}
    </div>
  )
}

Pagination.Prev = Prev
Pagination.Next = Next
Pagination.PageButton = PageButton
Pagination.PageButtonList = PageButtonList

export default Pagination
