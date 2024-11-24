## SDU

### 기본적인 구성

- `type`: 컴포넌트 타입
- `props`: 컴포넌트 속성
- `content`: 컴포넌트내 하위 컴포넌트가 필요한 경우(예: list 내의 item)
- `order`: 렌더링 순서

예시

```text
{
  "type": # {{SDUComponentType}},
  "props": # {{SDUComponentProps}},
  "content": # {{SDUComponentType[]}},
  "order": # number
}
```

### annotation 평탄화

text 컴포넌트에서 사용되는 annotation은 평탄화해서 전달해야합니다..

```text
{
  "type": "paragraph",
  "bold": true,
  "link": "https://www.google.com",
  "strikethrough": true,
  "underline": true
}
```

### tab으로 인한 뎁스처리

tab으로 인한 뎁스처리는 style에 marginLeft로 처리합니다. 1 depth당 20px씩 증가합니다.

```json
{
  "style": { "marginLeft": "20px" }
}
```
