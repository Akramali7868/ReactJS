const Button = ({ imgUrl, buttonName, clickHandler}) => {
  return (
    <button onClick={clickHandler} title={buttonName}>
      <img src={imgUrl} alt={buttonName} />
    </button>
  );
};

export default Button;
