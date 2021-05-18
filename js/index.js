window.addEventListener('load', () => {
  
    let results = document.getElementById('results');
    let searchBtn = document.getElementById('searchBtn');
    searchBtn.addEventListener('click', () => {
        results.innerHTML = 'Hello'

        let hobbyField = document.getElementById('hobby');
        let hobby = hobbyField.value;
        console.log(hobby);

        let genderField = document.getElementById('gender');
        let selected = genderField.selectedIndex;
        let gender = genderField.options[selected].value;
        console.log(gender);
    });

});