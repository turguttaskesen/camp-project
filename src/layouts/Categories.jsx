import React from "react";
import { Menu } from "semantic-ui-react";

export default function Categories() {
  return (
    <div>
      <Menu pointing vertical>
        <Menu.Item name="home" />
        <Menu.Item name="message" />
        <Menu.Item name="friends" />
        <Menu.Item name="olaylar" />
        <Menu.Item name="kişiler" />
      </Menu>
    </div>
  );
}


