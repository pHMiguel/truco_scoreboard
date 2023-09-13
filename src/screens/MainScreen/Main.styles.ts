import styled from "styled-components";

export const Container = styled.div`
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  background-color: #1a1a1a;
  color: rgba(255, 255, 255, 0.87);
  height: 100vh;
  overflow: hidden;
`;

export const Title = styled.div`
  font-size: 3em;
  height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Scoreboard = styled.div`
  height: 50vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-beetween;
`;

export const ContentAreaHome = styled.div`
  width: 45vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContentAreaAway = styled.div`
  width: 45vw;
  font-size: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CounterArea = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 10px;
  font-size: 4em;
  font-weight: 500;
  font-family: inherit;
  background-color: #404040;
  color-scheme: light dark;
  display: flex;
  flex-direction: center;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (max-width: 480px) {
    width: 20px;
    height: 20px;
  }
`;

export const ButtonArea = styled.div`
  margin-top: 5vh;
  display: flex;
  flex-direction: row;
`;

export const Versus = styled.div`
  width: 10vw;
  display: flex;
  justify-content: center;
`;

export const Credit = styled.div`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ResetButtonArea = styled.div`
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputName = styled.input`
  height: 60px;
  width: 40vw;
  padding: 5px;
  border-radius: 8px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: white;
  font-size: 2.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: none;
  outline: none;
  transition: 0.3s all;

  &:hover {
    background-color: #262626;
    border: none;
    outline: none;
    transition: 0.3s all;
  }

  &:focus {
    background-color: #404040;
    border: none;
    outline: none;
  }
`;

export const NameCounter = styled.p`
  text-align: end;
`;

export const NameCounterWrapper = styled.div`
  width: 40vw;
  height: 30px;
`;
