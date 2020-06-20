//init github
const github = new Github();
//search input 
const Ui = new UI();

const searchUser = document.getElementById('searchUser').addEventListener(
    'keyup',(e) => {
        //get input text
       const usertext = e.target.value;

       if(usertext !== ''){
           //make an http call 
           github.getUser(usertext)
           .then(data=>
            {if(data.profile.message === 'Not Found'){

                ///show alert
                Ui.showAlert('User Not Found','alert alert-danger')

            }
        else{
            //show profile
            Ui.showprofile(data.profile);
            Ui.showRepos(data.repos)
        }}
            )
       }
       else{
           //clear profile
           Ui.clearprofile();
       }
           
       

    }
)