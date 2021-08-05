import styled from "styled-components";
const EmployeeStyle = styled.div`
  .mainDiv {
    margin: 3rem;
  }
  .header {
    text-align: left;
    margin-bottom: 3rem;
  }

  .pro-pics-main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 22px;
    @media (max-width: 1300px) {
      padding-bottom: 20px;
      @media (max-width: 767px) {
        padding-bottom: 10px;
        flex-direction: column-reverse;
        div {
          width: 100%;
        }
      }
    }
    .edit {
      border: none;
      width: 25px;
      height: 25px;
      background: #f2f2f2;
      border-radius: 100%;
      font-size: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 0;
      bottom: 0;
      border-bottom: 1px solid #d8d8d8;
      &.name {
        right: 0px;
        top: 50%;
        -moz-transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
        -o-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
      }
    }

    .pro-pics {
      width: 80px;
      min-width: 80px;
      height: 80px;
      @media (max-width: 767px) {
        width: 60px;
        min-width: 60px;
        height: 60px;
        margin-right: 10px;
      }
      border-radius: 100%;
      margin-right: 20px;
      position: relative;
    }
  }
`;

export default EmployeeStyle;
