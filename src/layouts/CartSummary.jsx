import React from "react";
import { Dropdown } from "semantic-ui-react";
export default function CartSummary() {
  return (
    <div>
      <Dropdown item text="Language">
        <Dropdown.Menu>
          <Dropdown.Item>Laptop</Dropdown.Item>
          <Dropdown.Item>Klavye</Dropdown.Item>
          <Dropdown.Item>Mouse</Dropdown.Item>
          <Dropdown.Item>Ekran</Dropdown.Item>
          <Dropdown.Item>Hoparlör</Dropdown.Item>
          <Dropdown.Item>Usb Disk</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
