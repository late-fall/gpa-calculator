let convert = document.getElementById('convert-btn');
let univ = document.getElementById('univ-type');
let gradeRow = document.querySelector('.grade-row');
let numbers = document.getElementById('course-numbers');
let gradeType = '';
const radioBtns = document.querySelectorAll('input[name="grade-type"]');

univ.addEventListener('change', () => {
    const univType = document.getElementById('univ-type').value;
    if (univType == "37" || univType == "47"){
        document.querySelector(".grade-choice").style.display = "initial";
    }
    else if (univType == "3" || univType== "6"){
        document.querySelector(".grade").placeholder = "Enter Percentage(%) Grade";
        gradeType = 'pct';
    }
    else if (univType == "7" || univType== "8" || univType == "9"){
        document.querySelector(".grade").placeholder = "Enter Alpha Grade";
        gradeType = 'alpha';
    }
});

numbers.addEventListener('change', () => {
    const coursesTaken = numbers.value;
    for (let i = 0; i < coursesTaken -1 ; i++){
        document.querySelector('.row').innerHTML += 
        '<div class="grade-row">' + gradeRow.innerHTML + '</div>';
    }
});

convert.addEventListener('click', function(){
    const uni = document.getElementById('univ-type').value;
    if (uni == "3" || uni == "6"){
        gradeType = 'pct';
    }
    else if (uni == "7" || uni == "8" || uni == "9"){
        gradeType = 'alpha';
    }
    else {
        for (const radiobtn of radioBtns){
            if (radiobtn.checked){
                gradeType = radiobtn.value;
                break;
            }
        }
    }
    
    switch(gradeType){
        case 'alpha':
            calc_alpha();
            break;
        case 'pct':
            switch(uni){
                case '3':
                case '37':
                    calc_pct3();
                    break;
                case '47':
                    calc_pct4();
                    break;
                case '6':
                    calc_pct6();
                    break;
            }
            break;
        default:
            alert('Error!');

    function calc_alpha(){
        let total = 0;
        let gpa = '';
        let num = 0;
        document.querySelectorAll(".grade").forEach((item)=>{
            switch(item.value.toUpperCase()){
                case 'A+':
                    gpa = 4.0;
                    break;
                case 'A':
                    if (uni == '9'){
                        gpa = 3.9;
                    }
                    else if (uni == '8'){
                        gpa = 4.0;
                    }
                    else {
                        gpa = 3.8;
                    }
                    break;
                case 'A-':
                    gpa = 3.7;
                    break;
                case 'B+':
                    gpa = 3.3;
                    break;
                case 'B':
                    gpa = 3.0;
                    break;
                case 'B-':
                    gpa = 2.7;
                    break;
                case 'C+':
                    gpa = 2.3;
                    break;
                case 'C':
                    gpa = 2.0;
                    break;
                case 'C-':
                    gpa = 1.7;
                    break;
                case 'D+':
                    gpa = 1.3;
                    break;
                case 'D':
                    gpa = 1.0;
                    break;
                case 'D-':
                    gpa = 0.7;
                    break;
                default:
                    gpa = 0.0;
            }
            item.nextElementSibling.nextElementSibling.innerHTML = gpa.toFixed(2);
            let creditVal = parseInt(item.nextElementSibling.value);
            num += creditVal;
            total += gpa * creditVal;
        });
        let avg = (total / num).toFixed(2);
        document.getElementById('output').innerHTML = 'Your average GPA is ' + avg;
    }
    function calc_pct3(){
        let total = 0;
        let gpa = '';
        document.querySelectorAll(".grade").forEach((item)=>{
            if (item.value >= 90){
                gpa = 4.0;
            }
            else if (item.value >= 85){
                gpa = 3.9;
            }
            else if (item.value >= 80){
                gpa = 3.7;
            }
            else if (item.value >= 77){
                gpa = 3.3;
            }
            else if (item.value >= 73){
                gpa = 3.0;
            }
            else if (item.value >= 70){
                gpa = 2.7;
            }
            else if (item.value >= 67){
                gpa = 2.3;
            }
            else if (item.value >= 63){
                gpa = 2.0;
            }
            else if (item.value >= 60){
                gpa = 1.7;
            }
            else if (item.value >= 57){
                gpa = 1.3;
            }
            else if (item.value >= 53){
                gpa = 1.0;
            }
            else if (item.value >= 50){
                gpa = 0.7;
            }
            else{
                gpa = 0;
            }            
            item.nextElementSibling.nextElementSibling.innerHTML = gpa.toFixed(2);
            let creditVal = parseInt(item.nextElementSibling.value);
            num += creditVal;
            total += gpa * creditVal;
        });
        let avg = (total / num).toFixed(2);
        document.getElementById('output').innerHTML = 'Your average GPA is ' + avg;
    }
    function calc_pct4(){
        let total = 0;
        let gpa = '';
        document.querySelectorAll(".grade").forEach((item)=>{
            if (item.value >= 93){
                gpa = 4.0;
            }
            else if (item.value >= 84){
                gpa = 3.9;
            }
            else if (item.value >= 75){
                gpa = 3.7;
            }
            else if (item.value >= 72){
                gpa = 3.3;
            }
            else if (item.value >= 69){
                gpa = 3.0;
            }
            else if (item.value >= 66){
                gpa = 2.7;
            }
            else if (item.value >= 64){
                gpa = 2.3;
            }
            else if (item.value >= 62){
                gpa = 2.0;
            }
            else if (item.value >= 60){
                gpa = 1.7;
            }
            else if (item.value >= 56){
                gpa = 1.3;
            }
            else if (item.value >= 53){
                gpa = 1.0;
            }
            else if (item.value >= 50){
                gpa = 0.7;
            }
            else{
                gpa = 0;
            }            
            item.nextElementSibling.nextElementSibling.innerHTML = gpa.toFixed(2);
            let creditVal = parseInt(item.nextElementSibling.value);
            num += creditVal;
            total += gpa * creditVal;
        });
        let avg = (total / num).toFixed(2);
        document.getElementById('output').innerHTML = 'Your average GPA is ' + avg;
    }
    function calc_pct4(){
        let total = 0;
        let gpa = '';
        document.querySelectorAll(".grade").forEach((item)=>{
            if (item.value >= 94){
                gpa = 4.0;
            }
            else if (item.value >= 85){
                gpa = 3.9;
            }
            else if (item.value >= 80){
                gpa = 3.7;
            }
            else if (item.value >= 75){
                gpa = 3.3;
            }
            else if (item.value >= 70){
                gpa = 3.0;
            }
            else if (item.value >= 65){
                gpa = 2.7;
            }
            else if (item.value >= 60){
                gpa = 2.3;
            }
            else if (item.value >= 55){
                gpa = 2.0;
            }
            else if (item.value >= 50){
                gpa = 1.0;
            }
            else{
                gpa = 0;
            }            
            item.nextElementSibling.nextElementSibling.innerHTML = gpa.toFixed(2);
            let creditVal = parseInt(item.nextElementSibling.value);
            num += creditVal;
            total += gpa * creditVal;
        });
        let avg = (total / num).toFixed(2);
        document.getElementById('output').innerHTML = 'Your average GPA is ' + avg;
    }
    }
});