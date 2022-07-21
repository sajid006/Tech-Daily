import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarMenu,
  CDBSidebarMenuItem
} from "cdbreact";
import React from "react";

const SideBar = () => {
  return (
    <div>
      <CDBSidebar
        style={{
          backgroundColor: "black",
          height: "20rem",
          overflowX: "hidden",
        }}
      >
        <CDBSidebarContent>
          <CDBSidebarMenu style={{position: "fixed"}}>
            <CDBSidebarMenuItem icon="fa fa-edit">
              <a href="/stories">Add a Story</a>
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="fa fa-user">
            <a href="/profiles">Author Directory</a>
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="credit-card" iconType="solid">
            <a href="/about">About Us</a>
            </CDBSidebarMenuItem>
          </CDBSidebarMenu>
        </CDBSidebarContent>
        <CDBSidebarFooter></CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default SideBar;
