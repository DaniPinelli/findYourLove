let users = [
    {
        name:'Katy',
        gender: 'F',
        hobby: 'Movies',
        avatar: './images/avatar1.webp'
    },
    {
        name:'Danny',
        gender: 'M',
        hobby: 'Sports',
        avatar: './images/avatar2.jpg'
    },
    {
        name:'Eli',
        gender: 'F',
        hobby: 'Bible',
        avatar: './images/avatar3.webp'
    },
    {
        name:'Per',
        gender: 'M',
        hobby: 'Music',
        avatar: './images/avatar4.jpg'
    },
    {
        name:'Shania',
        gender: 'F',
        hobby: 'Music',
        avatar: './images/avatar5.png'
    },
    {
        name:'Marky',
        gender: 'M',
        hobby: 'Movies',
        avatar: './images/avatar6.jpg'
    },
    {
        name:'Jaimes',
        gender: 'M',
        hobby: 'Bible',
        avatar: './images/avatar7.jpg'
    },
    {
        name:'Ellen',
        gender: 'F',
        hobby: 'Bible',
        avatar: './images/avatar8.svg'
    },
    {
        name:'Marty',
        gender: 'M',
        hobby: 'Movies',
        avatar: './images/avatar9.png'
    }
];

window.addEventListener('load', () => {

    let search = () => {

            let hobbyField = document.getElementById('hobby');
            let hobby = hobbyField.value.toLowerCase().trim();
            
            let genderField = document.getElementById('gender');
            let selected = genderField.selectedIndex;
            let gender = genderField.options[selected].value;
            
    
            let resultsHTML = '';
            let numUsers = users.length;
    
            for (let i = 0; i < numUsers; i++) {

            if(gender == users[i].gender) {
                if(hobby == '' || hobby == users[i].hobby.toLowerCase()){
                    resultsHTML += '<div class="person-row">\
                    <img src=" ' + users[i].avatar + ' " />\
                    <div class="person-info">\
                    <div>' + users[i].name + '</div>\
                    <div>' + users[i].hobby + '</div></div>\
                    <button>Add as friend</button></div>'
                }
            }    
        
                    
        }
        results.innerHTML = resultsHTML;
    }
  
    let results = document.getElementById('results');
    let searchBtn = document.getElementById('searchBtn');
    searchBtn.addEventListener('click', search );

});

