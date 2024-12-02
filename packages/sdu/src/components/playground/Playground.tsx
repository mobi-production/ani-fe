import { Flex, Typography } from '@repo/ui/server'
import { useState } from 'react'

import { ServerDrivenComponent } from '../..'
import ErrorBoundary from '../common/ErrorBoundary'

function Playground() {
  const [jsonInput, setJsonInput] = useState('')
  const [error, setError] = useState('')

  const handleJsonChange = (value: string) => {
    setJsonInput(value)
    if (!value.trim()) {
      setError('')
      return
    }

    try {
      JSON.parse(value)
      setError('')
    } catch (e) {
      setError('유효하지 않은 JSON 형식입니다')
    }
  }

  return (
    <Flex
      asChild
      gap={40}>
      <div className='h-dvh w-full p-5'>
        <textarea
          value={jsonInput}
          className='w-96 border border-primary-normal focus:outline-primary-strong'
          onChange={(e) => handleJsonChange(e.target.value)}
          placeholder='여기에 JSON을 입력하세요.'
        />
        {error ? (
          <div className='flex-1 text-status-error'>{error}</div>
        ) : (
          <ErrorBoundary>
            <Flex
              direction='column'
              gap={16}
              asChild>
              <div className='flex-1 border border-line-normal p-2'>
                <Typography
                  fontWeight='bold'
                  variant='body-1-normal'>
                  결과 미리보기
                </Typography>
                {jsonInput && !error && <ServerDrivenComponent content={JSON.parse(jsonInput)} />}
              </div>
            </Flex>
          </ErrorBoundary>
        )}
      </div>
    </Flex>
  )
}

export default Playground
