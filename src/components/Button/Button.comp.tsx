import * as S from "./Button.styles";

const Button = ({ onClick = () => {}, children = (<></>) as any }) => {
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

export default Button;
