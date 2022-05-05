const styles = ["red", "green", "blue", "purple", "yellow", "orange", "white", "pink", "gray"];
const sizes = ["long", "small", "medium", "big"];
const speed = ["fast", "normal", "slow"];

const confetti = document.querySelector(".confetti");

console.log((sizes.length ** styles.length).toLocaleString(), "possible confetti");

setInterval(() => {
    const cont = document.createElement("div");
    cont.classList.add(
        "rot",
        speed[Math.floor(Math.random() * speed.length)]
    );

    cont.style.left = `${Math.random() * 100}%`;

    const el = document.createElement("div");
    el.classList.add(
        styles[Math.floor(Math.random() * styles.length)],
        sizes[Math.floor(Math.random() * sizes.length)]
    );
    el.style.transform = `rotate(${Math.random() * 360}deg)`;

    cont.appendChild(el);

    confetti.appendChild(cont);

    setTimeout(() => {
        cont.remove();
        el.remove();
    }, 3000);
}, 100);

// config.css
/.rot {
    position: absolute;
    top: -50px;

    animation-name: down;
    animation-timing-function: linear;
}

@keyframes down {
    from { top: -10px; transform: rotate(0deg); }
    to { top: 100vh; transform: rotate(359deg); }
}

.red { background: rgb(255, 54, 54); }
.green { background: rgb(0, 170, 0); }
.blue { background: rgb(0, 110, 255); }
.purple { background: rgb(181, 23, 196); }
.yellow { background: rgb(255, 223, 41); }
.orange { background: rgb(255, 133, 34); }
.white { background: rgb(227, 232, 240); }
.pink { background: rgb(255, 171, 171); }
.grey { background: rgb(117, 121, 124); }

.long { width: 30px; height: 10px; }
.small { width: 10px; height: 10px; }
.medium { width: 15px; height: 15px; }
.big { width: 20px; height: 20px; }

.fast { animation-duration: 1s; }
.normal { animation-duration: 2s; }
.slow { animation-duration: 3s; }/
