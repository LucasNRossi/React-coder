import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import CartWidget from "../../common/cartWidget/CartWidget";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          El Cimarrón - Arte
        </Typography>
        <Button color="inherit">Todos</Button>
        <Button color="inherit">Lienzo</Button>
        <Button color="inherit">Cartón</Button>
        <CartWidget />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
