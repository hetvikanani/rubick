import styled from "styled-components";
const LoginStyle = styled.div`

background-color: rgb(28, 63, 170);
.ParentDiv{
    height:100vh;
    padding-top: 8%;
  
}
.form-div{
    border-radius: 10px;
    width: 25%;
    margin: 0% auto auto;
    padding: 2%;
    background-color: rgb(255, 255, 255);
    min-width: 220px;
}
.ant-form{
    margin:0;
}
.header {
    font-size: 1.5em;
    font-weight: bold;
    margin-top: 1em;
    color: rgb(28, 63, 170);
    margin-top: -31px;
  
   
}
 
.labelUse{
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.05em;
    line-height: 15px;
    display: block;
    // margin-top: 0.5rem;

    float:left;
    margin-bottom:10px;
    margin-top:10px;
}

.labelPass{
    float:left;
    margin-top:25px;
    margin-bottom:10px;


}

.btnMrg{
    margin-top:10%;
}
 
.form-error
{
    color:red;
}

.user{
    padding:1px;
}

.error{
    border:1px solid red;
}

`;
export default LoginStyle; 

