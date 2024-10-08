import { Facebook, GitHub, Laptop, LinkedIn } from '@mui/icons-material';
import React from "react";
import {
	Box, Column, Container, FooterItem, FooterLink, Row
} from "./SocialMediaStyles";

const SocialMediaLinks = () => {
return (
	<Box>
	<Container>
		<Row>
		<Column>
        <FooterLink href="http://facebook.com/sajid.hasan.2026">
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
export default SocialMediaLinks;
/*
Data Source=tcp:cefalotechdailyapidbserver.database.windows.net,1433;Initial Catalog=Cefalo.TechDaily.Api_db;User Id=sajid@cefalotechdailyapidbserver;Password={mypassword}
*/