import { useNavigate } from "react-router-dom";

const ProductRegisterForm = () => {
  const navigate = useNavigate();
  return (
    <>
      <p>ProductRegisterForm</p>
      <button
        onClick={() => {
          navigate("/");
        }}
      ></button>
    </>
  );
};
export default ProductRegisterForm;
