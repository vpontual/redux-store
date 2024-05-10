import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Jumbotron from "../components/Jumbotron";
import { placeOrder, clearCart } from "../store/actions/cartActions";

function Success() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function saveOrder() {
      await dispatch(placeOrder());
      dispatch(clearCart());
      setTimeout(() => {
        window.location.assign("/");
      }, 3000);
    }
    saveOrder();
  }, [dispatch]);

  return (
    <div>
      <Jumbotron>
        <h1>Success!</h1>
        <h2>Thank you for your purchase!</h2>
        <h2>You will now be redirected to the home page</h2>
      </Jumbotron>
    </div>
  );
}

export default Success;
