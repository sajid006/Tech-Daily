import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarMenu,
  CDBSidebarMenuItem
} from "cdbreact";
import React from "react";
import classes from './SideBar.module.css';

const SideBar = () => {
  return (
    <div>
      <CDBSidebar className={classes.sidebar}>
        <CDBSidebarContent>
          <CDBSidebarMenu className={classes.sidebarmenu}>
            <CDBSidebarMenuItem icon="fa fa-edit">
              <a href="/stories/new">Add a Story</a>
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="fa fa-user">
            <a href="/users">Author Directory</a>
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
