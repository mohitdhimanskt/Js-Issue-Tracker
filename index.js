document.getElementById('issueInputForm').addEventListener('sumbit',saveIssue);

function saveIssue(e){
    var issueDesc = document.getElementById('issueDescInput').value;
    var issueSeverity = document.getElementById('issueSeverityInput').value;
    var issueAssignedTo = document.getElementById('issueAssignedToInput').value;
    var issueId = change.guid();
    var issueStatus = 'OPen';

    var issue ={
        id: issueId,
        description: issueDesc,
        severity: issueSeverity,
        assignedTo: issueAssignedTo,
        status: issueStatus
    }
if (localStorage.getItem('issues') == null){
    var issues = [];
    issues.push(issue);
    localStorage.setItem('issues',JSON.stringify(issues));
}else{
    var issue = JSON.parse(localStorage.getItem('issues'));
    issues.push(issue);
    localStorage.setItem('issue',JSON.stringify(issue));
}
document.getElementById('issueInputForm').reset();
fetchIssue();
e.preventDefault();
}
 
function setStatusClosed(id){
    var issue = JSON.parse(localStorage.getItem('issues'));
    for (var i = 0; i < issues.length; i++){
        if(issues[i].id == id){
            issues[i].status = 'closed';
        }
    }
    localStorage.setItem('issue',JSON.stringify(issues));
    fetchIssue();   
}
function  deleteIssue(id){
    var issues = JSON.parse(localStorage.getItem('issues'));
     for(var i = 0; i < issues.length; i++){
         if(issues[i].id == id){
             issues.splice(i,1);
         }
     }
     localStorage.setItem('issues',JSON.stringify(issues));
     fetchIssues();
    }
