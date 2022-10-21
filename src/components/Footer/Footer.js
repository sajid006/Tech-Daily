import { Facebook, GitHub, Laptop, LinkedIn } from '@mui/icons-material';
import React from "react";
import {
	Box, Column, Container, FooterItem, FooterLink, FooterTitle, Row
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<FooterTitle>
		Tech Daily: A Computer Science Portal for Tech Enthusiasts
	</FooterTitle>
	<Container>
		<Row>
		<Column>
        <FooterLink href="http://facebook.com/saaaaaaajid">
			<Facebook/>
				<FooterItem>
				Facebook
				</FooterItem>
			
			</FooterLink>
		</Column>
		<Column>
        <FooterLink href="http://github.com/sajid006">
			<GitHub/>
			<FooterItem>
				Github
			</FooterItem>
			</FooterLink>
		</Column>
		<Column>
        <FooterLink href="http://leetcode.com/sajid006">
			<Laptop/>
			<FooterItem>
				Leetcode
			</FooterItem>
			</FooterLink>
		</Column>
		<Column>
			<FooterLink href="http://linkedin.com/in/sajid006">
				<LinkedIn/>
				<FooterItem>
				Linkedin
				</FooterItem>
			
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
/*
Data Source=tcp:cefalotechdailyapidbserver.database.windows.net,1433;Initial Catalog=Cefalo.TechDaily.Api_db;User Id=sajid@cefalotechdailyapidbserver;Password={mypassword}
*/