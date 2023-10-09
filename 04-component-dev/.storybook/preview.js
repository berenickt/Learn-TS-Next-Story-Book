export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // Docs : 독자의 뷰포트나 배경색상을 사용할 떄
  viewport: {
    viewport: {
      iphonex: {
        name: 'iPone X',
        styles: {
          width: '375px',
          height: '812px',
        },
      },
    },
  },
  backgrounds: {
    values: [
      {
        name: 'gary',
        value: '#000000',
      },
    ],
  },
}
