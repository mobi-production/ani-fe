# Server Driven Components 사용 가이드

Server Driven Components는 JSON 형식의 데이터를 기반으로 UI를 동적으로 렌더링하는 방식입니다.

## 기본 구조

모든 컴포넌트는 다음과 같은 기본 구조를 따릅니다:

```json
{
  "type": "컴포넌트타입",
  "props": {
    // 컴포넌트의 props
  },
  "children": [] // 선택적 - 중첩된 컴포넌트들
}
```

## 컴포넌트 예시

### RadioGroup

RadioGroup은 선택 옵션들을 그룹화하는 컴포넌트입니다.

```json
{
  "type": "RadioGroup",
  "props": {
    "defaultValue": "option1",
    "name": "options"
  },
  "children": [
    {
      "type": "RadioGroupItem",
      "props": {
        "value": "option1",
        "children": "Option 1"
      }
    },
    {
      "type": "RadioGroupItem",
      "props": {
        "value": "option2",
        "children": "Option 2"
      }
    }
  ]
}
```

#### Props

- `defaultValue`: 기본 선택값
- `name`: 라디오 그룹의 이름
- `onChange`: 값 변경 시 호출될 함수 (선택적)

### Typography

텍스트를 표시하는 컴포넌트입니다.

```json
{
  "type": "Typography",
  "props": {
    "variant": "title-1",
    "children": "제목"
  }
}
```

#### Props

- `variant`: 텍스트 스타일 ('title-1', 'title-2', 'body' 등)
- `color`: 텍스트 색상 (선택적)

## 사용 방법

React 컴포넌트에서 다음과 같이 사용할 수 있습니다:

```tsx
import { renderComponents } from '@repo/ui'

const jsonData = {
  type: 'RadioGroup',
  props: {
    defaultValue: 'option1'
  },
  children: [
    {
      type: 'RadioGroupItem',
      props: {
        value: 'option1',
        children: 'Option 1'
      }
    }
  ]
}

function MyComponent() {
  return renderComponents(jsonData)
}
```

## 중첩 컴포넌트

컴포넌트들은 `children` 배열을 통해 중첩될 수 있습니다:

```json
{
  "type": "Typography",
  "props": {
    "variant": "title-1"
  },
  "children": [
    {
      "type": "Typography",
      "props": {
        "variant": "body",
        "children": "하위 텍스트"
      }
    }
  ]
}
```

## 주의사항

1. 모든 필수 props는 반드시 포함되어야 합니다
2. `type`은 지원되는 컴포넌트 타입이어야 합니다
3. `children`이 문자열인 경우 직접 props에 포함시킬 수 있습니다

## 지원되는 컴포넌트 목록

- RadioGroup
  - RadioGroupItem
- Typography
- SpacingBlock

## TypeScript 지원

컴포넌트 타입 정의를 위해 다음과 같은 타입을 제공합니다:

```typescript
import type { ServerDrivenComponentType } from '@repo/ui/types'
```

## 작성하는 방법

1. 공통된 컴포넌트의 경우 `packages/ui/src`내에 작성합니다.
2. 컴포넌트의 규모에 따라 `atoms`, `molecules`로 나누어 작성합니다.
3. 작성된 컴포넌트의 정보를 rednerComponents 함수에 추가합니다.
4. 작성된 컴포넌트의 타입을 server-driven.ts에 추가합니다.
5. 외부에서도 사용이 편하도록 컴포넌트의 정보를 `export`합니다.

**주의 사항**

컴포넌트를 작성하기 위해서는 서버와 프론트간의 긴밀한 개발이 이루어져야 합니다. 때문에 스토리북을 통해 컴포넌트를 작성하는 것을 권장합니다.
또한 example.json 파일을 작성하여 오고 가는 데이터를 확인할 수 있도록 문서화를 신경 써주세요.

## 이벤트를 전달하는 방법

> 서버에서 전달하는 이벤트를 적용시키는 방법은 현재 개발 중입니다.
