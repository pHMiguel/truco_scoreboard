import { useState } from "react";
import * as S from "./Main.styles";
import { Button } from "../../components";
import { Container, Row, Col } from "react-bootstrap";

function MainScreen() {
  const [countHome, setCountHome] = useState<number>(0);
  const [countAway, setCountAway] = useState<number>(0);
  const [nameHome, setNameHome] = useState<string>("Nós");
  const [nameAway, setNameAway] = useState<string>("Eles");
  const [isHomeFocused, setIsHomeFocused] = useState<boolean>(false);
  const [isAwayFocused, setIsAwayFocused] = useState<boolean>(false);
  const NAME_LIMIT = 20;

  const updateValue = ({
    set = (prevValue: any) => {
      return prevValue;
    },
    value = 0,
    type = "plus" as "plus" | "minus",
  }) => {
    switch (type) {
      case "plus":
        set((prevValue: number) => {
          if (prevValue + value >= 12) {
            return 12;
          } else {
            return prevValue + value;
          }
        });
        break;
      case "minus":
        set((prevValue: number) => {
          if (prevValue - value <= 0) {
            return 0;
          } else {
            return prevValue - value;
          }
        });
        break;
      default:
        break;
    }
  };

  const resetValue = () => {
    setCountAway(0);
    setCountHome(0);
  };

  return (
    <S.Container>
      <Container fluid>
        <Row>
          <S.Title>Truco Scoreboard.</S.Title>
        </Row>
        <Row>
          <S.Scoreboard>
            <Col sm>
              <S.ContentAreaHome>
                <S.InputName
                  type="text"
                  onChange={(e) => setNameHome(e.target.value)}
                  onFocus={() => setIsHomeFocused(true)}
                  onBlur={() => setIsHomeFocused(false)}
                  value={nameHome}
                  maxLength={NAME_LIMIT}
                />
                <S.NameCounterWrapper>
                  {isHomeFocused && (
                    <S.NameCounter>{`${nameHome.length} / ${NAME_LIMIT}`}</S.NameCounter>
                  )}
                </S.NameCounterWrapper>
                <S.CounterHome>
                  <h1>{countHome}</h1>
                </S.CounterHome>
                <S.ButtonArea>
                  <Button
                    onClick={() =>
                      updateValue({ set: setCountHome, type: "plus", value: 3 })
                    }
                  >
                    + 3
                  </Button>
                  <Button
                    onClick={() =>
                      updateValue({ set: setCountHome, type: "plus", value: 1 })
                    }
                  >
                    +
                  </Button>
                  <Button
                    onClick={() =>
                      updateValue({
                        set: setCountHome,
                        type: "minus",
                        value: 1,
                      })
                    }
                  >
                    -
                  </Button>
                  <Button
                    onClick={() =>
                      updateValue({
                        set: setCountHome,
                        type: "minus",
                        value: 3,
                      })
                    }
                  >
                    - 3
                  </Button>
                </S.ButtonArea>
              </S.ContentAreaHome>
            </Col>
            <Col sm>
              <S.Versus>
                <h1>X</h1>
              </S.Versus>
            </Col>
            <Col sm>
              <S.ContentAreaAway>
                <S.InputName
                  type="text"
                  onChange={(e) => setNameAway(e.target.value)}
                  onFocus={() => setIsAwayFocused(true)}
                  onBlur={() => setIsAwayFocused(false)}
                  value={nameAway}
                  maxLength={NAME_LIMIT}
                />
                <S.NameCounterWrapper>
                  {isAwayFocused && (
                    <S.NameCounter>{`${nameAway.length} / ${NAME_LIMIT}`}</S.NameCounter>
                  )}
                </S.NameCounterWrapper>
                <S.CounterAway>
                  <h1>{countAway}</h1>
                </S.CounterAway>
                <S.ButtonArea>
                  <Button
                    onClick={() =>
                      updateValue({ set: setCountAway, type: "plus", value: 3 })
                    }
                  >
                    + 3
                  </Button>
                  <Button
                    onClick={() =>
                      updateValue({ set: setCountAway, type: "plus", value: 1 })
                    }
                  >
                    +
                  </Button>
                  <Button
                    onClick={() =>
                      updateValue({
                        set: setCountAway,
                        type: "minus",
                        value: 1,
                      })
                    }
                  >
                    -
                  </Button>
                  <Button
                    onClick={() =>
                      updateValue({
                        set: setCountAway,
                        type: "minus",
                        value: 3,
                      })
                    }
                  >
                    - 3
                  </Button>
                </S.ButtonArea>
              </S.ContentAreaAway>
            </Col>
          </S.Scoreboard>
        </Row>

        <Row>
          <Col>
            <S.ResetButtonArea>
              <Button onClick={() => resetValue()}> Reset</Button>
            </S.ResetButtonArea>
          </Col>
        </Row>
        <S.Credit>pH. / A e s t a s - MaathAsul / iVanittas</S.Credit>
      </Container>
    </S.Container>
  );
}

export default MainScreen;
