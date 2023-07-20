import React, { useEffect, useState } from "react";
import { hot } from "react-hot-loader/root";
import { ExamplesComponent } from "./shared/Examples";
import { Layout } from "./shared/Layout";
import { Header } from "./shared/Header";
import { Content } from "./shared/Content";
import { CardsList } from "./shared/CardsList";
import "./main.global.css";
//import { useToken } from "./hooks/useToken";
import { tokenContext } from "./shared/context/tocenContext";
import { UserContextProvider } from "./shared/context/userContext";
import { PostsContextProvider } from "./shared/context/postsContext";
import { commentContext } from "./shared/context/commentContext";
import { composeWithDevTools } from "@redux-devtools/extension";
import { Action, ActionCreator, AnyAction, Middleware, Reducer, applyMiddleware, createStore } from "redux";
import { Provider, useDispatch } from "react-redux";
import { RootState, rootReducer, updateToken } from "./store";
import { useToken } from "./hooks/useToken";
import thunk, { ThunkAction } from "redux-thunk";



const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
))

export const timeout = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispath, getState) => {
  dispath({type: 'START'});
  setTimeout(
    () => {
      dispath({type: 'FINISH'})
    }, 2000
  )
}

function AppComponent() {
  const [valueControled, setValueControled] = useState("");
  const CommentProvider = commentContext.Provider;

  useToken(store);
  
  return (
    <Provider store={store}>
      <CommentProvider value={{
          valueControled: valueControled,
          onChange: setValueControled
        }
      }>
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
      </CommentProvider>
    </Provider>
  );
}

export const App = hot(() => <AppComponent />);
