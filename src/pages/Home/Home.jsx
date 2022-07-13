import React from "react";

import Container from "../../components/Container/Container";
import Main from "../../components/Main/Main";
import Sidebar from "../../components/Sidebar/Sidebar";

import HomeBanner from "./_HomeBanner/HomeBanner";
import HomeGrid from "./_HomeGrid/HomeGrid";
import Interests from "./_Interests/Interests";
import HomeFooter from "./_HomeFooter/HomeFooter";

import "./Home.scss"; 
import SideHeader from "./_SideHeader/SideHeader";
import SideBio from "./_SideBio/SideBio";
// import SideGoal from "./_SideGoals/SideGoals";
import SideSkills from "./_SideSkills/SideSkills";


const Home = () => {
        return <Container>
            <div className="home">
                <Main>
                    <HomeBanner/>
                    <HomeGrid/>
                    <Interests/>
                    <HomeFooter/>
                </Main>
                <Sidebar>
                    <SideHeader/>
                    <SideBio/>
                    {/* <SideGoal/> */}
                    <SideSkills/>
                </Sidebar>
            </div>
        </Container>
}

export default Home; 