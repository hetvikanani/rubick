import styled from "styled-components";

const DashbordStyle = styled.div`
  max-height: 100vh;
  overflow-y: auto;
  .displayDiv {
    padding: 2em;
    margin-top: 2em;
    .title {
      color: #616161;
      margin-left: 0.5em;
    }
    .top-row-box {
      margin-top: 1em;
      .box {
        background: #ffffff;
        box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.2);
        border-radius: 14px;
        margin: 10px 0 0 10px;
        .ant-card-body {
          padding: 0;
          display: flex;
          height: auto;
          .ant-image {
            margin-left: auto;
            .topImg {
              padding: 1em;
            }
          }
        }
        .content1 {
          margin: auto 0;
        }
        .number {
          font-weight: 700;
          margin: 0 0 0 20px;
        }
        .name {
          font-size: 16px;
          margin-left: 20px;
        }
      }
    }
    .middle-box {
      margin-top: 2em;
      box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.2);
      border-radius: 14px;
      margin-left: 10px;
      .number {
        font-weight: bold;
      }
      .black-ground {
        border: 1px solid;
        height: 168px;
        margin-top: 10px;
      }
    }
    .ant-card-bordered {
      border: none;
    }
    .bottom-row-box {
      text-align: center;
      .ant-col {
        margin-top: 2em;
      }
      .box {
        height: 305px;
        box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.2);
        border-radius: 14px;
        + .box {
          margin-left: 20px;
        }
      }
    }
    .name {
      font-weight: normal;
      color: #b5b5b5;
    }
    .number {
      font-weight: bold;
      color: #ed3437;
    }
  }
`;
export { DashbordStyle };
