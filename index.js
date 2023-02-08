const menuHamburger = document.querySelector(".menu-hamburger")
const navLinks = document.querySelector(".nav")

menuHamburger.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu')
})

const graph = document.getElementById('graph').getContext('2d');

let myChart = new Chart(graph , {
    type : "bar" ,
    data: {
        labels: [
            "html" ,
             "css" ,
              "js" ,
               "ui" ,
                "ux" ],
        datasets: [
            {
                label : "Niveau en %" ,
                data : [100 , 100 , 75 , 49 , 50 ],
                backgroundColor : [
                    "grey" , 
                    "grey" , 
                    "grey " , 
                    "grey" , 
                    "grey" ,
                ]  ,
                hoverBorderWidth:3 ,
            },
        ],
    },

});