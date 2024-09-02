// import '../styles/globals.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export default function App({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: "https://backendonline.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(), // computer 메모리에 백엔드에서 받아온 데이터 임시 저장
  });
  return (
    <div>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </div>
  );
}
