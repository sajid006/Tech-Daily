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
			<i className="fab fa-facebook-f">
				<FooterItem>
				Facebook
				</FooterItem>
			</i>
			</FooterLink>
		</Column>
		<Column>
        <FooterLink href="http://github.com/sajid006">
			<i className="fab fa-github">
				<FooterItem>
				Github
				</FooterItem>
			</i>
			</FooterLink>
		</Column>
		<Column>
        <FooterLink href="http://twitter.com">
			<i className="fab fa-twitter">
				<FooterItem>
				Twitter
				</FooterItem>
			</i>
			</FooterLink>
		</Column>
		<Column>
			<FooterLink href="http://linkedin.com/in/sajid006">
			<i className="fab fa-linkedin">
				<FooterItem>
				Linkedin
				</FooterItem>
			</i>
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