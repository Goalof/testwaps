import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Image, Icon, Input, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, Menu, Section, StackItem, Stack, Formspree } from "@quarkly/components";
import * as Components from "components";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section>
			<Text margin="0px 0 24px 0" text-align="center" font="--headline2" md-font="--headline3">
				Awesome Company
			</Text>
			<Menu
				display="flex"
				justify-content="center"
				font="--base"
				font-weight="700"
				md-flex-direction="column"
				md-align-items="center"
			>
				<Override slot="link" text-decoration="none" color="--dark" padding="6px 12px" />
				<Override slot="link-active" color="--primary" />
				<Override slot="item" padding="6px" />
			</Menu>
		</Section>
		<Section padding="140px 0" sm-padding="40px 0" background="url(https://images.unsplash.com/photo-1515600051222-a3c338ff16f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80) center/cover">
			<Box max-width="240px" padding="50px 80px 80px 50px" background="--color-light" color="--dark">
				<Text
					as="h4"
					font="--base"
					color="--grey"
					letter-spacing="1px"
					text-transform="uppercase"
					margin="6px 0"
				>
					About me
				</Text>
				<Text as="h2" font="--headline2" margin="0 0 12px 0">
					Hey I’m David
				</Text>
				<Text font="--base">
					My name is David R. Moore, born and raised in France, worked as a professional photographer and videographer for more than 10 years, awarded the CDS Documentary Essay Prize in 2018 and Best Photographer of The Year 2019 by Sony World Photography Awards.
				</Text>
			</Box>
		</Section>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			background="--color-light"
			display="flex"
			flex-direction="column"
		>
			<Text
				font="--base"
				text-transform="uppercase"
				letter-spacing="1px"
				max-width="850px"
				color="--grey"
				margin="0px"
			>
				Eyebrow
			</Text>
			<Text
				as="h1"
				margin="8px 0px 32px"
				font="--headline1"
				md-font="--headline2"
				color="--dark"
				max-width="850px"
			>
				Heading
			</Text>
			<Stack margin-top="auto" color="--grey" font="--base">
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text margin="0px">
						Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake.
					</Text>
				</StackItem>
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text margin="0px">
						Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake.
					</Text>
				</StackItem>
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text margin="0px">
						Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake.
					</Text>
				</StackItem>
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text margin="0px">
						Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake.
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section text-align="center" padding="100px 0" sm-padding="40px 0">
			<Text
				id="texth1"
				as="h1"
				font="--headline1"
				md-font="--headline2"
				margin="20px 0 0 0"
			>
				About Us
			</Text>
			<Box display="flex" justify-content="space-between">
				<Text className="cifra">
					24
				</Text>
				<Text className="cifra">
					124
				</Text>
				<Text class="cifra">
					1124
				</Text>
				<Text class="cifra">
					24
				</Text>
			</Box>
			<Text as="p" font="--lead" margin="20px 0 0 0">
				Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake. I’m a great space for you to tell a story and let your site visitors know more about you. Talk about your business and what products and services you offer. Share how you came up with the idea for your company and what makes you different from your competitors. Make your business stand out and show your visitors who you are.{" "}
			</Text>
			<Box display="flex" margin="40px 0 20px 0" justify-content="space-around" sm-flex-direction="column">
				<Box padding="10px">
					<Image src="https://images.unsplash.com/photo-1501870190084-cdf29f15ef87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80" width="320px" max-width="100%" />
				</Box>
				<Box padding="10px">
					<Image src="https://images.unsplash.com/photo-1503341960582-b45751874cf0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" width="320px" max-width="100%" />
				</Box>
				<Box padding="10px">
					<Image src="https://images.unsplash.com/photo-1503342394128-c104d54dba01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80" width="320px" max-width="100%" />
				</Box>
			</Box>
		</Section>
		<Section
			color="--light"
			padding="100px 0"
			sm-padding="40px 0"
			position="relative"
			background="linear-gradient(0deg,rgba(25, 30, 34, 0.8) 0%,rgba(25, 30, 34, 0.8) 100%),--color-darkL2 url(https://images.unsplash.com/photo-1547619292-240402b5ae5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80)"
		>
			<Stack>
				<StackItem width="50%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box
						padding="0 0 0 64px"
						sm-padding="64px 0 0 0"
						margin="32px 0 0 0"
						max-width="360px"
						position="relative"
					>
						<Icon
							position="absolute"
							size="48px"
							top="0"
							left="0"
							category="md"
							icon={MdLocationOn}
						/>
						<Text as="h4" margin="6px 0" font="--base">
							Visit us
						</Text>
						<Text as="p" margin="6px 0" font="--headline3">
							4998 Hanover Street, New York, 10011
						</Text>
					</Box>
					<Box
						padding="0 0 0 64px"
						sm-padding="64px 0 0 0"
						margin="64px 0 0 0"
						max-width="360px"
						position="relative"
					>
						<Icon
							position="absolute"
							size="48px"
							top="0"
							left="0"
							category="md"
							icon={MdEmail}
						/>
						<Text as="h4" margin="6px 0" font="--base">
							Email us
						</Text>
						<Text as="p" margin="6px 0" font="--headline3">
							<Link href="mailto:hello@company.com" text-decoration="none" hover-text-decoration="underline" color="--light">
								hello@company.com
							</Link>
						</Text>
					</Box>
					<Box padding="0 0 0 64px" margin="64px 0 0 0" max-width="360px" position="relative">
						<Icon
							position="absolute"
							size="48px"
							top="0"
							left="0"
							category="md"
							icon={MdPhone}
						/>
						<Text as="h4" margin="6px 0" font="--base">
							Call us
						</Text>
						<Text as="p" margin="6px 0" font="--headline3">
							+1 (234) 567-89-00
							<br />
							+1 (234) 567-89-00
						</Text>
					</Box>
					<Box
						padding="0 0 0 64px"
						sm-padding="0"
						margin="48px 0"
						max-width="360px"
						position="relative"
						display="flex"
					>
						<Icon
							category="fa"
							icon={FaFacebookF}
							width="48px"
							height="48px"
							size="24px"
							margin-right="16px"
							background="--color-primary"
							border-radius="50%"
						/>
						<Icon
							category="fa"
							icon={FaTwitter}
							width="48px"
							height="48px"
							size="24px"
							margin-right="16px"
							background="--color-primary"
							border-radius="50%"
						/>
						<Icon
							category="fa"
							icon={FaLinkedinIn}
							width="48px"
							height="48px"
							size="24px"
							margin-right="16px"
							background="--color-primary"
							border-radius="50%"
						/>
					</Box>
				</StackItem>
				<StackItem width="50%" md-width="100%">
					<Box
						max-width="360px"
						padding="56px 48px"
						margin="0 0 0 auto"
						md-max-width="100%"
						background="--color-primary"
					>
						<Text as="h3" font="--headline3" margin="0 0 20px 0">
							Leave us message
						</Text>
						<Formspree>
							<Stack gap="16px">
								<StackItem width="100%">
									<Override slot="StackItemContent" flex-direction="column" />
									<Text font="--base" margin="0 0 4px 0">
										Name
									</Text>
									<Input width="100%" name="name" />
								</StackItem>
								<StackItem width="100%">
									<Override slot="StackItemContent" flex-direction="column" />
									<Text font="--base" margin="0 0 4px 0">
										Email
									</Text>
									<Input width="100%" type="email" name="email" />
								</StackItem>
								<StackItem width="100%">
									<Override slot="StackItemContent" flex-direction="column" />
									<Text font="--base" margin="0 0 4px 0">
										Message
									</Text>
									<Input as="textarea" rows="4" width="100%" name="message" />
								</StackItem>
								<StackItem width="100%">
									<Button background="--color-dark">
										Send
									</Button>
								</StackItem>
							</Stack>
						</Formspree>
					</Box>
				</StackItem>
			</Stack>
		</Section>
		<Section background-color="--dark" text-align="center" padding="32px 0">
			<Menu
				display="flex"
				justify-content="center"
				font="--lead"
				font-weight="700"
				margin="-6px 0 16px"
				md-flex-direction="column"
				md-align-items="center"
			>
				<Override slot="link" text-decoration="none" color="--light" padding="6px 12px" />
				<Override slot="link-active" color="--primary" />
				<Override slot="item" padding="6px 0px" />
			</Menu>
			<Link
				href="mailto:hello@company.com"
				text-decoration-line="none"
				variant="--base"
				color="--grey"
				hover-color="--primary"
			>
				hello@company.com
			</Link>
		</Section>
		<Components.EmbedHTML />
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"6011635707e62baf803296ed"}>
				{" @import url('https://fonts.googleapis.com/css?family=Roboto');\n    \n    .nav-bottom {\n            display: flex;\n            flex-direction: row;\n            justify-content: flex-end;\n            align-content: flex-end;\n            width: auto;\n            height: auto;\n            position: fixed;\n            z-index: 999999999999999;\n            bottom: 80px;\n            right: 20px;\n            padding: 5px;\n            margin: 0px;\n    }\n    \n    .whatsapp-button {\n            display: flex;\n            justify-content: center;\n            align-content: center;\n            width: 60px;\n            height: 60px;\n            z-index: 999999999;\n            transition: .3s;\n            margin: 10px;\n            padding: 7px;\n            border: none;\n            outline: none;\n            cursor: pointer;\n            border-radius: 50%;\n            background-color: rgb(255, 255, 255);\n            box-shadow: 1px 7px 25px -2px rgba(68, 68, 68, 0.28);\n    }\n    \n    .popup-whatsapp {\n            display: none;\n            position: absolute;\n            flex-direction: column;\n            justify-content: flex-start;\n            align-items: flex-start;\n            min-width: 300px;\n            width: auto;\n            height: auto;\n            padding: 16px;\n            bottom: 100px;\n            right: 10px;\n            transition: .5s;\n            border-radius: 10px;\n            background-color: rgb(255, 255, 255);\n            animation: slideInRight .6s 0.0s both;\n            box-shadow: 0 16px 34px -10px rgba(0, 0, 0, 0.46);\n    }\n    \n    .content-whatsapp {\n            display: flex;\n            flex-direction: column;\n            width: 100%;\n    }\n    \n    .content-whatsapp p {\n            color: rgb(88, 88, 88);\n            font-family: 'Roboto';\n            font-weight: 400;\n            font-size: 1.0em;\n    }\n    \n    .closePopup {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            width: 28px;\n            height: 28px;\n            margin: 0px 0px 15px 0px;\n            border-radius: 50%;\n            border: none;\n            outline: none;\n            cursor: pointer;\n            background-color: rgb(247, 96, 96);\n    }\n    \n    .is-active-whatsapp-popup {\n            display: flex;\n            animation: slideInRight .6s 0.0s both;\n    }\n    \n    input#whats-in {\n            background-color: #f3f3f3;\n            outline: none;\n            border: none;\n            border-radius: 6px;\n            overflow: auto;\n            margin: 0px;\n            width: auto;\n            resize: none;\n            padding: 11px;\n    }\n    \n    .icon-whatsapp-small {\n            width: 24px;\n            height: 24px;\n    }\n    \n    .icon-whatsapp {\n            width: 45px;\n            height: 45px;\n    }\n    \n    .icon-font-color {\n            color: #ffffff\n    }\n    \n    .icon-font-color--black {\n            color: #333333\n    }\n    \n    i.material-icons.icon-font-color--black {\n            color: #2cb742 !important;\n            font-style: normal;\n            font-size: 24px;\n            margin-left: 5px;\n    }\n    \n    button#send-btn {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            width: 40px;\n            height: 40px;\n            background-color: #f3f3f3;\n            margin: 11px 0px 0px 5px;\n            border: none;\n            outline: none;\n            cursor: pointer;\n            border-radius: 50px;\n            color: white !important;\n    }\n    \n    @media screen and (max-width: 768px) {\n            .popup-whatsapp {\n                    min-width: auto !important;\n                    width: auto !important;\n                    height: auto !important;\n            }\n    \n            .nav-bottom {\n                    width: auto !important;\n                    height: auto !important;\n                    bottom: 0px !important;\n                    right: 10px !important;\n            }\n    }\n    \n    .popup-whatsapp:before {\n            content: '';\n            display: block;\n            width: 0;\n            height: 0;\n            position: absolute;\n            right: 26px;\n            z-index: 0;\n            border: 10px solid rgba(255, 255, 255, 0);\n            border-top: 10px solid #feffff;\n            bottom: -20px;\n    }"}
			</style>
			<link rel={"stylesheet"} href={"https://fonts.googleapis.com/icon?family=Material+Icons"} place={"endOfHead"} rawKey={"601163717e1cd97d0fdbc3f6"} />
			<script place={"endOfBody"} rawKey={"601163e816c8d20e87efddab"}>
				{"    function ready() {\n            require(['jquery'], function ($) {\n                    popupWhatsApp = () => {\n                            let btnClosePopup = document.querySelector('.closePopup');\n                            let btnOpenPopup = document.querySelector('.whatsapp-button');\n                            let popup = document.querySelector('.popup-whatsapp');\n                            let sendBtn = document.getElementById('send-btn');\n                            btnClosePopup.addEventListener(\"click\", () => {\n                                    popup.classList.toggle('is-active-whatsapp-popup')\n                            })\n                            btnOpenPopup.addEventListener(\"click\", () => {\n                                    popup.classList.toggle('is-active-whatsapp-popup')\n                                    popup.style.animation = \"fadeIn .6s 0.0s both\";\n                            })\n                            sendBtn.addEventListener(\"click\", () => {\n                                    let msg = document.getElementById('whats-in')\n                                            .value;\n                                    let relmsg = msg.replace(/ /g, \"%20\");\n                                    // Замените демо номер на свой — 79999999999\n                                    window.open('https://wa.me/79999999999?text=' + relmsg, '_blank');\n                            });\n                            setTimeout(() => {\n                                    popup.classList.toggle('is-active-whatsapp-popup');\n                            }, 2000); // <-Время появлявления формы WhatsApp 5000 = 5 секундам\n                    }\n                    popupWhatsApp();\n            });\n    }\n    document.addEventListener(\"DOMContentLoaded\", ready);\n    "}
			</script>
			<script
				src={"https://cdnjs.cloudflare.com/ajax/libs/smoothscroll/1.4.10/SmoothScroll.min.js"}
				crossorigin={"anonymous"}
				integrity={"sha256-huW7yWl7tNfP7lGk46XE+Sp0nCotjzYodhVKlwaNeco="}
				place={"endOfHead"}
				rawKey={"601164ac745f5a1059f74579"}
			/>
			<script place={"endOfBody"} rawKey={"601164d9d447423bca71239e"}>
				{"SmoothScroll({\n    // Время скролла 400 = 0.4 секунды\n    animationTime    : 800,\n    // Размер шага в пикселях \n    stepSize         : 75,\n\n    // Дополнительные настройки:\n    \n    // Ускорение \n    accelerationDelta : 30,  \n    // Максимальное ускорение\n    accelerationMax   : 2,   \n\n    // Поддержка клавиатуры\n    keyboardSupport   : true,  \n    // Шаг скролла стрелками на клавиатуре в пикселях\n    arrowScroll       : 50,\n\n    // Pulse (less tweakable)\n    // ratio of \"tail\" to \"acceleration\"\n    pulseAlgorithm   : true,\n    pulseScale       : 4,\n    pulseNormalize   : 1,\n\n    // Поддержка тачпада\n    touchpadSupport   : true,\n})"}
			</script>
			<style place={"endOfHead"} rawKey={"6011651354ab2cabf055351d"}>
				{"#texth1 {\ncolor: #ff0 !important;\n}\n.cifra {\ncolor: #f00 !important;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});