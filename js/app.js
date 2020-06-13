const github = new Github;
const ui = new UI;
const searchUser = document.getElementById('searchUser');
searchUser.addEventListener('keyup',(e) => {
    const userText = e.target.value;
    // console.log(userText);
    if(userText !== ''){
        github.getUsers(userText)
            .then(data => {
                if(data.profile.message === 'Not Found'){
                    ui.showAlert('Username is not found', 'text-white mx-auto alert bg-danger');
                }else{
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })
    }else{
        ui.clearProfile();
    }
})