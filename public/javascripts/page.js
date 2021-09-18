// Burger Button

function burgerButtonM() {
    let burger = document.getElementById("burgerButton");
    burger.classList.toggle("is-active");
    let dropdown = document.getElementById("mobile_Active");
    dropdown.style.display = "flex";
    document.body.classList.add("panel_Opened");

    burger.addEventListener('click', function() {
        if(dropdown.style.display === "none"){
            dropdown.style.display = "flex";
            document.body.classList.add("panel_Opened");
        }
        else
        {
            dropdown.style.display = "none";
            document.body.classList.remove("panel_Opened");
        }
    })
}
