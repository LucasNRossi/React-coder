import { Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartWidget = () => {
  const cartItemsCount = 1; // Número de elementos en el carrito

  return (
    <IconButton aria-label="Cart">
      <Badge badgeContent={cartItemsCount} color="error">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
};

export default CartWidget;
