import React from 'react'
import { Dropdown, Image, Menu } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
  return (
    <div>
        <Menu.Item>
            <Image avatar spaced="right" src="https://lh3.googleusercontent.com/ogw/AOLn63GQRkTK9opy9mIBgL-ci16RTHD0zSz2zGdCrEY2=s32-c-mo"/>
            <Dropdown pointing="top left" text="Taşkesen">
              <Dropdown.Menu>
                <Dropdown.Item text="bilgilerim" icon="info"/>
                <Dropdown.Item onClick={signOut} text= "Çıkış yap"  icon="sign-out"/>
              </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    </div>
  )
}
