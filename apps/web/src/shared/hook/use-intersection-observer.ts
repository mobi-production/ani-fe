import { useEffect, useRef, useState } from 'react'

type UseIntersectionObserverProps = {
  /** 관찰 대상이 얼마나 보여야 콜백을 실행할지 결정하는 값 (0.0 - 1.0) */
  threshold?: number
  /** 관찰 대상의 조상 요소. null인 경우 브라우저 뷰포트가 기준 */
  root?: Element | null
  /** root 요소의 마진 값. CSS margin 형식의 문자열 */
  rootMargin?: string
  /** 관찰할 대상 요소의 ref */
  targetRef: React.RefObject<Element>
}

/**
 * 요소의 가시성을 관찰하는 Intersection Observer 훅
 *
 * @returns 가시성 여부
 *
 * @example
 * ```tsx
 * // 기본 div 요소에 사용
 * function Component() {
 *   const divRef = useRef<HTMLDivElement>(null)
 *   const { isIntersecting } = useIntersectionObserver({
 *     targetRef: divRef
 *   })
 *
 *   return (
 *     <div ref={divRef}>
 *       {isIntersecting ? '화면에 보임' : '화면에 안 보임'}
 *     </div>
 *   )
 * }
 *
 * // 이미지 지연 로딩에 사용
 * function LazyImage() {
 *   const imgRef = useRef<HTMLImageElement>(null)
 *   const { isIntersecting } = useIntersectionObserver({
 *     targetRef: imgRef,
 *     threshold: 0.1
 *   })
 *
 *   return (
 *     <img
 *       ref={imgRef}
 *       src={isIntersecting ? '/image.jpg' : ''}
 *       alt="Lazy loaded image"
 *     />
 *   )
 * }
 * ```
 */
export function useIntersectionObserver<T extends Element = Element>({
  threshold = 0.5,
  root = null,
  rootMargin = '0px',
  targetRef
}: UseIntersectionObserverProps) {
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry) {
          setIsIntersecting(entry.isIntersecting)
        }
      },
      { threshold, root, rootMargin }
    )

    const currentTarget = targetRef.current
    if (currentTarget) {
      observer.observe(currentTarget)
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget)
      }
    }
  }, [threshold, root, rootMargin])

  return { targetRef, isIntersecting }
}
