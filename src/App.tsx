import React, { useState } from "react";
import { hot } from "react-hot-loader/root";
import { ExamplesComponent } from "./shared/Examples";
import { Layout } from "./shared/Layout";
import { Header } from "./shared/Header";
import { Content } from "./shared/Content";
import { CardsList } from "./shared/CardsList";
import "./main.global.css";
import { useToken } from "./hooks/useToken";
import { tokenContext } from "./shared/context/tocenContext";
import { UserContextProvider } from "./shared/context/userContext";
import { PostsContextProvider } from "./shared/context/postsContext";
import { commentContext } from "./shared/context/commentContext";
import { composeWithDevTools } from "@redux-devtools/extension";
import { ActionCreator, AnyAction, Reducer, createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./store";


const store = createStore(rootReducer, composeWithDevTools())

function AppComponent() {
  const [valueControled, setValueControled] = useState("");
  const CommentProvider = commentContext.Provider;

  const [token] = useToken()

  return (
    <Provider store={store}>
      <CommentProvider value={{
          valueControled: valueControled,
          onChange: setValueControled
        }
      }>
        <tokenContext.Provider value={token}>
          <UserContextProvider>
            <PostsContextProvider>
              <Layout>
                <Header />
                <Content>
                  <CardsList />
                </Content>
                <ExamplesComponent />      
              </Layout>
            </PostsContextProvider>
          </ UserContextProvider>  

        </ tokenContext.Provider>
      </CommentProvider>
    </Provider>
  );
}

export const App = hot(() => <AppComponent />);
