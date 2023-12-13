import { useState } from "react";
import { Button, ResetButton } from "../../components";
import "./Main.styles.css";
import { Container, Row, Col } from "react-bootstrap";

function MainScreen() {
  const [countHome, setCountHome] = useState<number>(0);
  const [countAway, setCountAway] = useState<number>(0);
  const [nameHome, setNameHome] = useState<string>("Nós");
  const [nameAway, setNameAway] = useState<string>("Eles");
  const [isHomeFocused, setIsHomeFocused] = useState<boolean>(false);
  const [isAwayFocused, setIsAwayFocused] = useState<boolean>(false);
  const [theme, setTheme] = useState<"default" | "dark">("default");
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

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "default" ? "dark" : "default"));
  };

  return (
    <Container
      fluid
      className={theme === "default" ? "default-theme" : "dark-theme"}
    >
      <div className="styled-div">
        <Row>
          <Col xs={12} className="title">
            Truco Scoreboard.
          </Col>
        </Row>

        <Row>
          <Col xs={5}>
            <div className="input-name-wrapper">
              <input
                className="input-name"
                type="text"
                onChange={(e) => setNameHome(e.target.value)}
                onFocus={() => setIsHomeFocused(true)}
                onBlur={() => setIsHomeFocused(false)}
                value={nameHome}
                maxLength={NAME_LIMIT}
              />

              {isHomeFocused && (
                <p className="name-counter">{`${nameHome.length} / ${NAME_LIMIT}`}</p>
              )}
            </div>
          </Col>
          <Col xs={{ span: 5, offset: 2 }}>
            <div className="input-name-wrapper">
              <input
                className="input-name"
                type="text"
                onChange={(e) => setNameAway(e.target.value)}
                onFocus={() => setIsAwayFocused(true)}
                onBlur={() => setIsAwayFocused(false)}
                value={nameAway}
                maxLength={NAME_LIMIT}
              />
              {isAwayFocused && (
                <p className="name-counter">{`${nameAway.length} / ${NAME_LIMIT}`}</p>
              )}
            </div>
          </Col>
        </Row>

        <Row className="main-counter-area">
          <Col xs={5}>
            <h1 className="counter-content">{countHome}</h1>
          </Col>

          <Col xs={2}>
            <h1>X</h1>
          </Col>

          <Col xs={5}>
            <h1 className="counter-content">{countAway}</h1>
          </Col>
        </Row>

        <Row>
          <Col xs={5}>
            <Row className="justify-content-md-center">
              <Col xs={6} lg={2} className="button-area">
                <Button
                  onClick={() =>
                    updateValue({ set: setCountHome, type: "plus", value: 3 })
                  }
                >
                  +3
                </Button>
              </Col>

              <Col xs={6} lg={2} className="button-area">
                <Button
                  onClick={() =>
                    updateValue({
                      set: setCountHome,
                      type: "plus",
                      value: 1,
                    })
                  }
                >
                  +
                </Button>
              </Col>

              <Col xs={6} lg={2} className="button-area">
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
              </Col>

              <Col xs={6} lg={2} className="button-area">
                <Button
                  onClick={() =>
                    updateValue({
                      set: setCountHome,
                      type: "minus",
                      value: 3,
                    })
                  }
                >
                  -3
                </Button>
              </Col>
            </Row>
          </Col>

          <Col xs={{ span: 5, offset: 2 }}>
            <Row className="justify-content-md-center">
              <Col xs={6} lg={2} className="button-area">
                <Button
                  onClick={() =>
                    updateValue({ set: setCountAway, type: "plus", value: 3 })
                  }
                >
                  +3
                </Button>
              </Col>

              <Col xs={6} lg={2} className="button-area">
                <Button
                  onClick={() =>
                    updateValue({
                      set: setCountAway,
                      type: "plus",
                      value: 1,
                    })
                  }
                >
                  +
                </Button>
              </Col>

              <Col xs={6} lg={2} className="button-area">
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
              </Col>

              <Col xs={6} lg={2} className="button-area">
                <Button
                  onClick={() =>
                    updateValue({
                      set: setCountAway,
                      type: "minus",
                      value: 3,
                    })
                  }
                >
                  -3
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col xs={12} className="reset-button-area">
            <ResetButton onClick={() => resetValue()}> Reset</ResetButton>
          </Col>
        </Row>
        <Row xs={1}>
          <Col xs={12} as="p" className="credit-area">
            <h4>pH. / A e s t a s - MaathAsul / iVanittas</h4>
            <button className="toggle-button" onClick={toggleTheme}>
              teste
            </button>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default MainScreen;
