//add bio information: index.html (Mobile viewport ONLY)
window.addEventListener("load", addBioInfo);
function addBioInfo(){
	document.getElementById("mobile-opening-header").innerHTML = openingHead;
	document.getElementById("mobile-bio-1").innerHTML = bioContentA;
	document.getElementById("mobile-bio-2").innerHTML = bioContentB;
	document.getElementById("github-url-link").innerHTML = gitHubLink;
	document.getElementById("mobile-closing-header").innerHTML = closingHead;
}

//add index's bio information for Tablet/iPad/Desktop viewports
window.addEventListener("load", addBioTabletInfo);
function addBioTabletInfo(){
	document.getElementById("full-name").innerHTML = fullName;
	document.getElementById("bio-info1").innerHTML = bioTabletContentA;
	document.getElementById("bio-info2").innerHTML = bioTabletContentB;
}
//add Footer content (All viewports)

window.addEventListener("load", footerInfo);
function footerInfo(){
 	document.getElementById("physical-address").innerHTML = physicalAddress;
 	document.getElementById("social-links").innerHTML = socialMediaLinks;
}

//About Us content (All viewports)
window.addEventListener("load", addAboutInfo);
//left side part
let educationPart = document.getElementById("tertiary-school");
let computerSkills = document.getElementById("computer-literacy"); 
let technologies = document.getElementById("technology-stack");
let devAndDBMS = document.getElementById("ide-dbms");
let gitHubProjects = document.getElementById("project-links");
//right side part: past work experience info
let workExperience = document.getElementById("right-Side");
function addAboutInfo(){
	document.getElementById("attributes").innerHTML = attributesAndGoals;
	//append school info on about page
	educationPart.insertAdjacentHTML("beforeEnd",institutionTag);
	educationPart.insertAdjacentHTML("beforeEnd",keyModulesHead);
	educationPart.insertAdjacentHTML("beforeEnd", moduleList);
	//append computer literacy and programming skills info
	computerSkills.insertAdjacentHTML("beforeEnd",pcSkillList);
	technologies.insertAdjacentHTML("beforeEnd",  techStackSubHeading);
	technologies.insertAdjacentHTML("beforeEnd", devSkills);
	devAndDBMS.insertAdjacentHTML("beforeEnd",devToolList);
	gitHubProjects.insertAdjacentHTML("beforeEnd",projectLink);
	//append past work experience info
	workExperience.insertAdjacentHTML("beforeEnd",employer1Info);
	workExperience.insertAdjacentHTML("beforeEnd",employer2BInfo);
	workExperience.insertAdjacentHTML("beforeEnd",employer2AInfo);
	workExperience.insertAdjacentHTML("beforeEnd",employer3Info);	
}
//Contact Us content (All viewports)
window.addEventListener("load", addContactInfo);
function addContactInfo(){
	document.getElementById("call-to-action").innerHTML = contactUsMsg;
	document.getElementById("cell-num-mobi").innerHTML = cellNumber;
	document.getElementById("cell-num-desktop").innerHTML = cellNumHeader;
	document.getElementById("contact-email-header").innerHTML = emailHeader;
	document.getElementById("current-location").innerHTML = located;
	//contact form info
	document.getElementById("form-call-to-action").innerHTML = formMsgHeader;
	document.getElementById("form-prompt-msg").innerHTML = formPromptMsg;
	document.getElementById("form-name-title").innerHTML = fullNamePrompt;
	document.getElementById("form-email-title").innerHTML = emailPrompt;
	document.getElementById("form-message-box").innerHTML = messageBoxPrompt;
}