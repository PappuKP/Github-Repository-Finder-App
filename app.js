// init GitHub

const gitRepo = new Github();

// init UI

const ui = new UI();


// Search Repo

const searchRepo = document.querySelector('.searchGithub');

// Add Event Listener

searchRepo.addEventListener('keyup', e => {


  // Get input Text

  const userTex = e.target.value;

  if (userTex !== '') {

    // Make an HTTP call to Github API

    gitRepo.getRepo(userTex).then(data => {


      // Display Results

      ui.showRepo(data.repo);


    });



  } else {


    ui.clearProfile();

  }



})