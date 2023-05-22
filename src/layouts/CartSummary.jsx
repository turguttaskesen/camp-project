import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown } from "semantic-ui-react";
export default function CartSummary() {
  return (
    <div>
      <Dropdown item text="Sepetiniz">
        <Dropdown.Menu>
          <Dropdown.Item>Laptop</Dropdown.Item>
          <Dropdown.Item>Klavye</Dropdown.Item>
          <Dropdown.Item>Mouse</Dropdown.Item>
          <Dropdown.Item>Ekran</Dropdown.Item>
          <Dropdown.Item>Hoparlör</Dropdown.Item>
          <Dropdown.Item>Usb Disk</Dropdown.Item>
          <Dropdown.Divider/>
          <Dropdown.Divider/>
          <Dropdown.Item primary as={NavLink} to="/cart">Sepete git</Dropdown.Item>
          
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
