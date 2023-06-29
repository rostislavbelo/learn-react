import React from "react";
import { hot } from "react-hot-loader/root";
import { ExamplesComponent } from "./shared/Examples";
import { Layout } from "./shared/Layout";
import { Header } from "./shared/Header";
import { Content } from "./shared/Content";
import { CardsList } from "./shared/CardsList";
import "./main.global.css";

function AppComponent() {
  return (
    <Layout>
      <Header />
      <Content>
        <CardsList />
      </Content>
      <ExamplesComponent />      
    </Layout>
  );
}

export const App = hot(() => <AppComponent />);
