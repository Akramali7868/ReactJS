const Button = ({ imgUrl, clickHandler, children}) => {
  console.log(children);
  return (
    <button onClick={clickHandler} title={children}>
      {children}
      <img src={imgUrl} alt={children} />
    </button>
  );
};

export default Button;
