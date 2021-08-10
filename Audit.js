// JavaScript Document

/*2 arrays to store each sections comments and scores. When the process results button at the
end of the form is selected the values in the arrays are stored in local storage and then retrieved
when the results page is displayed*/ 
let sectionComments = [];
let sectionScores = [];

function showTooltip(tooltip) {
    tooltip.style.visibility = "visible";
}

function hideTooltip(tooltip) {
    tooltip.style.visibility = "hidden";
}


/*Calculates the score of each section, pushes it to the score array and calls the displayComment() method.
As section 4 requires at least one checkbox to be selected if radio button = yes, there is validation
at the beginning of this method to deal with this scenario */
function getScore(section) {

    if (section === "section4") {
        validateCheckbox();
        if (validateCheckbox() === false) {
            window.alert("For this section you must select at least one checkbox if you answer yes to question 1");
            let para = document.createElement("td");
            let node = document.createTextNode("Do you think an inclusive philosophy is a lived experience by: **Please select one or more checkboxes**");
            para.appendChild(node);

            let parent = document.getElementById("checkboxerror");
            let child = document.getElementById("error");
            parent.replaceChild(para, child);
            document.getElementById("checkboxerror").style.color = "red";
            return;
        }

    }

    let elements = document.getElementById(section).getElementsByTagName("input");
    let score = 0;
    
    for (let j = 0; j < elements.length; j++) {
        if ((elements[j].type === "radio" || elements[j].type === "checkbox") && elements[j].checked) {
            score += parseInt(elements[j].value);
        }
        elements[j].disabled = true;
    }

    sectionScores.push(score);
    
    let sectionSubstring = section.substring(7, 9);
    let sectionAsInt = parseInt(sectionSubstring);
    displayComment(sectionAsInt, score);

}

//method used within getScore() to validate section4
function validateCheckbox() {
    let elements = document.getElementById("section4").getElementsByTagName("input");
    let valid = false;
    let rb = document.getElementById("rb1");

    if (rb.checked) {
        for (let j = 0; j < elements.length; j++) {

            if (elements[j].type === "checkbox" && elements[j].checked) {
                valid = true;
                break;

            }
        }

    } else {
        valid = true
    }

    return valid;
}

