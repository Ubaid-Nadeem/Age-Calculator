let date = document.getElementById('date');
let Calcualte = document.getElementById('Calcualte')
let result = document.getElementById('result')
Calcualte.addEventListener('click', () => {
    if (date.value) {
        let ar = date.value.split('-');
        let newDate = new Date();
        let userDate = new Date(`${ar[0]} ${ar[1]} ${ar[2]}`);
        let year = newDate.getFullYear() - userDate.getFullYear();
        let month = 11 - userDate.getMonth();
        let userMonth = Number(userDate.getMonth());
        let userYear = Number(userDate.getFullYear());
        let lastDate = new Date(userYear, userMonth + 1, 0);
        let days;
        if (userDate.getMonth() == newDate.getMonth()) {
            days = newDate.getDate() - userDate.getDate();
        }
        else {
            days = lastDate.getDate() - userDate.getDate() + newDate.getDate();
        }
        result.style.color = '#16a085'   
        if (month == 11) {
            if (year >= 1) {
                result.innerText = `Your age is ${year - 1} years and ${days} days`
            }
            else {
                result.innerText = `Your age is ${days} days`
            }
        }
        else {
            if (year - 1 == 0) {
                if (month == 0) {
                    result.innerText = `Your age is ${days} days`
                }
                else {
                    result.innerText = `Your age is ${month} months and ${days} days`
                }
            }
            else {
                result.innerText = `Your age is ${year >= 1 ? year - 1 : year} years, ${month} months and ${days} days`
            }
        }
    }
    else {
        result.style.color = '#ff4c30'
        result.innerText = "Please enter a valid date"
    }
})