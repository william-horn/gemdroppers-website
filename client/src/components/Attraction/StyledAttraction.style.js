
import styled from 'styled-components';

export default styled.div`
  /* background-color: black; */
  padding: 10px;
  width: 100%;
  margin-bottom: 20px;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  flex-grow: 1;
  gap: 10%;

  p {
    text-align: center;
    margin-bottom: 20px;
    color: #535353;
    /* word-break: break-all; */
    font-size: 1rem;
  }

  .attraction-left p {
    /* color: #ffa600; */
    text-align: left;
  }

  .attraction-left {
    /* flex-grow: 1; */
    /* width: 25%; */
    padding: 20px;
    /* border-radius: 15px; */
    box-shadow: -5px -5px 15px #8b8b8b;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
  }

  .attraction-right {
    /* display: flex; */
    padding: 20px;
    /* flex-grow: 5; */
    /* width: 75%; */
    border-radius: 15px;
    border-left: 10px solid #e17e27;
    /* box-shadow: 5px 5px #ba5908; */
    flex: 2;
  }
`;
