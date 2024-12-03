import { Flex } from '@repo/ui/server'
import { useState } from 'react'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import jsx from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript'
import typescript from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import SDUText, { TextProps } from '../text'

SyntaxHighlighter.registerLanguage('jsx', jsx)
SyntaxHighlighter.registerLanguage('typescript', typescript)

type CodeText = {
  text: string
  blank?: boolean
}

type Props = {
  caption: TextProps[]
  code: {
    text: CodeText[]
    language: string
    example?: {
      input: string
      output: string
    }
  }
}

function SDUCode({ caption, code }: Props) {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)

  const language = code.language?.toLowerCase()

  const resolvedLanguage =
    language === 'tsx' ? 'typescript' : language === 'jsx' ? 'javascript' : language || 'plaintext'

  const blankFields = code.text
    .map((item, index) => ({ item, originalIndex: index }))
    .filter(({ item }) => item.blank)

  const handleSubmit = () => {
    const isAllCorrect = blankFields.every(
      ({ item, originalIndex }) => answers[originalIndex] === item.text
    )
    setIsCorrect(isAllCorrect)
  }

  const getCodeString = () => {
    return code.text
      .map((item, index) => {
        if (item.blank) {
          return answers[index] || '_____'
        }
        return item.text
      })
      .join('')
  }

  const getCurrentExample = () => {
    if (!code.example) return null

    const currentCode = getCodeString()
    try {
      const fn = new Function('return ' + currentCode)()
      const result = fn(code.example.input)
      return result
    } catch (e) {
      return (e as Error).message
    }
  }

  return (
    <div>
      <div className='overflow-hidden rounded-lg border border-gray-200'>
        <Flex
          align='center'
          justify='between'
          className='bg-gray-50 p-4'>
          <span className='text-sm text-gray-600'>
            <SDUText
              tag='span'
              rich_text={caption}
            />
          </span>
          <button
            onClick={handleSubmit}
            className='rounded bg-blue-500 px-3 py-1 text-sm text-white transition-colors hover:bg-blue-600'>
            제출
          </button>
        </Flex>

        <div className='bg-[#282c34] p-4'>
          <Flex
            direction='row'
            wrap='wrap'
            gap={2}>
            {blankFields.map(({ originalIndex }, blankIndex) => (
              <Flex
                key={originalIndex}
                align='center'
                gap={2}>
                <span className='text-sm text-white/60'>빈칸 {blankIndex + 1}:</span>
                <div className='group relative'>
                  <input
                    type='text'
                    value={answers[originalIndex] || ''}
                    onChange={(e) => {
                      setAnswers((prev) => ({
                        ...prev,
                        [originalIndex]: e.target.value
                      }))
                    }}
                    className='w-32 rounded border border-white/20 bg-white/10 px-2 py-0.5 font-mono text-sm text-white placeholder:text-[12px] focus:border-white/40 focus:outline-none'
                    placeholder='답을 입력하세요'
                  />
                </div>
              </Flex>
            ))}
          </Flex>

          <SyntaxHighlighter
            language={resolvedLanguage}
            style={atomOneDark}
            customStyle={{
              padding: '0',
              fontSize: '0.875rem',
              lineHeight: '1.6',
              margin: 0,
              borderRadius: '0.375rem'
            }}
            wrapLines={true}
            showLineNumbers={true}
            lineNumberStyle={{
              minWidth: '2.5em',
              paddingRight: '1em',
              textAlign: 'right',
              color: '#666'
            }}>
            {getCodeString()}
          </SyntaxHighlighter>

          {code.example && (
            <div className='mt-4 border-t border-white/10 pt-4 text-white/80'>
              <div className='mb-2 text-sm'>예시:</div>
              <div className='rounded bg-black/30 p-3 font-mono text-sm'>
                <div>입력값: {code.example.input}</div>
                <div>기대 결과: {code.example.output}</div>
                <div className='mt-2 border-t border-white/10 pt-2'>
                  현재 결과: {getCurrentExample()}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {isCorrect !== null && (
        <div className={`p-3 ${isCorrect ? 'text-primary-normal' : 'text-status-error'}`}>
          {isCorrect ? '정답입니다! 🎉' : '틀렸습니다. 다시 시도해보세요.'}
        </div>
      )}
    </div>
  )
}

export default SDUCode
