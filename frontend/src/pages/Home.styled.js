import styled from "styled-components";

export const HomeWrapper = styled.div`
  /* border: 1px solid black; */
  /* background-color: #f6f6f6; */
  height: auto;
  //First container
  .topBanner {
    max-width: 100%;
    height: 250px;
    display: flex;

    .bannerSliderContainer {
      width: 67%;
      height: 100%;
    }

    .rightBanner {
      flex-grow: 1;

      img {
        height: 100%;
        width: 100%;
      }
    }
  }

  .headingOf1mg {
    height: 87px;
    /* border: 1px solid black; */
    display: flex;
    border-top: 2px solid var(--border);
    border-bottom: 2px solid var(--border);
    align-items: center;
    justify-content: center;
    background-color: #ffffff;

    h1 {
      font-size: 19px;
      line-height: 20px;

      color: #666666;
    }
  }

  .addOfCarePlan {
    /* border: 1px solid black; */

    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px auto;

    span {
      height: 115px;

      img {
        height: 100%;
        cursor: pointer;
      }
    }
  }

  .featuredBrands {
    height: 254px;
    /* border: 1px solid black; */
    margin: 30px auto;

    //Heading of component is below
    //Slider container

    .sliderContaier {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 210px;
      margin-top: 10px;
      /* border: 1px solid black; */
      background-color: #ffffff;
      /* border-bottom: 2px solid var(--border);
      border-top: 2px solid var(--border); */
      box-shadow: var(--boxContainerShadow);
    }
  }

  //Heading of components
  .headingOfComponent {
    height: 28px;
    /* border: 1px solid red; */
    width: 1240px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      font-weight: bold;
      font-size: 18px;
      color: #212121;
      /* border: 1px solid black; */
      margin-left: 45px;
      line-height: 20px;
    }
  }
`;
