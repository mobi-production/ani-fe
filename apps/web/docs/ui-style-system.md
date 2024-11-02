# UI Style System

## 시작하기

스타일 시스템을 사용하기 위해 먼저 필요한 스타일 파일을 import 해야 합니다:

```scss
@use '../styles/typography/mixins' as typography;
@use '../styles/foundation/colors' as colors;
```

## Typography

텍스트 스타일링을 위한 mixin입니다.

### 기본 사용법

```scss
@use '@repo/ui/styles' as *;

.element {
  @include font('스타일');
  color: colors.$색상변수;
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

### 예시

```scss
@use '@repo/ui/styles/typography/mixins' as typography;
@use '@repo/ui/styles/foundation/colors' as colors;

.title {
  @include typography.font('display1');
  color: colors.$primary;
}

.body {
  @include typography.font('body1-normal');
  color: colors.$text;
}

.caption {
  @include typography.font('caption1');
  color: colors.$secondary;
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
@use '@repo/ui/styles/foundation/mixins' as breakpoints;

.element {
  @include breakpoints.mobile {
    // 모바일 스타일
  }

  @include breakpoints.tablet {
    // 태블릿 스타일
  }

  @include breakpoints.desktop {
    // 데스크톱 스타일
  }
}
```

### 복합 사용 예시

```scss
@use '@repo/ui/styles/typography/mixins' as typography;

.responsive-text {
  @include typography.font('display1');

  @include breakpoints.mobile {
    @include typography.font('display2');
  }

  @include breakpoints.tablet {
    @include typography.font('title1');
  }
}
```

## 색상 시스템
> 현재 색상은 추가전입니다.

### 기본 색상 변수

```scss
// 주요 색상
colors.$primary
colors.$secondary
colors.$accent

// 상태 색상
colors.$success
colors.$warning
colors.$error
colors.$info

// 중립 색상
colors.$background
colors.$surface
colors.$text
colors.$border

// 밝기 변형
colors.$primary-light
colors.$primary-dark
```

### 사용 예시

```scss
.element {
  color: colors.$primary;
  background: colors.$background;
  border: 1px solid colors.$border;
  
  &:hover {
    background: colors.$primary-light;
  }
}
```

## 주의사항

- 모든 스타일 값은 각각의 foundation 파일에서 관리됩니다
- 직접적인 값 수정보다는 제공된 mixin과 변수 사용을 권장합니다
- 반응형 디자인 시 mobile-first 접근을 권장합니다