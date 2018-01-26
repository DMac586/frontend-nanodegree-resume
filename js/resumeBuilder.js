//Bio section
var bio = {
  "name" : "Danny McCormick",
  "role" : "IEFS Flow builder",
  "contacts" : {
    "mobile" : "954-555-5555",
    "email" : "DMac@att.com",
    "github" : "DMac586",
    "twitter" : "none",
    "location" : "Sunrise, FL"
  },
  "welcomeMessage": "Innovation through automation.",
  "skills" : [
    "Being Awesome", "Quick Learner", "HTML", "CSS"],
  "bioPic" :"images/me.jpg"
};

//Work section
var work ={
    "jobs" : [
      {
        "employer" : "AT&T",
        "title" :"Senior-Technical Process/Quality",
        "location" : "Sunrise, FL",
        "dates" : "5/1/2014-Present",
        "description" : "Creation and development of UFO workflows and automation around it."
      },
      {
        "employer" : "AT&T",
        "title" :"Six Sigma Black Belt",
        "location" : "Sunrise, FL",
        "dates" : "3/15/2008 - 4/30/2014",
        "description" : "Utilizing Six Sigma methodology I participate in and lead projects that reduce or eliminate defects or waste in U-verse processes. This includes site visits to document the “as is” process as well as participating in Kazan events. Develop and delivered high impact presentation to upper management and fellow AT&T employees on the current status of Six Sigma Projects using statistical analysis and graphical representation of the data that is being looked at. I have lead a project that reduced U-verse helper tickets. I have created a Value Stream Map (VSM) for U-verse provide orders and have assisted Core Installation and Maintenance create VSMs from their prospective for iNID and IPDSL installations."
      },
      {
        "employer" : "BellSouth",
        "title" :"ASM",
        "location" : "Oaklandpark, FL",
        "dates" : "8/15/2006-3/15/2008",
        "description" : "BellSouth Network Operation Specialist: I ran and analyze reports of over 120 employees to evaluate their working habits and room for improvement. I also maintain over 120 computers that each Technician uses in their daily routine. I manage capital assets worth over $1 million. I give presentations for new and upcoming technology the Technicians might come across. I also fill in for the Area Manager for Central Broward when he is on vacation or unable to attend to matters."
      },
      {
        "employer" : "BellSouth",
        "title" :"Network Manager",
        "location" : "Pembroke Pines, FL",
        "dates" : "9/15/2004-8/15/2006",
        "description" : "I have managed two top service tech crews in South Broward including a top sales referral Revenue Crew in Florida in 2005. I ran a group of five contractor crews with 10-15 technicians in each crew with 1-2 supervisors per crew during the critical time after the 2005-2006 storm season in South Florida for 5 months. I have taken on the responsibilities and duties of our ASM and Second Level when needed. I was a key presenter of the “Broadband Race” coverage for Broward County. I also helped with a MSOC presentation in front of the Broward County District."
      },
      {
        "employer" : "BellSouth",
        "title" :"Technician",
        "location" : "Hollywood, FL",
        "dates" : "1/15/1997-9/15/2004",
        "description" : "Installed and repaired telephone services in customer's houses and businesses."
      },
      {
        "employer" : "United States Air Force",
        "title" :"Senior Airman",
        "location" : "Minot, ND",
        "dates" : "1992-1995",
        "description" : "Worked on nuclear missiles."
      }    ]
  };

	// Project section
  var projects = {
    "projects" : [
      {
        "title" : "WFE-Work Flow Engine",
        "dates" : "2014-Present",
        "description" : "Creation and design of flows/step that navigate the user the steps needed to complete a task.  This includes the interaction with backend systems allowing transactions to be performed.",
        "images" : ["images/WFELogo.jpg"],
      },
    ]
  };

//Education section
var education = {
	"schools": [
		{ "name": "Nova Southeastern University",
			"dates": "2005-2007",
			"location": "Davie, FL",
			"degree": "Bachelors",
			"majors": [ "Business" ],
      "url": "http://www.nova.edu/."
		}
	],

	"onlineCourses": [
		{ "school": "Udacity",
			"title": "Front End Web Design",
			"dates": "2017-2018",
			"url": "http://www.udacity.com."
		},
	]
};

//Creating all the content in top bio part
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

//Adding top bio to the Resume
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);
if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	for( var i = 0; i < bio.skills.length; i++ ) {
  	$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

//Add the contact info
for(var j = 0; j < formattedContactInfo.length; j++) {
	$("#topContacts").append(formattedContactInfo[j]);
	$("#footerContacts").append(formattedContactInfo[j]);
}

//add the work experiances to resume
work.display = function() {
	if(work.jobs.length > 0) {
		$("#workExperience").append(HTMLworkStart);
		for(var k = 0; k < work.jobs.length; k++) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[k].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[k].title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[k].location);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[k].dates);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[k].description);
			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;
			$(".work-entry:last").append(formattedEmployerWorkTitle);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedDates);
			$(".work-entry:last").append(formattedWorkDescription);
		}
	}
};
work.display();

//Add Projects to resume
projects.display = function() {
	if(projects.projects.length > 0) {
		for(var l = 0; l < projects.projects.length; l++) {
			$("#projects").append(HTMLprojectStart);
			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[l].title).replace("#", projects.projects[l].url);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[l].dates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[l].description);
			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);
			for(var img in projects.projects[l].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[l].images[img]);
				$(".project-entry:last").append(formattedProjectImage);
			}
		}
	}
};
projects.display();

//adds Education to the resume
education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(var m = 0; m < education.schools.length; m++) {
			$("#education").append(HTMLschoolStart);
			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[m].name).replace("#", education.schools[m].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[m].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[m].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[m].location);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[m].majors);
			var formattedschoolURL = HTMLschoolURL.replace("%data%", education.schools[m].url);
			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
			$(".education-entry:last").append(formattedschoolURL);
		}
		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for(var n = 0; n < education.onlineCourses.length; n++) {
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[n].title).replace("#", education.onlineCourses[n].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[n].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[n].dates);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[n].url).replace("#", education.onlineCourses[n].url);
				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
			}
		}
	}
};

education.display();


$("#mapDiv").append(googleMap);

bio.display();
work.display();
projects.display();
education.display();
