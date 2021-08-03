import styled from "styled-components";


const InputWrapper = styled.div`
  padding: 0;
  margin: 0;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
  .ant-input-affix-wrapper {
    border: 0;
    padding: 0;
    box-shadow: none;
    border-radius: 0;
  }
  .ant-input-prefix {
    margin-right: 5px;
  }
  
  .ant-input-suffix {
    padding: 0 5px;
    border-radius: 0 0 5px 0;
  }
  input {
    display: block;
    width: 100%;
    line-height: 1.5;
    margin: 0;
    -webkit-appearance: none;
    background: #fff;
    border: 1px solid rgb(226, 232, 240);
    height: 34px;
    font-size: 15px;
    font-weight: 300;
    padding: 0 30px;
    color: #b5b5b5;
    border-radius: 5px;
 
    
   
  }
  .empty {
    border: 1px solid #e81c1c;
  }
  .error{
    border:1px solid red;
  }
   
`;

export { InputWrapper };
