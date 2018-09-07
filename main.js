const projects  = [
    {
        name: "Samfund | Weekendavisen", 
        img: "images/weekendavisen.jpg", 
        description: "", 
        link: "https://weekendavisen.dk/2018-33/samfund"
    },
    {
        name: "PC Parts and Services", 
        img: "images/pcpartsandservices.png", 
        description: "PC Parts and Service is a local computer repair store that wanted a modern clean interface for their new one page site.", 
        link: "https://pcpartsandservices.com/"
    },
    {
        name: "Shear Elegance Hair Salon", 
        img: "images/shearelegance.png", 
        description: "Shear Elegance is a website designed for a local hair salon.", 
        link: "https://www.zfoutz.com/clients/shear-elegance/"
    },
    {
        name: "Modern Studio Equipment", 
        img: "images/modernstudioequipment.png", 
        description: "Modern Studio Equipment is a site that was built under contract from JB Ventures.", 
        link: "https://www.zfoutz.com/clients/jbventures/"
    },
    {
        name: "Kitsap Sun", 
        img: "images/kitsapsun.png", 
        description: "A local news site", 
        link: "https://www.kitsapsun.com/"
    },
    {
        name: "Titan Security Key Bundle, BT & NFC FIDO U2F - Google Store", 
        img: "images/titan.jpg",
        description: "",
        link: "https://store.google.com/us/product/titan_security_key_kit?ref=land-book.com"
    }
]

window.fadeIn = function(obj) {
    obj.style.opacity = 1;
}
var last_project = 0;
var current_projects = [];
var modal = document.querySelector('#project_modal');
document.addEventListener("DOMContentLoaded", e => {
    modal.addEventListener('click', e => {
        modal.style.zIndex = '-1';
        modal.style.opacity = 0;
        unblurAll();
        document.querySelector('body').classList = '';
    })
    reload_projects();
})

function next_projects(){
    if(last_project >= projects.length){
        last_project = 0;
    }
    reload_projects();
}

function reload_projects(){
    replicate("tpl_project", [])
    replicate("tpl_project", projects, (e,d,i) => {
        e.addEventListener('click', ev => {
            replicate('project_modal_content', [d])
            modal.style.zIndex = "100";
            modal.style.opacity = 1;
            blurAll();
            document.querySelector('body').classList += 'noScroll';
        })
    });
}

function blurAll() {
    let blurs = document.getElementsByClassName('blur');
    for(let blur of blurs) {
        console.log("blurring: ", blur)
        blur.style.filter = "blur(4px)";
    }
}

function unblurAll() {
    let blurs = document.getElementsByClassName('blur');
    for(let blur of blurs) {
        console.log("un-blurring: ", blur)
        blur.style.filter = "none";
    }
}
