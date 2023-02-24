/*(1.1): index.html
mobile viewport bio content:*/
let openingHead = "Hi";
let bioContentA = "Welcome to my portfolio website, my primary goal is to apply the technical knowledge I gained from University in a real world environment. Having been exposed to technologies such as C++, CSS, HTML, Java, Oracle and  Python, I am seeking entry level training and skill building opportunities such as junior developer or internship programme to help build my skills and grow within the Information Technology sector.";
let bioContentB = "I am a recent BSc Informatics graudatue with a keen interest on becoming a full stack web developer. I am someone who is analytical, discovery-oriented, tenacious, eager to learn and an excellent communicator.";
let gitHubLink = "github.com/VNeo1DA";
let closingHead = "Please visit my github account to see samples of my work";

/*(1.2)
tablet/iPad/Desktop bio content:
*/
let fullName = "Vuyo Neo Mamabolo";
let bioTabletContentA = "BSc Informatics graduate with knowledge in C++, CSS, HTML, Java and Python Programming Languages";
let bioTabletContentB = "Highly analytical, strong communication skills, discovery oriented, eager to learn new skills, applications and knowledge.";

/*(1.3): 
All viewports: footer content
*/
//my address content: to be embedded in footer
let physicalAddress = "No 35 Hull Road,<br> Vrededorp,<br> Johannesburg";
//my social links: to be embedded in footer
let socialLinks = new Array(
	{url: "https://www.linkedin.com/in/neo-vuyo-mamabolo-617b94182", 
	img: "icons/linkedin.png",
	alt: "linked in icon"},
	{url: "https://www.facebook.com/vuyo.neomamabolo",
	img: "icons/facebook.png",
	alt:"facebook icon"});
const numSocialLinks = socialLinks.length;
let socialMediaLinks = "";
if(numSocialLinks >= 1){
	socialMediaLinks += "<table><tr>";
	for(let i = 0; i < numSocialLinks; i++)
	{
		socialMediaLinks += "<td><p><a href='" + socialLinks[i].url +
		"'><img src='" + socialLinks[i].img + "' class='social-icons' " +
		"alt= '" + socialLinks[i].alt + "'></a></p></td>";
	}
	socialMediaLinks += "</tr></table>";
}

/*(2.1)
All viewports: about.html (About Us)
*/
//(3.1) top section: Attributes/Goals 
let attributesAndGoals = "Hardworking, knowledgeable and discovery-oriented with a passion for technology. Having acquired communication, time-management and organizational skills, I wish to further augment my skills with software development capabilities and grow within the Information and Communication Technology (ICT) sector. I am also very keen to work within a team environment or as part of a collective of diverse individuals.";

//(3.2) right section: Education - part
let modules = ["Business Information Systems",
 				"Computer Networks", "Programming",
 				"System Design and Analysis", "Databases"];
const numOfModules = modules.length;
let moduleList = "";
if(numOfModules >= 1){
	moduleList += "<ul>";
	for(let index = 0; index < numOfModules; index++)
	{
		moduleList += "<li>" + modules[index] + "</li>";
	}
	moduleList += "</ul>";
}
let institution = "UNISA";
let institutionTag = "<h2>" + institution + "</h2>";
let keyModulesHead = "<h4>Key Modules<h4>";

//(3.3) right section: Computer Literacy - part
let pcSkills = ["Microsoft Office", "Windows XP, 7, 8, 10, 11",
						"Statistical Analysis Software (SAS)"];
const numOfPCSkills = pcSkills.length;
pcSkillList = "";
if(numOfPCSkills >=1){
	pcSkillList += "<ul>";
	for(let i = 0; i < numOfPCSkills; i++)
	{
		pcSkillList += "<li>" + pcSkills[i] + "</li>";
	}
	pcSkillList += "</ul>";
}
//(3.4) right section: Programming Language - part
let techStacks = new Array(
	{img: "icons/c-.png",item: "C++"},
	{img: "icons/java.png", item: "Java"}, 
	{img: "icons/css.png", item: "CSS"}, 
	{img: "icons/html.png", item: "HTML"},
	{img: "icons/python.png", item: "Python"});
