## SDU

### 기본적인 구성

- `type`: 컴포넌트 타입
- `props`: 컴포넌트 속성
- `content`: 컴포넌트내 하위 컴포넌트가 필요한 경우(예: list 내의 item)

#### example

```text
{
  "type": # {{SDUComponentType}},
  "props": # {{SDUComponentProps}},
  "content": # {{SDUComponentType[]}},
}
```

### 사용 가능한 컴포넌트 (type 명칭)

- [text](./src/components/text)
- [heading1](./src/components/heading1)
- [heading2](./src/components/heading2)
- [heading3](./src/components/heading3)
- [toggle](./src/components/toggle)
- [numbered_list_item](./src/components/numbered-list-item)
- [bulleted_list_item](./src/components/bulleted-list-item)
- [divider](./src/components/divider)
- [image](./src/components/image)
- [callout](./src/components/callout)
- [file](./src/components/file)
- [link](./src/components/link)
- [bookmark](./src/components/bookmark)
- [table](./src/components/table)
- [quote](./src/components/quote)
- [table](./src/components/table)

### 사용 방법

```tsx
import { ServerDrivenComponent } from '@repo/sdu'

const content = [
  {
    type: 'text',
    props: { rich_text: [{ text: 'Hello, world!' }] }
  }
]

<ServerDrivenComponent content={content} />
```
