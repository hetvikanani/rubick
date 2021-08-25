import styled from "styled-components";
import {size} from "../../Components/Responsible/index"

const AcceptStyle = styled.div`

.header{
    width:100%;
    height:8vh;
    background:#ED3437;
    display:flex;
    justify-content: flex-end;
    padding:8px;
}
    
.switch{

    background-color:#FFFFFF;
    margin:8px;
    
    .ant-switch-handle::before{
        background-color:#10C900;
    }
}

.ant-image{
    margin: 1px 10px 1px 10px;
}

@media ${size["desktop-mm-max"]} {
    .header{
        padding:6px;
    }
  }

 

`;
export { AcceptStyle };