//displays the comment for each section, pushes the comment to the array and then makes the next section visible
function displayComment(section, score) {


    let comment = "comment" + (section.toString());
    let answer;



    switch (section) {
        case 1:
            if (score <= 9) {
                document.getElementById(comment).innerHTML = "Well done you are clearly being proactive in considering making<br> your services more universal";
                break;
            } else if (score > 9 && score <= 15) {
                document.getElementById(comment).innerHTML = "With a little more thought you will see more opportunities for <br>increasing the universability of your services";
                break;
            } else {
                document.getElementById(comment).innerHTML = "The face to face training session will be a great opportunity for<br> you to get guidance on progressing the universability of your organisation";
                break;
            }
            case 2:
                if (score <= 11) {
                    document.getElementById(comment).innerHTML = "The face to face training session will be a great opportunity for you<br> to gain some perspective of the benefits of universability to your <br>organisation and its members";
                    break;
                } else if (score > 11 && score <= 19) {
                    document.getElementById(comment).innerHTML = "You have some sense of the benefits of a universal organisation ";
                    break;
                } else {
                    document.getElementById(comment).innerHTML = "You have a very high level of appreciation of the mutual benefits for<br> all stakeholders in an inclusive organisation";
                    break;
                }
            case 3:
                if (score <= 5) {
                    document.getElementById(comment).innerHTML = "The face to face session has great scope to convince you of the <br>feasibility of promoting inclusion - just keep your mind open to the possibility";
                    break;
                } else {
                    document.getElementById(comment).innerHTML = "You can see an inclusive future for your organisation and its members,<br> the challenge is now to ensure that your decisions and resource <br>allocations make this happen";
                    break;
                }
            case 4:
                if (score <= 10) {
                    document.getElementById(comment).innerHTML = "The face to face training session will only be of value to progressing<br> your universability if you are willing to challenge your belief system<br> about access to fitness services being a fundamental ";
                    break;
                } else if (score > 10 && score <= 20) {
                    document.getElementById(comment).innerHTML = "While there is some openness to equity in your organisation the commitment<br> is not yet wholly embraced by all. Belief systems within the organisation<br> may be confused and possibly conflicting. It would be desirable to promote dialogue amongst your stakeholders around the topic of inclusion ";
                    break;
                } else {
                    document.getElementById(comment).innerHTML = "Your organisation&#39s value system is an inclusive one. Your challenge will<br> be to safeguard this and promote this philosophy within the wider<br> fitness sector";
                    break;
                }
            case 5:
                if (score === 0) {
                    document.getElementById(comment).innerHTML = "Universability is not something with which you have yet engaged, so the face to<br> face training session will be an opportunity for significant learning<br> in this respect";
                    break;
                } else if (score === 10) {
                    document.getElementById(comment).innerHTML = "Your policies are confused and possibly conflicting. Some guidance will be needed<br> to bring greater coherency to your <br>efforts to date";
                    break;
                } else if (score <= 30 && score >= 20) {
                    document.getElementById(comment).innerHTML = "Your journey of making organisational policies inclusive<br> has started well and<br> this may be the catalyst for enhanced <br>universability &hyphen; if<br> you are open to progressive change";
                    break;
                } else {
                    document.getElementById(comment).innerHTML = "Your intentions are very sound in respect of inclusion and you have the potential<br> to be a high achiever in this respect";
                    break;
                }
            case 6:
                if (score === 0) {
                    document.getElementById(comment).innerHTML = "You have great scope for learning during the face to face training session, once <br>you have an open mind to the possibilities that an inclusive approach can offer";
                    break;
                } else if (score >= 10 && score <= 20) {
                    document.getElementById(comment).innerHTML = "You have made a positive start upon which your organisation can build sound <br>relationships with people with disabilities. Unit three will offer you more<br> ideas in respect of forging alliances with people with disabilities";
                    break;
                } else {
                    document.getElementById(comment).innerHTML = "You are already a potential resource for people with disabilities in your community,<br> as your networks are an essential element in the UFIT approach";
                    break;
                }
            case 7:
                if (score === 0) {
                    document.getElementById(comment).innerHTML = "Your organisation has yet to learn the power of dialogue as a means of providing <br>desirable fitness services to all members of the community";
                    break;
                } else {
                    document.getElementById(comment).innerHTML = "As a listening organisation you have important information that can guide your journey<br> towards universability. Your challenge is to interpret what is being<br> said and to translate it into inclusive actions";
                    break;
                }
            case 8:
                if (score === 0) {
                    document.getElementById(comment).innerHTML = "You have great scope for learning during the face to face training session, once you have<br> an open mind to the possibilities that an inclusive approach can offer";
                    break;
                } else if (score >= 10 && score <= 20) {
                    document.getElementById(comment).innerHTML = "You have made a positive start &hyphen; you can use the questions here to reflect on how you<br> can make more progress in this respect";
                    break;
                } else {
                    document.getElementById(comment).innerHTML = "You have the potential to be a role model of provision in the fitness sector. Programming is<br> the basic unit of service delivery &hyphen; where this is <br>inclusive, your relevance to the wider community is enhanced";
                    break;
                }
            case 9:
                if (score === 0) {
                    document.getElementById(comment).innerHTML = "Universability is not something with which you have engaged so the face to face training session<br> will be an opportunity for significant learning in this respect";
                    break;
                } else if (score === 10) {
                    document.getElementById(comment).innerHTML = "Depending on the strength of influence of those with some perspective on inclusion, you may have<br> scope to drive improvements from within. Consider the scope<br> for repositioning those with training and knowledge in the area of inclusion to optimise their influence";
                    break;
                } else if (score >= 20 && score <= 30) {
                    document.getElementById(comment).innerHTML = "There is some scope within your organisation to promote universability principles and broaden your<br> organisations relevance in the wider community";
                    break;
                } else {
                    document.getElementById(comment).innerHTML = "You have invested in your organisations most important asset. Your potential to offer inclusive<br> services is vast. The challenge is to make sure that you <br>optimally deploy this wisdom to make all aspects of your service provision truly inclusive";
                    break;
                }
            case 10:
                if (score === 0) {
                    document.getElementById(comment).innerHTML = "The face to face training session will provide you with wonderful ideas for making small <br>(and inexpensive) changes to enhance the universability of the facility.";
                    break;
                } else if (score === 10) {
                    document.getElementById(comment).innerHTML = "While you have made a start in the direction of universability there is considerable scope for<br> improvements.";
                    break;
                } else if (score >= 20 && score <= 30) {
                    document.getElementById(comment).innerHTML = "While some aspects of your facility are accessible there is scope for enhancement. The face to <br>face training session will offer you some suggestions for <br>improvement here.";
                    break;
                } else {
                    document.getElementById(comment).innerHTML = "The facility is largely accessible and hence there is significant scope for promoting universability.";
                    break;
                }
            case 11:
                if (score === 0) {
                    document.getElementById(comment).innerHTML = "The face to face training session will offer you many ideas for inclusivizing your promotion materials";
                    break;
                } else if (score === 10) {
                    document.getElementById(comment).innerHTML = "Your organisation has some appreciation of the need for have diversity to be represented in your <br> promotional materials. With a little more thoughtfulness your<br> promotional campaigns will speak louder to a wider audience";
                    break;
                } else {
                    document.getElementById(comment).innerHTML = "You clearly understand the power of imagery and language and your materials may be potential <br> templates for others in the promotion of fitness services";
                    break;
                }
        }
        
    let sectionResult = document.getElementById(comment).innerHTML;
    sectionComments.push(sectionResult);

    let nextSection = "section" + ((section + 1).toString());
    document.getElementById(nextSection).style.visibility = "visible";
    document.getElementById(nextSection).focus();

}

//if a section requires checkboxes to be disabled if a radio button is set to no
function disableCheckbox(x) {

    let checkboxes;
    let section = "sec" + (x.toString());

    checkboxes = document.getElementsByName(section);

    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false;
        checkboxes[i].disabled = true;
    }

}

function enableCheckbox(x) {

    let checkboxes;
    let section = "sec" + (x.toString());

    checkboxes = document.getElementsByName(section);

    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].disabled = false;
    }

}


//saves all comments in the comment array to local storage when the procces results button is selected
function saveComments() {

    localStorage.setItem('comments', JSON.stringify(sectionComments));

}

//saves all scores in the comment array to local storage when the procces results button is selected
function saveScores() {

    localStorage.setItem('scores', JSON.stringify(sectionScores));

}

/*
Math.floor() method
website:stackoverflow
website reference:https://stackoverflow.com/questions/1435975/how-can-i-round-down-a-number-in-javascript
Author:Gerrit Bertier
Date:2019 
*/
let startTime = 5;
let time = startTime * 60;
let countdown = document.getElementById("clock");

function startClock() {
    let mins = Math.floor(time / 60);
    let secs = time % 60;

    secs = secs < 10 ? "0" + secs : secs;

    countdown.innerHTML = `${mins}:${secs}`;
    if (countdown.innerHTML === "0:00") {
        window.open("Timeout.html");
        self.close();
    } else {
        time--;
    }

}