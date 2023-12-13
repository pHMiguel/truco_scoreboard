import * as S from "./ResetButton.styles";

const ResetButton = ({ onClick = () => {}, children = (<></>) as any }) => {
  return (
    <S.Container>
      <button
        onClick={() => {
          onClick();
        }}
      >
        {children}
      </button>
    </S.Container>
  );
};

export default ResetButton;
