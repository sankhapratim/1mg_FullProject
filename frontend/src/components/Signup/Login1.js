import styled from "styled-components";



export const Mainbox=styled.div`

height:350px;
width:750px;
margin:auto;
border-radius:10px;
background:white;
box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
z-index:12;
margin-top:10%;
display:flex;
padding:25px;
`



export const Slider1=styled.div`

width:50%;
height:100%;
margin-top:5%;

img{
    margin-left:35%;
}
h3{
   margin:20px;
   text-align:center;
}
p{
    text-align:center;
    font-size:12px;
}
`

export const Slider2=styled.div`


width:50%;
height:100%;
p{
    text-align:center;
    font-size:12px;
    margin-top:3%;
}


`

export const LoginButton=styled.button`

width:80%;
height:40px;
background:#ff6f61;
color:white;
margin-left:10%;
border:none;
border-radius:5px;
cursor:pointer;

`

export const GmailButton=styled.button`

width:80%;
height:40px;
background:white;
color:black;
margin-left:10%;
border:none;
border-radius:5px;
border:1px solid grey;
margin-top:3%;
cursor:pointer;
text-align:center;
position:relative;
gap:10px;
p{
    margin-bottom:2%;
    
}


`

export const InputDiv=styled.div`


input{
    &:focus{
        outline:0;

    }
}
`