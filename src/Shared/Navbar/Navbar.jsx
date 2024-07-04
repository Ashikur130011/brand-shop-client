import React, { useState } from 'react';
import { CButton, CCollapse, CContainer, CDropdown, CDropdownDivider, CDropdownItem, CDropdownMenu, CDropdownToggle, CForm, CFormInput, CImage, CNavItem, CNavLink, CNavbar, CNavbarBrand, CNavbarNav, CNavbarToggler } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'


const Navbar = () => {
    const [visible, setVisible] = useState(false)
    return (
        <>
    <CNavbar expand="lg" className="bg-body-tertiary">
      <CContainer fluid>
        <CNavbarBrand href="#">Brand Home</CNavbarBrand>
        <CNavbarToggler onClick={() => setVisible(!visible)} />
        <CCollapse className="navbar-collapse flex-wrap justify-between" visible={visible}>
          <CNavbarNav>
            <CNavItem>
              <CNavLink href="/" active>
                Home
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="/login">Login</CNavLink>
            </CNavItem>
            <CDropdown variant="nav-item" popper={false}>
              <CDropdownToggle color="secondary">About</CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="#">Company Info</CDropdownItem>
                <CDropdownItem href="#">Contact Us</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem href="#">Our Goal</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
            <CNavItem>
              <CNavLink href="#" disabled>
                Disabled
              </CNavLink>
            </CNavItem>
          </CNavbarNav>
          <div>
            <CForm className="d-flex items-end">
            <CFormInput type="search" className="me-2" placeholder="Search" />
            <CButton type="submit" color="success" variant="outline">
              Search
            </CButton>
          </CForm>
          </div>
        </CCollapse>
      </CContainer>
    </CNavbar>
  </>
    );
};

export default Navbar;