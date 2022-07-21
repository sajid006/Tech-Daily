import React from "react";
import {
    Box, Column, Container, FooterLink, Row
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<h3 style={{ color: "white",
				textAlign: "center",
				marginTop: "-50px" }}>
		Tech Daily: A Computer Science Portal for Tech Enthusiasts
	</h3>
	<Container>
		<Row>
		<Column>
        <FooterLink href="http://facebook.com">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
		</Column>
		<Column>
        <FooterLink href="http://instagram.com">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
		</Column>
		<Column>
        <FooterLink href="http://twitter.com">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
		</Column>
		<Column>
			<FooterLink href="http://youtube.com">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
