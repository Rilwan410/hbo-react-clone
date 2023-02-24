import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&family=Noto+Sans:wght@100;300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&family=Raleway:wght@100;200;300;400;500;600;700&family=Sofia+Sans+Condensed:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="preload"
          as='style'
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
          integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
