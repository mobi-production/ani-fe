import { Icon } from '@repo/ui/client'
import { Flex, Typography } from '@repo/ui/server'
import { useCallback, useMemo } from 'react'

type PaginationProps = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const pageNumbers = useMemo(() => {
    const pages: number[] = []
    const maxPagesToShow = 5
    const currentGroup = Math.floor((currentPage - 1) / maxPagesToShow)
    const startPage = currentGroup * maxPagesToShow + 1
    let endPage = startPage + maxPagesToShow - 1

    if (endPage > totalPages) {
      endPage = totalPages
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i)
    }

    return pages
  }, [currentPage, totalPages])

  const handlePrevious = useCallback(() => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }, [currentPage, onPageChange])

  const handleNext = useCallback(() => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1)
    }
  }, [currentPage, onPageChange, totalPages])

  if (totalPages === 0) return null
  return (
    <Flex
      direction='row'
      gap={12}
      align='center'>
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={`${currentPage === 1 ? 'text-neutral-90' : 'text-neutral-10'}`}>
        <Icon
          size={16}
          name='LeftOutlined'
        />
      </button>
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`${page === currentPage ? 'text-neutral-10' : 'text-neutral-90'}`}>
          <Typography
            variant='label-reading'
            fontWeight='medium'
            color='inherit'>
            {page}
          </Typography>
        </button>
      ))}

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`${currentPage === totalPages ? 'text-neutral-90' : 'text-neutral-10'}`}>
        <Icon
          size={16}
          name='RightOutlined'
        />
      </button>
    </Flex>
  )
}

export default Pagination
