import React from 'react'
import styled from "styled-components";
import { Button } from "./Components/Button";
import { Layout } from "./Components/Layout";
import { Image } from "./Components/Image";


const MainDiv = styled.div`
background: black;
outline: 10px solid white;
`;

const SeconDiv = styled.div`
width : 40%;
float: right;
`;

export default class Navbar extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="App">
                < MainDiv>
                    <Image src="vedas.png"/>
                    <SeconDiv >
                    <Layout>
                        <Button primary>Try Vedas</Button>
                        <Button secondary>Learn</Button>
                        <Button secondary>Resources</Button>
                        <Button secondary>About</Button>
                    </Layout>
                </SeconDiv>    
                </MainDiv>
            </div>
          );
    }
}