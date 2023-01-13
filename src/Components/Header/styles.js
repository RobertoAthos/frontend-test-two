import styled from "styled-components";


export const Header = styled.header`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Container = styled.div`
    width: 100%;
    height: 70px;
    margin: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: ${props =>props.theme.primary};
    background-color:${props =>props.theme.primaryBack} ;
    border-bottom: 1px solid ${props =>props.theme.borderColor};
    padding: 2rem;
    box-shadow: 10px 10px 51px -7px rgba(0,0,0,0.19);
    h3{
        font-size: 2rem;
    }
`
export const Navigation = styled.nav`
    ul{
        display: flex;
        gap: 2rem;
        li{
            a{
                font-size: 1.2rem;
                color: ${props =>props.theme.primary};;
            }
            a:hover{
                text-decoration: underline;
            }
        }
    }   
`

export const SwitchButton = styled.button`
         background-color: transparent;
         color: ${props =>props.theme.primary};
         transition: 300ms;
         :hover{
            transform: scale(1.1);
         }
`