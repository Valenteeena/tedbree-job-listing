import styled from "styled-components";

export const HompageConatainer = styled.main``;
export const HeaderContainer = styled.section`
  background-color: #0f4a7b;
  padding: 2rem 4rem;
  background-image: url("./headerbg.png");
  background-repeat: no-repeat;
  background-position-x: 101%;
  background-position-y: 90%;
  max-height: 280px;
  height: 320px;
  h1 {
    font-size: 40px;
    padding: 3rem;
    margin: 2rem 0;
    letter-spacing: 0.12em;
    color: white;
  }
  .topHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 35%;
      font-family: "Gilroy-Regular", sans-serif;

      a {
        color: rgba(255, 255, 255, 0.6);
        text-decoration: none;
        font-size: 18px;
        &:hover {
          color: white;
          font-weight: 600;
        }
      }
      .active {
        color: white;
        font-weight: 600;
      }
      button {
        color: #0f4a7b;
        font-size: 16px;
        padding: 0.5rem 1rem;
        border-radius: 6px;
        border: none;
        background-color: #ffeded;
        font-weight: 600;
      }
    }
  }
  .search {
    display: flex;
    justify-content: space-evenly;
    width: 85%;
    border-radius: 10px;
    margin: auto;
    background: white;
    box-shadow: 0px 4px 17px rgba(15, 74, 123, 0.15);
    padding: 1rem 1rem;
    div {
      width: 45%;
      display: flex;
      align-items: center;
      input {
        width: 95%;
        margin-left: 0.5rem;
        font-size: 16px;
        padding: 0.8rem;
        border: none;
        &:focus {
          outline: none;
        }
      }
    }
    button {
      background: #ea5566;
      color: white;
      border: none;
      padding: 0.5rem 1.5rem;
      font-size: 16px;
      border-radius: 10px;
    }
  }
`;

export const ContentStyle = styled.section`
  font-size: 12px;
  /* margin-top: 3rem; */
  padding: 4rem 5rem;
  .topContent {
    display: flex;
    width: 44%;
    color: #3e3e40;
    justify-content: space-between;
    align-items: center;
    h2 {
      font-size: 18px;
    }
    h3 {
      color: rgba(62, 62, 64, 0.5);
    }
    .MuiFormControl-root {
      font-family: "Gilroy-Regular", sans-serif;
    }
  }
  .jobContent {
    display: flex;
    justify-content: space-between;
    color: black;
    margin-top: 1rem;
    .jobList {
      width: 45%;
    }
    .jobDesc {
      width: 45%;
      box-shadow: 0px 4px 17px rgba(98, 190, 203, 0.15);
      margin: 1rem 0;
      padding: 1.5rem;
      padding-bottom: 3rem;
      border-radius: 10px;
    }
  }
`;

export const SingleJobDiv = styled.div`
  box-shadow: 0px 4px 17px rgba(98, 190, 203, 0.15);
  width: 100%;
  margin: 1rem 0;
  border-radius: 10px;
  padding: 1.5rem;
  padding-bottom: 3rem;
  h1 {
    font-size: 20px;
    color: #0f4a7b;
    margin-bottom: 0.7rem;
  }
  h2 {
    font-size: 18px;
    font-weight: normal;
  }
  p {
    font-size: 14px;
    padding: 0.5rem 0;
  }
  button {
    float: right;
    background: #ea5566;
    border-radius: 10px;
    border: none;
    padding: 0.5rem 1rem;
    color: white;
  }
  :hover {
    background: #0f4a7b;
    color: white;
    cursor: pointer;

    h1 {
      color: white;
    }
    button {
      background: white;
      color: #ea5566;
    }
  }
`;
