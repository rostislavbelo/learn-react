import React, {useEffect, useState } from "react";
import { hot } from "react-hot-loader/root";
import { ExamplesComponent } from "./shared/Examples";
import { Layout } from "./shared/Layout";
import { Header } from "./shared/Header";
import { Content } from "./shared/Content";
import { CardsList } from "./shared/CardsList";
import "./main.global.css";
import { UserContextProvider } from "./shared/context/userContext";
import { PostsContextProvider } from "./shared/context/postsContext";
import { commentContext } from "./shared/context/commentContext";
import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, createStore } from "redux";
import { Provider} from "react-redux";
import { RootAction, RootState, rootReducer, saveToken} from "./store/reducer";
import thunk, {ThunkMiddleware } from "redux-thunk";
import { CardsListNew } from "./shared/CardsListNew";
import { BrowserRouter,   Routes,  Route,  Navigate } from "react-router-dom";
import { Block404 } from "./shared/404";
import { ModalAdd } from "./shared/ModalAdd";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware<RootState, RootAction>)))



function AppComponent() {
  const [valueControled, setValueControled] = useState("");
  const CommentProvider = commentContext.Provider;

  store.dispatch(saveToken()); 


  // Для роутинга на клиенте, убирает конфликт с сервером.
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  
  return (
    <Provider store={store}>

      {mounted && (
        <BrowserRouter>
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
                    <Routes>
                      <Route path="/" element={<CardsList />} />                        
                      <Route path="/list/" element={<CardsListNew />} />
                      <Route path="/list/modal/" element={[<CardsListNew /> , <ModalAdd />]} />
                      <Route path="/examples/" element={<ExamplesComponent />} />
                      <Route path="*" element={<Block404 />} />
                      <Route path="/auth" element={<Navigate replace to="/" />} />     
                    </Routes>           
                  </Content>                        
                </Layout>
              </PostsContextProvider>
            </ UserContextProvider>  
          </CommentProvider>
        </BrowserRouter>
      )}
    </Provider>
  );
}

export const App = hot(() => <AppComponent />);
