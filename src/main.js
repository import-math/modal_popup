document.getElementById('modal-button').addEventListener('click', function() {
    document.querySelector('.modal').style.display = 'flex';
})

document.getElementById('close').addEventListener('click', function() {
    document.querySelector('.modal').style.display = 'none';
})




function save() {
    let project_name = document.getElementById('project_name').value;
    let project_desc = document.getElementById('project_desc').value;
    
    if (project_name.length == 0 || project_desc.length == 0) {
        return
    }
    saveData(project_name, project_desc);

    document.getElementById('project_name').value = '';
    document.getElementById('project_desc').value = '';
}

document.getElementById('team').addEventListener('click', function() {
    document.querySelector('.center1').style.display = 'none';
    document.querySelector('#team').style.color = 'rgb(0, 153, 153)';
    document.querySelector('#general').style.color = 'rgb(0, 0, 0)';
    document.querySelector('#center-team').style.display = 'block';
    document.querySelector('.team-text').style.display = 'block';
    document.querySelector('.team-lead').style.display = 'block';

})

document.getElementById('general').addEventListener('click', function() {
    document.querySelector('.center1').style.display = 'block';
    document.querySelector('#team').style.color = 'rgb(0, 0, 0)';
    document.querySelector('#general').style.color = 'rgb(0, 153, 153)';
    document.querySelector('#center-team').style.display = 'none';
    document.querySelector('.team-text').style.display = 'none';
    document.querySelector('.team-lead').style.display = 'none';
})


// let people = {
//     1: {
//     name: 'Adam  Assembler',
//     email: 'blcktrade@gmail.com'
//     },
//     2: {
//         name: 'Yosef Morgin',
//         email: 'morg112@gmail.com'
//     }
// }

// let output = '';

// for (var i in people){
//     output += '<div class="person" id="'+i+'">' +
//               people[i].name + '(' + people[i].email + ')' +
//               '</div>';
              
// }

// document.querySelector('.team-left').innerHTML = output;


// ajax request to get the users
LoadUsers();

function LoadUsers() {
    var rqst = new XMLHttpRequest();
    rqst.open('GET', 'https://magnetic-d3a58.firebaseio.com/users.json', true)

    rqst.onload = function(){
        if(this.status == 200){
           
            var users = JSON.parse(this.responseText);
            console.log(users)
        

            var output = '';
            for(var i in users){
                console.log(users[i]);
                output += '<div class="person" id="'+i+'">' +
              users[i].name + ' (' + users[i].email + ')' +
              '</div>';

              
        }
            document.getElementById('team-left').innerHTML = output;
            pickUsers(users);
        }
    }

    rqst.send();
}

var selectedUsers = {};
// so now we want to use ids to create a logic for picking people for our next project. let's do this. 
function pickUsers(users){ 
    console.log(users)
    for(let b in users){
        console.log(b)

        document.getElementById(b).addEventListener('click', function(){
            if(document.getElementById(b).style.backgroundColor == ''){
                document.getElementById(b).style.backgroundColor = 'rgb(0, 153, 153)';
                selectedUsers[b] = users[b];
            } else if (document.getElementById(b).style.backgroundColor == 'rgb(0, 153, 153)'){
                document.getElementById(b).style.backgroundColor = '';
                delete selectedUsers[b];
            }
            console.log(selectedUsers)
        })
    
        // document.getElementById(ids[b]).addEventListener('click', function(){
        //     if (document.getElementById(ids[b]).style.backgroundColor == 'rgb(0, 153, 153)'){
        //         document.getElementById(ids[b]).style.backgroundColor = '';
        //         selectedUsers.splice(selectedUsers.indexOf((ids[b])), 1);
        //         console.log('deleted from an array'+ ' ' + selectedUsers);
        //     } else if ( document.getElementById(ids[b]).style.backgroundColor == ''){
        //         document.getElementById(ids[b]).style.backgroundColor = 'rgb(0, 153, 153)';
        //         selectedUsers.push(ids[b]);
        //         console.log('added to array' + ' ' + selectedUsers);
        //     } else {
        //         return
        //     }

        // })
    }
}

function selectUsers(){
    console.log(selectedUsers);
    if(Object.keys(selectedUsers).length === 0){
        return
    } else {
    let output = '';
    for(let i in selectedUsers){
        output += '<div class="person" id="right_'+i+'">' +
        selectedUsers[i].name + ' (' + selectedUsers[i].email + ')' +
        '</div>';
        document.getElementById(i).style.backgroundColor = '';
        

        
  }
      selectedUsers = {};
      document.getElementById('team-right').innerHTML = output;
}
}











function newProject() {
    let rqst = new XMLHttpRequest();

    rqst.open('POST', 'https://magnetic-d3a58.firebaseio.com/users', true);
    rqst.setRequestHeader('Content-type', 
    )
}



// firebase save

// function saveData(project_name, project_desc){
//     var user = {
//         name: project_name,
//         desc: project_desc
//     };
//     let db = firebase.database().ref("users/");
//     db.set(user);
// }


// function getData(data){
//     let users = JSON.parse(data.val());
//     console.log(users);
//     loadData(users);

// }
// function errData(err){
//     console.log('error');
//     console.log(err);
// }

// function loadData(users){
//     for(let i in users){
//         console.log(users[i])
//     }
// }

