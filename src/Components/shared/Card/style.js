import styled from "styled-components";


const CardStyle = styled.div`
 
.card{
    padding: 25px;
    background: #ececec;
    box-shadow: 0 3px 20px rgb(0 0 0 / 4%);
    border-radius: 1.375rem;
    margin: 25px;
    }
  

  .headerDiv{
    text-align: right;
    margin-top: -25px;
  }
   
  .head{
    text-align: left;
    margin-top: 1.5rem;
    font-size: 1.875rem;
    font-weight: 700;
    line-height: 2rem;
    }

    .reportBox{
      position:relative;
    }

  .reportBox:before {
    content: "";
    width: 61%;
    background: #ececec;
    box-shadow: 0 3px 20px rgb(0 0 0 / 4%);
    border-radius: .375rem;
    height: 67%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 4rem;
    position: absolute;
    right: 0;
    left: 0;
    
}

.zoomIn{
  cursor:pointer;
  --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
}

.zoomIn:hover {
  --tw-shadow: 0 20px 25px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.04);
  box-shadow: 0 0 transparent,0 0 transparent,var(--tw-shadow);
  box-shadow: var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);
  --tw-scale-x: 1.05;
  --tw-scale-y: 1.05;




  .tag{
  text-align: left;
    color: rgba(113,128,150,var(--tw-text-opacity));
    margin-top: .25rem;
    font-size: 18px;
  }




`;

export { CardStyle };
