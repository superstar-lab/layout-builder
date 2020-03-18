import Document, { Html, Head, Main, NextScript } from "next/document";
import { Flex, Box, Link, Text } from "rebass";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <meta
          key="viewport"
          name="viewport"
          content="initial-scale=1, minimum-scale=1, width=device-width"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans"
          rel="stylesheet"
        />

        <body>
          <Flex px={2} color="white" bg="black" alignItems="center">
            <Text p={3} fontWeight="bold">
              Rebass
            </Text>
            <Box mx="auto" />
            <Text p={1} color="white">
                Options
            </Text>
          </Flex>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
