import { Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";
const CloseButton = ({ onClick, size = "middle", style, ...props }) => {
  return (
    <Button
      type="text"
      icon={<CloseOutlined />}
      size={size}
      onClick={onClick}
      style={{
        color: "red",
        border: "solid 1px",
        ...style,
      }}
      {...props}
    />
  );
};
export { CloseButton };
