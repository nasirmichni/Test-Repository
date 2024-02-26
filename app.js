

        let timeShow = document.getElementById("timeShow");
        let img = document.querySelector(".img");
        let body = document.querySelector("body");

        body.addEventListener("click", (e) => {
            let clickTime = new Date();
            let clickTimeString = clickTime.toLocaleTimeString();
            timeShow.textContent = `Clicked at ${clickTimeString}`;
           
            img.style.position = "fixed";
            img.style.top = `${e.clientY}px`;
            img.style.left = `${e.clientX}px`;
        });

