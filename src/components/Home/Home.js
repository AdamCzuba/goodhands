import React from "react";
import HomeHeader from "./homecontent/HomeHeader";
import HomeThreeColumns from "./homecontent/HomeThreeColumns";
import HomeSimpleSteps from "./homecontent/HomeSimpleSteps";
import HomeAboutUs from "./homecontent/HomeAboutUs";
import HomeHelpGuide from "./homecontent/HomeHelpGuide";
import HomeContactFooter from "./homecontent/HomeContactFooter";
// import { HomeHeader, HomeThreeColumns, HomeSimpleSteps, HomeAboutUs, HomeHelpGuide, HomeContactFooter } from '../Home'


export default function Home() {
  return (
    <>
      <HomeHeader />
      <HomeThreeColumns />
      <HomeSimpleSteps />
      <HomeAboutUs />
      <HomeHelpGuide />
      <HomeContactFooter />
    </>
  )
}
