import React, { useRef, useLayoutEffect } from "react";
import atomize from "@quarkly/atomize"; // Put your HTML here:

const customHtml = `
 <div class="nav-bottom">
           
    <div class="popup-whatsapp fadeIn">
                   
    <div class="content-whatsapp -top">
                           
    <button type="button" class="closePopup">
                                   
    <i class="material-icons icon-font-color">
    close
    </i>
                           
    </button>
                           
    <p>
    Здравствуйте! Напишите нам сообщение в WhatsApp
    </p>
                   
    </div>
                   
    <div class="content-whatsapp -bottom">
                           
    <input class="whats-input" id="whats-in" type="text" Placeholder="Написать сообщение..." />
                           
    <button class="send-msPopup" id="send-btn" type="button">
                                   
    <i class="material-icons icon-font-color--black">
    send
    </i>
                           
    </button>
                   
    </div>
           
    </div>
           
    <button type="button" id="whats-openPopup" class="whatsapp-button">
                   
    <img class="icon-whatsapp" src="https://image.flaticon.com/icons/svg/134/134937.svg">
           
    </button>
    </div>`;

const EmbedHTML = ({
	children,
	...props
}) => {
	const ref = useRef(null);
	useLayoutEffect(() => {
		ref.current.innerHTML = customHtml;
	}, []);
	return <div {...props} ref={ref} />;
};

export default atomize(EmbedHTML)({
	name: "EmbedHTML",
	normalize: true,
	mixins: true
});