import styled from "styled-components";
import {size} from "../../Components/Responsible/index"


const TestStyle = styled.div`
  .header {
    text-align: left;
    font-size: 17px;
    margin: 1rem 0rem 3rem 2rem;
    color: #757575;
  }

  .pick {
    text-align: left;
    font-size: 10px;
    margin: 0rem 3rem 0rem 3rem;
  }

  .destination {
    text-align: left;
    font-size: 10px;
    padding-top: 1rem;
    margin: 0rem 3rem 0rem 3rem;
  }

  .label {
    font-size: 17px;
    color: #757575;
  }

  .floorSelect {
    margin-bottom: 13px;
  }

  .floor1Select {
    margin-bottom: 13px;
  }
  .toSelect {
    margin-bottom: 13px;
  }

  .proters {
    font-size: 22px;
    color: #757575;
  }
  .row {
    padding-top: 15px;
    margin: 0rem 3rem 0rem 3rem;
  }
  .priority {
    font-size: 22px;
    color: #757575;
    padding-top: 5px;
  }
  .priorityCol {
    padding-left: 25rem;
  }

  .count {
    margin: 0.5rem;
  }

  .remark {
    font-size: 22px;
    color: #757575;
    text-align: left;
  }
  .remarkDiv {
    margin: 0rem 3rem 0rem 3rem;
  }

  .textarea {
    border-radius: 10px;
  }

  .button {
    display: flex;
    justify-content: flex-end;
    margin: 2rem;
  }

  @media ${size["tablet-max"]} {
    .priorityCol{
      margin-left: -9.81rem;
      margin-top: -1rem;
    }
    #form-dropdown{
      width:120%;
    }
    .iGbCGH{
      width:130%;
    }
  }

  @media ${size["tablet-sm-max"]} {
    #form-dropdown{
      width:100%;
    }
    .iGbCGH{
      width:100%;
    }
   
  }

  @media ${size["tablet-md-max"]} {
    .priority{
      margin-top: -3rem;
    }
  }

  

 
 
`;
export { TestStyle };
