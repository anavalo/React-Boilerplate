import styled, {  keyframes   } from 'styled-components'
import {useContext} from "react";
import {StateContext} from "context/DataContext";

const spin = keyframes`
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`
const LoaderDiv = styled.div`
    border: 4px solid #f3f3f3;
    border-radius: 50%;
    border-top: 4px solid #3498db;
    width: 28px;
    height: 28px;
    -webkit-animation: ${spin} 2s linear infinite; /* Safari */
    animation: ${spin} 2s linear infinite;
    display: block;
    margin: 0 auto;
    margin-top: 40px;
`;

const LoaderContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 100;
  
`

const LoaderContainerInner = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 310px;
    background: #fff;
`

const LoaderText = styled.div`
   ${props => props.theme.data.light.typography["body-primary-l"]};
   color: ${props => props.theme.data.light.typography["NightSky"]};
   margin: 0 auto;
   display: block;
   padding: 20px 0;
   text-align: center;
`

const Loader = () => {
    const stateContext = useContext(StateContext);

    return(
        stateContext.loader &&
            <LoaderContainer>
                <LoaderContainerInner>
                    <LoaderDiv/>
                    <LoaderText>
                        Updating your results...
                    </LoaderText>
                </LoaderContainerInner>
            </LoaderContainer>
    )
}

export default Loader