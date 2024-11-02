# UI Style System

## 시작하기

스타일 시스템을 사용하기 위해 아래와 같이 사용하세요:

## Typography

텍스트 스타일링을 위한 mixin입니다.

### 기본 사용법
```scss
.element {
  @include text('스타일/웨이트', '색상코드');
}
```

### 사용 가능한 스타일
- Display: `display1`, `display2`
- Title: `title1`, `title2`, `title3`
- Heading: `heading1`, `heading2`
- Body: 
  - Normal: `body1-normal`, `body2-normal`
  - Reading: `body1-reading`, `body2-reading`
- Label:
  - Normal: `label1-normal`
  - Reading: `label1-reading`
- Caption: `caption1`, `caption2`

### 사용 가능한 웨이트
- `Regular`
- `Medium`
- `Bold`
- `SemiBold`

### 예시
```scss
.title {
  @include text('display1/Bold');
}

.body {
  @include text('body1-normal/Regular', 'primary');
}

.caption {
  @include text('caption1/Medium');
}
```

## Breakpoints

반응형 디자인을 위한 미디어 쿼리 mixin입니다.

### 사용 가능한 브레이크포인트
- `mobile`: < 768px
- `tablet`: 768px - 1023px
- `desktop`: >= 1024px

### 사용법
```scss
.element {
  @include mobile {
    // 모바일 스타일
  }

  @include tablet {
    // 태블릿 스타일
  }

  @include desktop {
    // 데스크톱 스타일
  }
}
```

### 복합 사용 예시
```scss
.responsive-text {
  @include text('display1/Bold');
  
  @include mobile {
    @include text('display2/Bold');
  }
  
  @include tablet {
    @include text('title1/Medium');
  }
}
```

## 변수 시스템

### 색상
_아직 추가를 하지 않았습니다._
```scss
.element {
  color: var(--color-primary);
  background: var(--color-background);
}
```

### 타이포그래피 변수
각 타이포그래피 스타일은 다음 속성을 포함합니다:
- `font-size`
- `line-height`
- `letter-spacing`

```scss
.custom-style {
  font-size: var(--display1-font-size);
  line-height: var(--display1-line-height);
  letter-spacing: var(--display1-letter-spacing);
}
```

## 주의사항
- 모든 스타일 값은 variables.scss에서 관리됩니다
- 직접적인 값 수정보다는 제공된 mixin 사용을 권장합니다
- 반응형 디자인 시 mobile-first 접근을 권장합니다