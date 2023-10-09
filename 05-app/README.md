# 1. TypeScript와 React/Next.js로 만드는 실전 웹 애플리케이션

- 1판에서의 업데이트

  - [빌드가 실패하는 문제 수정](https://github.com/moseskim/ts-nextbook-app/pull/6) (일본어))
  - [Storybook이 최신 Next.js에서 동작하지 않는 문제 수정](https://github.com/moseskim/ts-nextbook-app/pull/5) (일본어)

- 환경
  - Node.js: 16.14.0
  - Next.js: 12.2.3
  - React: 18.2.0

---

# 3. 설치

```bash
npm install
```

---

# 4. 환경 변수 설정

.env를 연다

```
API_BASE_URL=<백엔드 API로의 기본 URL 설정>
NEXT_PUBLIC_API_BASE_PATH=/api/proxy
```

---

# 5. 개발 서버 기동

개발 서버를 기동하고, http://localhost:3000/ 에 접속한다

```bash
npm run dev
```

---

# 6. Storybook 기동

Storybook을 기동하고, http://localhost:6006/ 에 접속한다

```bash
npm run storybook
```

---

# 7. 테스트 실행

단위 테스트 실행

```bash
npm run test
```

---

# 8. 소스 코드 린터/포매터

소스 코드를 린터로 확인

```bash
npm run lint
```

소스 코드를 포매터로 정리

```bash
npm run format
```

---

# 9. 디렉터리 구성

간단하게 디렉터리 구성을 다음과 같이 설명합니다.

```
├── .editorconfig
├── .env  <-- 환경 변수
├── .env.production  <-- 프러덕션용 환경 변수
├── .eslintrc.json  <-- ESLint 설정 파일
├── README.md
├── jest.config.js  <-- Jest 설정 파일
├── jest.setup.js  <-- 테스트 파일이 실행되기 전에 실행된다
├── next-env.d.ts
├── next.config.js  <-- Next.js 설정 파일
├── package-lock.json
├── package.json
├── public
├── src
│   ├── components  <-- Presentational Components
│   ├── containers  <-- Container Compoments
│   ├── contexts  <-- React Context
│   ├── pages  <-- Next.js 페이지
│   ├── services  <-- Web API Client
│   ├── themes  <-- styled-components 테마
│   ├── types  <-- 타입 정의
│   └── utils  <-- 범용 함수
└── tsconfig.json
```

---

# 10. src 디렉터리 구성 상세

```
📦src
 ┣ 📂components
 ┃ ┣ 📂atoms
 ┃ ┃ ┣ 📂AppLogo
 ┃ ┃ ┃ ┣ 📜index.stories.tsx
 ┃ ┃ ┃ ┗ 📜index.tsx <-- 📌 앱 로고
 ┃ ┃ ┣ 📂Badge
 ┃ ┃ ┃ ┣ 📜index.stories.tsx
 ┃ ┃ ┃ ┗ 📜index.tsx <-- 📌 뱃지
 ┃ ┃ ┣ 📂BreadcrumbItem
 ┃ ┃ ┃ ┣ 📜index.stories.tsx
 ┃ ┃ ┃ ┗ 📜index.tsx <-- 📌 빵 부스러기(crumb) 아이템
 ┃ ┃ ┣ 📂Button
 ┃ ┃ ┃ ┣ 📜index.spec.tsx
 ┃ ┃ ┃ ┣ 📜index.stories.tsx
 ┃ ┃ ┃ ┗ 📜index.tsx <-- 📌 버튼
 ┃ ┃ ┣ 📂IconButton
 ┃ ┃ ┃ ┣ 📜index.stories.tsx
 ┃ ┃ ┃ ┗ 📜index.tsx <-- 📌 아이콘 버튼
 ┃ ┃ ┣ 📂Input
 ┃ ┃ ┃ ┣ 📜index.stories.tsx
 ┃ ┃ ┃ ┗ 📜index.tsx <-- 📌 인풋
 ┃ ┃ ┣ 📂RectLoader
 ┃ ┃ ┃ ┣ 📜index.stories.tsx
 ┃ ┃ ┃ ┗ 📜index.tsx <-- 📌 직선 로더(짐을 싣는 사람, 장전자)
 ┃ ┃ ┣ 📂ScaleImage
 ┃ ┃ ┃ ┣ 📜index.stories.tsx
 ┃ ┃ ┃ ┗ 📜index.tsx <-- 📌 크기 이미지
 ┃ ┃ ┣ 📂Separator
 ┃ ┃ ┃ ┣ 📜index.stories.tsx
 ┃ ┃ ┃ ┗ 📜index.tsx <-- 📌 구분자
 ┃ ┃ ┣ 📂ShapeImage
 ┃ ┃ ┃ ┣ 📜index.stories.tsx
 ┃ ┃ ┃ ┗ 📜index.tsx <-- 📌 공유 이미지
 ┃ ┃ ┣ 📂Spinner
 ┃ ┃ ┃ ┣ 📜index.stories.tsx
 ┃ ┃ ┃ ┗ 📜index.tsx <-- 📌 스피너
 ┃ ┃ ┣ 📂Text
 ┃ ┃ ┃ ┣ 📜index.stories.tsx
 ┃ ┃ ┃ ┗ 📜index.tsx <-- 📌 텍스트
 ┃ ┃ ┣ 📂TextArea
 ┃ ┃ ┃ ┣ 📜index.stories.tsx
 ┃ ┃ ┃ ┗ 📜index.tsx <-- 📌 텍스트 영역
 ┃ ┃ ┗ 📜.gitkeep
 ┃ ┣ 📂layout
 ┃ ┃ ┣ 📂Box
 ┃ ┃ ┃ ┗ 📜index.tsx <-- 📌 Box 레이아웃
 ┃ ┃ ┣ 📂Flex
 ┃ ┃ ┃ ┗ 📜index.tsx <-- 📌 Flex 2차 레이아웃
 ┃ ┃ ┗ 📂Grid
 ┃ ┃ ┃ ┗ 📜index.tsx <-- 📌 Grid 3차 레이아웃
 ┃ ┣ 📂molecules
 ┃ ┃ ┣ 📂BadgeIconButton
 ┃ ┃ ┃ ┣ 📜index.stories.tsx
 ┃ ┃ ┃ ┗ 📜index.tsx <-- 📌 뱃지 아이콘 버튼
 ┃ ┃ ┣ 📂Breadcrumb
 ┃ ┃ ┃ ┣ 📜index.stories.tsx
 ┃ ┃ ┃ ┗ 📜index.tsx <-- 📌 빵 부스러기
 ┃ ┃ ┣ 📂CheckBox
 ┃ ┃ ┃ ┣ 📜index.stories.tsx
 ┃ ┃ ┃ ┗ 📜index.tsx <-- 📌 체크박스
 ┃ ┃ ┣ 📂Dropdown
 ┃ ┃ ┃ ┣ 📜index.spec.tsx
 ┃ ┃ ┃ ┣ 📜index.stories.tsx
 ┃ ┃ ┃ ┗ 📜index.tsx <-- 📌 드롭다운
 ┃ ┃ ┣ 📂Dropzone
 ┃ ┃ ┃ ┣ 📜index.spec.tsx
 ┃ ┃ ┃ ┣ 📜index.stories.tsx
 ┃ ┃ ┃ ┗ 📜index.tsx <-- 📌 드롭 존
 ┃ ┃ ┣ 📂FilterGroup
 ┃ ┃ ┃ ┣ 📜index.stories.tsx
 ┃ ┃ ┃ ┗ 📜index.tsx <-- 📌 필터 그룹
 ┃ ┃ ┣ 📂ImagePreview
 ┃ ┃ ┃ ┣ 📜index.stories.tsx
 ┃ ┃ ┃ ┗ 📜index.tsx <-- 📌 이미지 프리뷰
 ┃ ┃ ┣ 📂InputImages
 ┃ ┃ ┃ ┣ 📜index.stories.tsx
 ┃ ┃ ┃ ┗ 📜index.tsx <-- 📌 input 이미지
 ┃ ┃ ┗ 📜.gitkeep
 ┃ ┣ 📂organisms
 ┃ ┃ ┣ 📂CartProduct
 ┃ ┃ ┃ ┣ 📜index.stories.tsx
 ┃ ┃ ┃ ┗ 📜index.tsx <-- 📌 카트 상품
 ┃ ┃ ┣ 📂Footer
 ┃ ┃ ┃ ┣ 📜index.stories.tsx
 ┃ ┃ ┃ ┗ 📜index.tsx <-- 📌 Footer
 ┃ ┃ ┣ 📂GlobalSpinner
 ┃ ┃ ┃ ┣ 📜index.stories.tsx
 ┃ ┃ ┃ ┗ 📜index.tsx <-- 📌 GlobalSpinner
 ┃ ┃ ┣ 📂Header
 ┃ ┃ ┃ ┣ 📜index.spec.tsx
 ┃ ┃ ┃ ┣ 📜index.stories.tsx
 ┃ ┃ ┃ ┗ 📜index.tsx <-- 📌 Header
 ┃ ┃ ┣ 📂ProductCard
 ┃ ┃ ┃ ┣ 📜index.stories.tsx
 ┃ ┃ ┃ ┗ 📜index.tsx <-- 📌 제품 카드
 ┃ ┃ ┣ 📂ProductCardCarousel
 ┃ ┃ ┃ ┗ 📜index.tsx <-- 📌 상품 카드 캐러셀
 ┃ ┃ ┣ 📂ProductCardList
 ┃ ┃ ┃ ┗ 📜index.tsx <-- 📌 상품 카드 리스트
 ┃ ┃ ┣ 📂ProductForm
 ┃ ┃ ┃ ┣ 📜index.spec.tsx
 ┃ ┃ ┃ ┣ 📜index.stories.tsx
 ┃ ┃ ┃ ┗ 📜index.tsx <-- 📌 상품 폼
 ┃ ┃ ┣ 📂SigninForm
 ┃ ┃ ┃ ┣ 📜index.spec.tsx
 ┃ ┃ ┃ ┣ 📜index.stories.tsx
 ┃ ┃ ┃ ┗ 📜index.tsx <-- 📌 회원가입 폼
 ┃ ┃ ┣ 📂UserProfile
 ┃ ┃ ┃ ┣ 📜index.stories.tsx
 ┃ ┃ ┃ ┗ 📜index.tsx <-- 📌 유저 포트폴리오
 ┃ ┃ ┗ 📜.gitkeep
 ┃ ┗ 📂templates
 ┃ ┃ ┣ 📂Layout
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┗ 📜.gitkeep
 ┣ 📂containers
 ┃ ┣ 📜AddToCartButtonContainer.tsx
 ┃ ┣ 📜CartContainer.tsx
 ┃ ┣ 📜ProductCardListContainer.tsx
 ┃ ┣ 📜ProductFormContainer.tsx
 ┃ ┣ 📜SigninFormContainer.tsx
 ┃ ┣ 📜UserProductCardListContainer.tsx
 ┃ ┗ 📜UserProfileContainer.tsx
 ┣ 📂contexts
 ┃ ┣ 📂AuthContext
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂GlobalSpinnerContext
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┗ 📂ShoppingCartContext
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜reducers.ts
 ┣ 📂pages
 ┃ ┣ 📂products
 ┃ ┃ ┗ 📜[id].tsx
 ┃ ┣ 📂search
 ┃ ┃ ┗ 📜[[...slug]].tsx
 ┃ ┣ 📂users
 ┃ ┃ ┗ 📜[id].tsx
 ┃ ┣ 📜404.tsx
 ┃ ┣ 📜_app.tsx
 ┃ ┣ 📜_document.tsx
 ┃ ┣ 📜cart.tsx
 ┃ ┣ 📜index.tsx
 ┃ ┣ 📜sell.tsx
 ┃ ┗ 📜signin.tsx
 ┣ 📂services
 ┃ ┣ 📂auth
 ┃ ┃ ┣ 📜signin.ts
 ┃ ┃ ┗ 📜signout.ts
 ┃ ┣ 📂products
 ┃ ┃ ┣ 📜add-product.ts
 ┃ ┃ ┣ 📜get-all-products.ts
 ┃ ┃ ┣ 📜get-product.ts
 ┃ ┃ ┣ 📜use-product.ts
 ┃ ┃ ┗ 📜use-search.ts
 ┃ ┣ 📂purchases
 ┃ ┃ ┗ 📜purchase.ts
 ┃ ┗ 📂users
 ┃ ┃ ┣ 📜get-all-users.ts
 ┃ ┃ ┣ 📜get-user.ts
 ┃ ┃ ┗ 📜use-user.ts
 ┣ 📂themes
 ┃ ┣ 📜colors.ts
 ┃ ┣ 📜fontSizes.ts
 ┃ ┣ 📜index.ts
 ┃ ┣ 📜letterSpacings.ts
 ┃ ┣ 📜lineHeights.ts
 ┃ ┗ 📜space.ts
 ┣ 📂types
 ┃ ┣ 📜data.d.ts
 ┃ ┣ 📜index.d.ts
 ┃ ┗ 📜styles.d.ts
 ┗ 📂utils
 ┃ ┣ 📜hooks.ts
 ┃ ┣ 📜index.ts
 ┃ ┗ 📜styles.ts
```