const numTechLanguages = techStacks.length;
devSkills = "";
if(numTechLanguages >=1){
	devSkills += "<div id='tech-stack-logos'>";
	for(let i = 0; i < numTechLanguages; i++)
	{
		devSkills += "<table 'width: 10%;'><tr><td rowspan='2'><img src='" + techStacks[i].img +
		"' alt='' style='width: 48px; height: 48px; object-fit: cover;'/>"+
		"</td><td>" + techStacks[i].item +"</td></tr></table>";
	}
	devSkills += "</div>";
}
let techStackSubHeading = "<h3>Knowledgeable in:</h3>";

//(3.5) right section: IDE & DBMS - part
let devAndDBMSTools = ["NetBeans","Sublime-Text", "Oracle"];
const numOfDevTools = devAndDBMSTools.length;
let devToolList = "";
if(numOfDevTools >= 1){
	devToolList += "<ul>";
	for(let j = 0; j < numOfDevTools; j++)
	{
		devToolList += "<li>" + devAndDBMSTools[j] + "</li>";
	}
	devToolList += "</ul>";
}

//(3.6) right section: Links/Projects - part
let projectURL = "https://gitHub.com/VNeo1DA";
let gitHubLogo = "icons/github.png";
let projectLink = "";
projectLink += "<div id='portfolio-link'><p><a href='" + projectURL + 
"'><img src='" + gitHubLogo +
"' alt='project icon' style='width: 48px; height:48px; object-fit: cover; '></a></p></d>";

//(4.1) left section: Work Experience - part
//(a) Employee1 Object
let employer1 ={
	"companyName": "Shell",
	"role": "Learner Intern",
	"duration": "01/2018 – 12/2018",
	"responsibility":["updating and transcribing petrochemical stats onto database",
	"filing, creation of MS PowerPoint presentations",
	"data capturing"]
};
//(b) Employee2 Object A
let employmer2a ={
	"companyName": "SABC",
	"role": "Media Intern",
	"duration": "04/2016 – 03/2017",
	"responsibility":["creation of advertising reports",
	"creation of MS PowerPoint presentations",
	"data collation", "media analysis"]
};
//(b) Employee2 Object B
let employer2b ={
	"companyName": "SABC",
	"role": "Jr. Media Strategist (Volunteer)",
	"duration": "04/2017 – 06/2017",
	"responsibility":["assisted media strategists in creation of advertising reports",
	"creation of MS PowerPoint presentations"]
};
//(c) Employee3 Object C
let employer3 ={
	"companyName": "QueensPark",
	"role": "Retail Sales-Assistant",
	"duration": "12/2015 – 01/2016",
	"responsibility":["assist store sales associates with opening clothing accounts",
	"sustaining good customer service levels"]
};
//helper function to help create Employment history info
function createEmployeeInfo(employee)
{
	let empDetails ="<div><h2>" + employee.companyName + "</h2><h3>"+
	employee.role + "</h3>" + "<h4>" +
	employee.duration + "</h4><p>Responsibilities:</p><ul>";
	const numResponsibility = employee.responsibility.length;
	for(let i = 0; i < numResponsibility; i++){
		empDetails += "<li>" + employee.responsibility[i] + "</li>";
	}
	empDetails += "</ul></div>";
	return empDetails;
}
let employer1Info = createEmployeeInfo(employer1);
let employer2BInfo = createEmployeeInfo(employer2b);
let employer2AInfo = createEmployeeInfo(employmer2a);
let employer3Info = createEmployeeInfo(employer3);

//(5.1) Contact Us: Details
let contactUsMsg = "You can contact me through the number or email address listed below, alternatively you can fill in your name in the field below & details in the message box and I will get back to you as soon as possible";
let cellNumber = "0793209844";
let cellNumHeader = "Cell No: " + cellNumber;
let mail = "vuyomamabolo@gmail.com";
let emailHeader = "Email:  " + mail;
let currentLocation = "Vrededorp, Johannesburg, Gauteng - 2141";
let located = "Current Location:<br>" + currentLocation;
let formMsgHeader = "Should you wish for me to contact you please provide your details below";
//form section
let formPromptMsg = "Please fill in the required information:";
let fullNamePrompt = "Full Name: ";
let emailPrompt = "e-mail: ";
let messageBoxPrompt = "Message:";