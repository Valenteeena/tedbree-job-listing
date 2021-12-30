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
