const defaultTitleStyle = {
  marginTop: "30px",
};
const TitleAndLine = ({ titleName, titleStyle = defaultTitleStyle }) => {
  <div>
    <h3 style={titleStyle}>{titleName}</h3>
    <hr className="line"></hr>
  </div>;
};
export { TitleAndLine };
