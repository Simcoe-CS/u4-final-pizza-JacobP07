function calc() {

    let option = document.getElementsByName("op")
    let p = document.getElementsByName("image")

    let total = 0;
    if (option[0].checked) {
        total = total + Number(option[0].value);
        p[0].style.opacity = .8

    }

    if (option[1].checked) {
        total = total + Number(option[1].value);
        p[1].style.opacity = .8


    }

    if (option[2].checked) {
        total = total + Number(option[2].value);
        p[2].style.opacity = .8



    }

    if (option[3].checked) {
        total = total + Number(option[3].value);
        p[3].style.opacity = .8



    }

    if (option[4].checked) {
        total = total + Number(option[4].value);
        p[4].style.opacity = .8



    }

    if (option[5].checked) {
        total = total + Number(option[5].value);
        p[5].style.opacity = .8



    }

    let tot = total * .13
    out1.innerHTML = "your total before taxes is $" + total
    out2.innerHTML = "your total taxes is $" + tot.toFixed(2)
    out3.innerHTML = "your total is $" + (Number(total) + Number(tot)).toFixed(2)

}

function reset() {
    out1.innerHTML = "...";
    out2.innerHTML = "...";
    out3.innerHTML = "...";


}


