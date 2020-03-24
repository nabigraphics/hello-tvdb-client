import React, { FC } from "react";
import logo from "logo.svg";
import MainTemplate from "components/main/MainTemplate";
import SearchContainer from "containers/main/SearchContainer";

const MainPage: FC = () => {
  return (
    <MainTemplate>
      <img alt={"hello, TVDB"} src={logo} />
      <SearchContainer />
    </MainTemplate>
  );
};

export default MainPage;
