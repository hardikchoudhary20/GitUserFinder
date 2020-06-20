//my file 
class UI{
    constructor(){
        this.profile = document.getElementById('profile');
}
    //display profile in UI
    showprofile(user){
      this.profile.innerHTML = `
      <div class ="card card-body mb-3">
      <div class = "row">
      <div class = "col-md-3">
<img class = "img-fluid mb-2" src="${user.avatar_url}">
<a href = "${user.html_url}" target= "_blank" class = btn btn-primary btn-block mb-4">View Profile</a>
</div>
<div class="col-md-9">
<span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
<span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
<span class="badge badge-success">Followers: ${user.followers}</span>
<span class="badge badge-info">Following: ${user.following}</span>
<br><br>
<ul class="list-group">
<li class="list-group-item">Company: ${user.company}</li>
<li class="list-group-item">Website/Blog: ${user.blog}</li>
<li class="list-group-item">Location: ${user.location}</li>
<li class="list-group-item">Member Since: ${user.created_at}</li>
</ul>
</div>
</div>
</div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
      `;
    }
//show user repos
showRepos(repos) {
        let output = '';
    
        repos.forEach(function(repo) {
          output += `
            <div class="card card-body mb-2">
              <div class="row">
                <div class="col-md-6">
                  <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                </div>
                <div class="col-md-6">
                <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                <span class="badge badge-success">Forks: ${repo.forms_count}</span>
                </div>
              </div>
            </div>
          `;
        });
        // Output repos
        document.getElementById('repos').innerHTML = output;
      }
    
    
    //show alert message
    showAlert(message, className) {
        //clear any remaining alert 
        this.clearAlert(); // if the function showAlert will 
        //run again then the previous alert will be deleted 
        //create div 
        const div = document.createElement('div');
       //add classname
        div.className = className;
        //add text 
        div.appendChild(document.createTextNode(message));
        //get parent
        const container =  document.querySelector('.searchContainer');
        const search = document.querySelector('.search ');
        //insert alert 
        container.insertBefore(div,search);

        //timeout after 3 sec 
        setTimeout(() => {
            this.clearAlert();

        },2500)

    }
   // Show user repos
  
    //clear alert message (bahut sare alert a jate hai )
    clearAlert(){

        const currentAlert = document.querySelector('.alert');//selecting current alert 
        if(currentAlert ){ // if there is an alert 
            currentAlert.remove();//will remoove the alert 
        }
    }
    //clear profile message 
    clearprofile(){
        this.profile.innerHTML='';
    }
}
