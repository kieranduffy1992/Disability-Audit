// JavaScript Document


/*retrieves the scores from local storage when the page loads and loops through the results,
displaying the score in the relevent section, calculates and displays the total score
and calls finalComment() method*/
document.addEventListener('DOMContentLoaded', function() {
    let sectionScore;
    let totalScore = 0;
    var retrievedScore = localStorage.getItem("scores");
    var score = JSON.parse(retrievedScore);

    for (let i = 1; i <= score.length; i++) {
        sectionScore = document.getElementById("section" + i.toString());
        sectionScore.innerHTML += score[i - 1] + "<br>";
        totalScore += parseInt(score[i - 1]);
    }
    
    document.getElementById("section12").innerHTML += totalScore.toString() + "<br>";
    finalComment(totalScore);

}, false);

/*same as above except for the comments in local storage when the page loads, this also 
call a method to remove the <br> from the return string as it was loading the breaklines on the screen*/
document.addEventListener('DOMContentLoaded', function() {
    let section;
    let newComment;
    var retrievedComment = localStorage.getItem("comments");
    var comment = JSON.parse(retrievedComment);

    for (let i = 1; i <= comment.length; i++) {
        section = document.getElementById("section" + i.toString());
        section.style.visibility = "visible";
        newComment = removeBreakLine(comment[i - 1]);
        section.innerHTML += newComment;
    }
}, false);

/*
remove <br> method
website:stackoverflow
website reference: https://stackoverflow.com/questions/8062399/how-to-replace-an-html-br-with-newline-character-n
Author:Christoph Kluge
Date:2011 
*/
function removeBreakLine(text) {
    return text.replace(/<br\s*\/?>/mg, "");
}

function finalComment(finalScore) {

    switch (true) {
        case (finalScore < 150): {
            document.getElementById("section12").innerHTML += "The face to face training session will be of immense value to your organisation. An exciting challenge awaits as you move towards universability. It will take some time but the secret is to keep doing what you are doing well and gradually add other initiatives to make your services more inclusive. The face to face training session will lead to significant learning for your organisation.";
            break;
        }
        case (finalScore >= 150 && finalScore <= 244): {
            document.getElementById("section12").innerHTML += "While some work is being done to enhance inclusive provision, there is scope for significant gains in this aspect. Building on what you are doing well and embracing new ideas will see your organisation make the transitions to inclusivity with some ease. The face to face training session will be a unique opportunity to learn from others in your sector.";
            break;
        }
        case (finalScore >= 245 && finalScore <= 339): {
            document.getElementById("section12").innerHTML += "Your organisation is making genuine and meaningful efforts in the direction of universability.  However provision is probably patchy and inconsistent, which may cause some confusion among members and potential members. Promotion of inclusive opportunities as an organisational priority has the potential to broaden your relevance to an even greater number of community members.";
            break;
        }
        case (finalScore >= 340 && finalScore <= 425): {
            document.getElementById("section12").innerHTML += "Your organisation is evidently committed to inclusion. Your perspective will be most valuable at the face to face training session as both an advocate and a guide for inclusive fitness service provision. You are highly relevant in your community and hence the organisation is sustainable and will remain so once your current commitment is supported and enhanced over time.";
            break;
        }

    }
    
     document.getElementById("section12").style.visibility = "visible";
    

}

//populate the listbox based on the yes/no result of the 1st listbox
function populateListbox() {

    var selectBox = document.getElementById("answer");
    selectBox.innerHTML = "";

    var selection = question.options[question.selectedIndex].value;
    if (selection == "yes") {
        let yopt1 = document.createElement("option");
        let yopt2 = document.createElement("option");
        yopt1.text = "I understood all the questions asked";
        yopt2.text = "I felt the questions were relatable";
        document.getElementById("answer").options.add(yopt1);
        document.getElementById("answer").options.add(yopt2);

    } else if (selection == "no") {
        let nopt1 = document.createElement("option");
        let nopt2 = document.createElement("option");
        nopt1.text = "I did not understand the questions asked";
        nopt2.text = "I felt the questions were not relatable";
        document.getElementById("answer").options.add(nopt1);
        document.getElementById("answer").options.add(nopt2);
    }


}
