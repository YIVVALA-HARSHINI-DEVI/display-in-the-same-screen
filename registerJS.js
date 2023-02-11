var sname = document.getElementById("name");
var email = document.getElementById("email");
var birth = document.getElementById("birth");
var mobile = document.getElementById("mobile");
var amount = document.getElementById("amount");
var radio1 = document.getElementById("radio1");
var radio2 = document.getElementById("radio2");
var check2 = document.getElementById("check2");
var check3 = document.getElementById("check3");
var check4 = document.getElementById("check4");
var statuscard = document.querySelector(".statuscard");
var btn = document.querySelector('.submit_btn');
var form = document.querySelector('form');
btn.addEventListener('click', function () {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    let checked_values = [];

    checkboxes.forEach((checkbox) => {
        checked_values.push(checkbox.value);
    });

    if (!sname.value || !email.value || !birth.value || !mobile.value || !amount.value) {
        alert('ERROR: All the fields must be filled!');
    }
    else {
        statuscard.innerHTML += `
        <div class="card " style="width:500px;background: linear-gradient(to bottom right, #ffcccc 0%, #66ccff 100%);height:210px;padding-top: 5px;margin-left:20px;">
            <div class="card-body">
                <h4 class="card-title">${sname.value}</h4>
                <b class="card-text">${radio1.checked ? radio1.value : (radio2.checked ? radio2.value : 'Others')}</b><br>
                <b class="card-text">Email ID : ${email.value}</b><br>
                <b class="card-text">Date of Birth : ${birth.value}</b><br>
                <b class="card-text">Phone Number : ${mobile.value}</b><br>
                <b class="card-text">Salary : ${amount.value}</b><br>
                <b class="card-text">Skills : ${checked_values}</b>
            </div>
        </div>`;
        alert('Status Submitted Successfully!');
        form.reset();
        }
});
