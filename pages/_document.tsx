import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <div id="overlays" />
      <Head />
      <body className="bg-slate-300">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
