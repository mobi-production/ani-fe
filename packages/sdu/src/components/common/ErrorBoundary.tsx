import { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: (props: { error: Error }) => ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('에러 발생:', error)
    console.error('에러 정보:', errorInfo)
  }

  render() {
    if (this.state.hasError && this.state.error) {
      if (this.props.fallback) {
        return this.props.fallback({ error: this.state.error })
      }
      return (
        <div className='error-boundary'>
          <h3>렌더링 중 오류가 발생했습니다</h3>
          <details>
            <summary>자세한 오류 내용</summary>
            <pre>{this.state.error?.message}</pre>
          </details>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
