
/* =========================================================
   CERTIFICATE LIGHTBOX
========================================================= */

function openCertificate(imagePath) {

    const lightbox = document.getElementById("certificate-lightbox");
    const image = document.getElementById("certificate-image");

    if (!lightbox || !image) return;

    image.src = imagePath;

    lightbox.classList.add("active");

    document.body.style.overflow = "hidden";
}


function closeCertificate() {

    const lightbox = document.getElementById("certificate-lightbox");
    const image = document.getElementById("certificate-image");

    if (!lightbox || !image) return;

    lightbox.classList.remove("active");

    image.src = "";

    document.body.style.overflow = "";
}


const certificateLightbox =
    document.getElementById("certificate-lightbox");

if (certificateLightbox) {

    certificateLightbox.addEventListener("click", function (event) {

        if (event.target === this) {

            closeCertificate();

        }

    });

}


/* =========================================================
   TASK LIGHTBOX - SHARED FUNCTIONS
========================================================= */

function hideAllTaskViews() {

    const elementsToHide = [

        "relay-gallery",
        "relay-counter",

        "timer-gallery",
        "timer-counter",

        "motor-starting-gallery",
        "motor-starting-counter",

        "timer-task-gallery",
        "timer-task-counter",
        "timer-task-info",

        "contactor-gallery",
        "contactor-counter",

        "star-delta-gallery",
        "star-delta-counter",

        "star-delta-task-gallery",
        "star-delta-task-counter",
        "star-delta-task-info",

        "troubleshooting-gallery",
        "troubleshooting-counter",
        "ats-gallery",
        "ats-counter",
        "ats-task-gallery",
        "ats-task-counter",
        "ups-gallery",
        "ups-counter",

        "powerfactor-gallery",
        "powerfactor-counter",
        "proximity-gallery",
        "sensor-guide-gallery",
        "photoelectric-gallery",
        "level-switch-gallery",
        "flow-switch-gallery",
        "ac-drive-fundamentals-gallery",
        "ac-drive-fundamentals-gallery",
        "ac-drive-wiring-gallery",
        "ac-drive-parameters-gallery",
        "ac-drive-master-slave-gallery",

    ];


    elementsToHide.forEach(function (id) {

        const element = document.getElementById(id);

        if (element) {

            element.style.display = "none";

        }

    });


    const image = document.getElementById("task-image");

    if (image) {

        image.src = "";

        image.style.display = "none";

    }

}


/* =========================================================
   OPEN SINGLE TASK IMAGE
========================================================= */

function openTaskImage(imagePath) {

    const lightbox = document.getElementById("task-lightbox");
    const image = document.getElementById("task-image");

    if (!lightbox || !image) return;

    hideAllTaskViews();

    image.src = imagePath;

    image.style.display = "block";

    lightbox.classList.add("active");

    document.body.style.overflow = "hidden";
}


/* =========================================================
   OPEN SMALL TASK IMAGE
========================================================= */

function openSmallTaskImage(imagePath) {
    const lightbox = document.getElementById("task-lightbox");
    const image = document.getElementById("task-image");

    if (!lightbox || !image) {
        console.error("Task lightbox or task image element was not found.");
        return;
    }

    hideAllTaskViews();

    image.style.maxWidth = "65%";
    image.style.maxHeight = "65vh";
    image.style.width = "auto";
    image.style.height = "auto";
    image.style.objectFit = "contain";
    image.style.display = "block";
    image.src = imagePath;

    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
}


/* =========================================================
   CLOSE TASK LIGHTBOX
========================================================= */

function closeTaskImage() {

    const lightbox = document.getElementById("task-lightbox");

    if (!lightbox) return;

    lightbox.classList.remove("active");

    hideAllTaskViews();

    document.body.style.overflow = "";

}


/* =========================================================
   CLOSE TASK LIGHTBOX BY CLICKING OUTSIDE
========================================================= */

const taskLightbox =
    document.getElementById("task-lightbox");


if (taskLightbox) {

    taskLightbox.addEventListener("click", function (event) {

        if (event.target === this) {

            closeTaskImage();

        }

    });

}


/* =========================================================
   RELAY IMAGE GALLERY
========================================================= */

const relayImagesList = [

    "../Learning-Images/classic_control/relay-1.png",

    "../Learning-Images/classic_control/relay-2.png"

];


let currentRelayImage = 0;


/* OPEN RELAY GALLERY */

function openRelayImages() {

    const lightbox =
        document.getElementById("task-lightbox");

    const gallery =
        document.getElementById("relay-gallery");

    const counter =
        document.getElementById("relay-counter");


    if (!lightbox || !gallery) return;


    hideAllTaskViews();


    currentRelayImage = 0;


    gallery.style.display = "flex";


    if (counter) {

        counter.style.display = "block";

    }


    showRelayImage();


    lightbox.classList.add("active");


    document.body.style.overflow = "hidden";

}


/* SHOW CURRENT RELAY IMAGE */

function showRelayImage() {

    const image =
        document.getElementById("relay-image");

    const counter =
        document.getElementById("relay-counter");


    if (!image || !relayImagesList.length) return;


    image.src =
        relayImagesList[currentRelayImage];


    if (counter) {

        counter.textContent =
            (currentRelayImage + 1) +
            " / " +
            relayImagesList.length;

    }

}


/* PREVIOUS RELAY IMAGE */

function previousRelayImage() {

    currentRelayImage--;


    if (currentRelayImage < 0) {

        currentRelayImage =
            relayImagesList.length - 1;

    }


    showRelayImage();

}


/* NEXT RELAY IMAGE */

function nextRelayImage() {

    currentRelayImage++;


    if (currentRelayImage >= relayImagesList.length) {

        currentRelayImage = 0;

    }


    showRelayImage();

}


/* =========================================================
   TIMERS - LEARNING GALLERY
========================================================= */

const timerImagesList = [

    "../Learning-Images/classic_control/timer/1.png",
    "../Learning-Images/classic_control/timer/2.png",
    "../Learning-Images/classic_control/timer/3.png",
    "../Learning-Images/classic_control/timer/4.png",
    "../Learning-Images/classic_control/timer/5.png",
    "../Learning-Images/classic_control/timer/6.png"

];


let currentTimerImage = 0;


/* OPEN TIMERS LEARNING GALLERY */

function openTimerImages() {

    const lightbox =
        document.getElementById("task-lightbox");

    const gallery =
        document.getElementById("timer-gallery");

    const counter =
        document.getElementById("timer-counter");


    if (!lightbox || !gallery) return;


    hideAllTaskViews();


    currentTimerImage = 0;


    gallery.style.display = "flex";


    if (counter) {

        counter.style.display = "block";

    }


    showTimerImage();


    lightbox.classList.add("active");


    document.body.style.overflow = "hidden";

}


/* SHOW CURRENT TIMER IMAGE */

function showTimerImage() {

    const image =
        document.getElementById("timer-image");

    const counter =
        document.getElementById("timer-counter");


    if (!image || !timerImagesList.length) return;


    image.src =
        timerImagesList[currentTimerImage];


    if (counter) {

        counter.textContent =
            (currentTimerImage + 1) +
            " / " +
            timerImagesList.length;

    }

}


/* PREVIOUS TIMER IMAGE */

function previousTimerImage() {

    currentTimerImage--;


    if (currentTimerImage < 0) {

        currentTimerImage =
            timerImagesList.length - 1;

    }


    showTimerImage();

}


/* NEXT TIMER IMAGE */

function nextTimerImage() {

    currentTimerImage++;


    if (currentTimerImage >= timerImagesList.length) {

        currentTimerImage = 0;

    }


    showTimerImage();

}


/* =========================================================
   MOTOR STARTING METHODS - LEARNING GALLERY
========================================================= */

const motorStartingImagesList = [

    "../Learning-Images/classic_control/Starting_Motor/1.png",
    "../Learning-Images/classic_control/Starting_Motor/2.png",
    "../Learning-Images/classic_control/Starting_Motor/3.png",
    "../Learning-Images/classic_control/Starting_Motor/4.png",
    "../Learning-Images/classic_control/Starting_Motor/5.png",
    "../Learning-Images/classic_control/Starting_Motor/6.png"

];


let currentMotorStartingImage = 0;


/* OPEN MOTOR STARTING METHODS GALLERY */

function openMotorStartingImages() {

    const lightbox =
        document.getElementById("task-lightbox");

    const gallery =
        document.getElementById("motor-starting-gallery");

    const counter =
        document.getElementById("motor-starting-counter");


    if (!lightbox || !gallery) return;


    hideAllTaskViews();


    currentMotorStartingImage = 0;


    gallery.style.display = "flex";


    if (counter) {

        counter.style.display = "block";

    }


    showMotorStartingImage();


    lightbox.classList.add("active");


    document.body.style.overflow = "hidden";

}


/* SHOW CURRENT MOTOR STARTING IMAGE */

function showMotorStartingImage() {

    const image =
        document.getElementById("motor-starting-image");

    const counter =
        document.getElementById("motor-starting-counter");


    if (!image || !motorStartingImagesList.length) return;


    image.src =
        motorStartingImagesList[currentMotorStartingImage];


    if (counter) {

        counter.textContent =
            (currentMotorStartingImage + 1) +
            " / " +
            motorStartingImagesList.length;

    }

}


/* PREVIOUS MOTOR STARTING IMAGE */

function previousMotorStartingImage() {

    currentMotorStartingImage--;


    if (currentMotorStartingImage < 0) {

        currentMotorStartingImage =
            motorStartingImagesList.length - 1;

    }


    showMotorStartingImage();

}


/* NEXT MOTOR STARTING IMAGE */

function nextMotorStartingImage() {

    currentMotorStartingImage++;


    if (currentMotorStartingImage >= motorStartingImagesList.length) {

        currentMotorStartingImage = 0;

    }


    showMotorStartingImage();

}


/* =========================================================
   TIMER CONTROL TASKS - IMAGES
========================================================= */

const timerTaskImagesList = [

    "../Task-Images/timers/1.png",
    "../Task-Images/timers/2.png",
    "../Task-Images/timers/3.png",
    "../Task-Images/timers/4.png",
    "../Task-Images/timers/5.png",
    "../Task-Images/timers/6.png"

];


/* =========================================================
   TIMER CONTROL TASKS - TITLES & DESCRIPTIONS
========================================================= */

const timerTaskData = [

    {

        title:
            "06. Alternating Motor Control Using Timers",

        description:
            "Automatically alternates between two motors, operating each for a preset time in a continuous repeating cycle."

    },

    {

        title:
            "07. Cyclic Motor Control Using On-Delay Timers",

        description:
            "Automatically operates a motor for 5 seconds and stops it for 2 seconds, repeating the cycle continuously."

    },

    {

        title:
            "08. Automatic Forward-Reverse Motor Control Using Timers",

        description:
            "Automatically alternates the motor's rotation between forward and reverse directions at preset time intervals in a continuous cycle."

    },

    {

        title:
            "09. Motor Start-Stop Delay Control Using Timers",

        description:
            "Delays motor startup by 5 seconds after pressing Start and delays motor shutdown for a preset time after pressing Stop."

    },

    {

        title:
            "10. Sequential Three-Motor Control Using Timers",

        description:
            "Starts Motors 1 and 2 simultaneously, switches off Motor 2 after a preset time, and activates Motor 3 for a timed cycle after Motor 1 stops."

    },

    {

        title:
            "11. Forward-Reverse Motor Control with Timed Intervals",

        description:
            "Automatically runs the motor forward and reverse for preset durations, with a 2-second stop between each direction change."

    }

];


let currentTimerTaskImage = 0;


/* OPEN TIMER CONTROL TASKS */

function openTimerTaskImages() {

    const lightbox =
        document.getElementById("task-lightbox");

    const gallery =
        document.getElementById("timer-task-gallery");

    const counter =
        document.getElementById("timer-task-counter");

    const info =
        document.getElementById("timer-task-info");


    if (!lightbox || !gallery) return;


    hideAllTaskViews();


    currentTimerTaskImage = 0;


    if (info) {

        info.style.display = "block";

    }


    gallery.style.display = "flex";


    if (counter) {

        counter.style.display = "block";

    }


    showTimerTaskImage();


    lightbox.classList.add("active");


    document.body.style.overflow = "hidden";

}


/* SHOW CURRENT TIMER CONTROL TASK */

function showTimerTaskImage() {

    const image =
        document.getElementById("timer-task-image");

    const counter =
        document.getElementById("timer-task-counter");

    const title =
        document.getElementById("timer-task-title");

    const description =
        document.getElementById("timer-task-description");


    if (!image || !timerTaskImagesList.length) return;


    image.src =
        timerTaskImagesList[currentTimerTaskImage];


    if (counter) {

        counter.textContent =
            (currentTimerTaskImage + 1) +
            " / " +
            timerTaskImagesList.length;

    }


    const task =
        timerTaskData[currentTimerTaskImage];


    if (task && title) {

        title.textContent =
            task.title;

    }


    if (task && description) {

        description.textContent =
            task.description;

    }

}


/* PREVIOUS TIMER CONTROL TASK */

function previousTimerTaskImage() {

    currentTimerTaskImage--;


    if (currentTimerTaskImage < 0) {

        currentTimerTaskImage =
            timerTaskImagesList.length - 1;

    }


    showTimerTaskImage();

}


/* NEXT TIMER CONTROL TASK */

function nextTimerTaskImage() {

    currentTimerTaskImage++;


    if (currentTimerTaskImage >= timerTaskImagesList.length) {

        currentTimerTaskImage = 0;

    }


    showTimerTaskImage();

}


/* =========================================================
   STAR-DELTA METHOD - LEARNING GALLERY
========================================================= */

const starDeltaImagesList = [

    "../Learning-Images/classic_control/star_delta/1.png",
    "../Learning-Images/classic_control/star_delta/2.png",
    "../Learning-Images/classic_control/star_delta/3.png",
    "../Learning-Images/classic_control/star_delta/4.png",
    "../Learning-Images/classic_control/star_delta/5.png"

];


let currentStarDeltaImage = 0;


/* OPEN STAR-DELTA GALLERY */

function openStarDeltaImages() {

    const lightbox =
        document.getElementById("task-lightbox");

    const gallery =
        document.getElementById("star-delta-gallery");

    const counter =
        document.getElementById("star-delta-counter");


    if (!lightbox || !gallery) return;


    hideAllTaskViews();


    currentStarDeltaImage = 0;


    gallery.style.display = "flex";


    if (counter) {

        counter.style.display = "block";

    }


    showStarDeltaImage();


    lightbox.classList.add("active");


    document.body.style.overflow = "hidden";

}


/* SHOW CURRENT STAR-DELTA IMAGE */

function showStarDeltaImage() {

    const image =
        document.getElementById("star-delta-image");

    const counter =
        document.getElementById("star-delta-counter");


    if (!image || !starDeltaImagesList.length) return;


    image.src =
        starDeltaImagesList[currentStarDeltaImage];


    if (counter) {

        counter.textContent =
            (currentStarDeltaImage + 1) +
            " / " +
            starDeltaImagesList.length;

    }

}


/* PREVIOUS STAR-DELTA IMAGE */

function previousStarDeltaImage() {

    currentStarDeltaImage--;


    if (currentStarDeltaImage < 0) {

        currentStarDeltaImage =
            starDeltaImagesList.length - 1;

    }


    showStarDeltaImage();

}


/* NEXT STAR-DELTA IMAGE */

function nextStarDeltaImage() {

    currentStarDeltaImage++;


    if (currentStarDeltaImage >= starDeltaImagesList.length) {

        currentStarDeltaImage = 0;

    }


    showStarDeltaImage();

}


/* =========================================================
   STAR-DELTA STARTER - CONTROL CIRCUIT TASK GALLERY
========================================================= */

const starDeltaTaskImagesList = [

    "../Task-Images/star_delta/1.png",
    "../Task-Images/star_delta/2.png"

];


const starDeltaTaskData = [

    {

        title:
            "13. Star-Delta Starter with Timer",

        description:
            "A motor starts in Star mode, then after 5 seconds, the Star contactor disconnects and the Delta contactor energizes to run the motor at full rated voltage."

    },

    {

        title:
            "14. Star-Delta Starter with Forward and Reverse Operation",

        description:
            "The motor starts in Star mode to reduce starting current, then switches to Delta mode after a preset time. The motor can rotate in both Forward and Reverse directions using interlocked contactors."

    }

];


let currentStarDeltaTaskImage = 0;


/* OPEN STAR-DELTA STARTER TASK GALLERY */

function openStarDeltaTaskImages() {

    const lightbox =
        document.getElementById("task-lightbox");

    const gallery =
        document.getElementById("star-delta-task-gallery");

    const counter =
        document.getElementById("star-delta-task-counter");

    const info =
        document.getElementById("star-delta-task-info");


    if (!lightbox || !gallery) return;


    hideAllTaskViews();


    currentStarDeltaTaskImage = 0;


    gallery.style.display = "flex";


    if (counter) {

        counter.style.display = "block";

    }


    if (info) {

        info.style.display = "block";

    }


    showStarDeltaTaskImage();


    lightbox.classList.add("active");


    document.body.style.overflow = "hidden";

}


/* SHOW CURRENT STAR-DELTA STARTER TASK */

function showStarDeltaTaskImage() {

    const image =
        document.getElementById("star-delta-task-image");

    const counter =
        document.getElementById("star-delta-task-counter");

    const title =
        document.getElementById("star-delta-task-title");

    const description =
        document.getElementById("star-delta-task-description");


    if (!image || !starDeltaTaskImagesList.length) return;


    image.src =
        starDeltaTaskImagesList[currentStarDeltaTaskImage];


    if (counter) {

        counter.textContent =
            (currentStarDeltaTaskImage + 1) +
            " / " +
            starDeltaTaskImagesList.length;

    }


    const task =
        starDeltaTaskData[currentStarDeltaTaskImage];


    if (task && title) {

        title.textContent =
            task.title;

    }


    if (task && description) {

        description.textContent =
            task.description;

    }

}


/* PREVIOUS STAR-DELTA STARTER TASK IMAGE */

function previousStarDeltaTaskImage() {

    currentStarDeltaTaskImage--;


    if (currentStarDeltaTaskImage < 0) {

        currentStarDeltaTaskImage =
            starDeltaTaskImagesList.length - 1;

    }


    showStarDeltaTaskImage();

}


/* NEXT STAR-DELTA STARTER TASK IMAGE */

function nextStarDeltaTaskImage() {

    currentStarDeltaTaskImage++;


    if (currentStarDeltaTaskImage >= starDeltaTaskImagesList.length) {

        currentStarDeltaTaskImage = 0;

    }


    showStarDeltaTaskImage();

}


/* =========================================================
   TROUBLESHOOTING & PROTECTION - LEARNING GALLERY
========================================================= */

const troubleshootingImagesList = [

    "../Learning-Images/classic_control/troubleshooting/1.png",
    "../Learning-Images/classic_control/troubleshooting/2.png",
    "../Learning-Images/classic_control/troubleshooting/3.png",
    "../Learning-Images/classic_control/troubleshooting/4.png",
    "../Learning-Images/classic_control/troubleshooting/5.png",
    "../Learning-Images/classic_control/troubleshooting/6.png",
    "../Learning-Images/classic_control/troubleshooting/7.png",
    "../Learning-Images/classic_control/troubleshooting/8.png",
    "../Learning-Images/classic_control/troubleshooting/9.png",
    "../Learning-Images/classic_control/troubleshooting/10.png",
    "../Learning-Images/classic_control/troubleshooting/11.png",
    "../Learning-Images/classic_control/troubleshooting/12.png"

];

let currentTroubleshootingImage = 0;


/* OPEN TROUBLESHOOTING GALLERY */

function openTroubleshootingImages() {

    const lightbox =
        document.getElementById("task-lightbox");

    const gallery =
        document.getElementById("troubleshooting-gallery");

    const counter =
        document.getElementById("troubleshooting-counter");

    if (!lightbox || !gallery) return;

    hideAllTaskViews();

    currentTroubleshootingImage = 0;

    gallery.style.display = "flex";

    if (counter) {
        counter.style.display = "block";
    }

    showTroubleshootingImage();

    lightbox.classList.add("active");

    document.body.style.overflow = "hidden";
}


/* SHOW CURRENT TROUBLESHOOTING IMAGE */

function showTroubleshootingImage() {

    const image =
        document.getElementById("troubleshooting-image");

    const counter =
        document.getElementById("troubleshooting-counter");

    if (!image || !troubleshootingImagesList.length) return;

    image.src =
        troubleshootingImagesList[currentTroubleshootingImage];

    if (counter) {
        counter.textContent =
            (currentTroubleshootingImage + 1) +
            " / " +
            troubleshootingImagesList.length;
    }
}


/* PREVIOUS TROUBLESHOOTING IMAGE */

function previousTroubleshootingImage() {

    currentTroubleshootingImage--;

    if (currentTroubleshootingImage < 0) {
        currentTroubleshootingImage =
            troubleshootingImagesList.length - 1;
    }

    showTroubleshootingImage();
}


/* NEXT TROUBLESHOOTING IMAGE */

function nextTroubleshootingImage() {

    currentTroubleshootingImage++;

    if (
        currentTroubleshootingImage >=
        troubleshootingImagesList.length
    ) {
        currentTroubleshootingImage = 0;
    }

    showTroubleshootingImage();
}

/* =========================================================
   ATS - LEARNING GALLERY
========================================================= */

const atsImagesList = [

    "../Learning-Images/classic_control/ATS/1.png",
    "../Learning-Images/classic_control/ATS/2.png",
    "../Learning-Images/classic_control/ATS/3.png",
    "../Learning-Images/classic_control/ATS/4.jpeg",
    "../Learning-Images/classic_control/ATS/5.jpeg"

];


let currentATSImage = 0;


/* OPEN ATS GALLERY */

function openATSImages() {

    const lightbox =
        document.getElementById("task-lightbox");

    const gallery =
        document.getElementById("ats-gallery");

    const counter =
        document.getElementById("ats-counter");


    if (!lightbox || !gallery) return;


    hideAllTaskViews();


    currentATSImage = 0;


    gallery.style.display = "flex";


    if (counter) {

        counter.style.display = "block";

    }


    showATSImage();


    lightbox.classList.add("active");


    document.body.style.overflow = "hidden";

}


/* SHOW CURRENT ATS IMAGE */

function showATSImage() {

    const image =
        document.getElementById("ats-image");

    const counter =
        document.getElementById("ats-counter");


    if (!image || !atsImagesList.length) return;


    image.src =
        atsImagesList[currentATSImage];


    if (counter) {

        counter.textContent =
            (currentATSImage + 1) +
            " / " +
            atsImagesList.length;

    }

}


/* PREVIOUS ATS IMAGE */

function previousATSImage() {

    currentATSImage--;


    if (currentATSImage < 0) {

        currentATSImage =
            atsImagesList.length - 1;

    }


    showATSImage();

}


/* NEXT ATS IMAGE */

function nextATSImage() {

    currentATSImage++;


    if (currentATSImage >= atsImagesList.length) {

        currentATSImage = 0;

    }


    showATSImage();

}

/* =========================================================
   ATS - ELECTRICAL CONTROL CIRCUITS TASK GALLERY
========================================================= */

const atsTaskImagesList = [

    "../Task-Images/ats/4.jpeg",
    "../Task-Images/ats/5.jpeg"

];

let currentATSTaskImage = 0;


/* OPEN ATS TASK GALLERY */

function openATSTaskImages() {

    const lightbox =
        document.getElementById("task-lightbox");

    const gallery =
        document.getElementById("ats-task-gallery");

    const counter =
        document.getElementById("ats-task-counter");

    if (!lightbox || !gallery) return;

    hideAllTaskViews();

    currentATSTaskImage = 0;

    gallery.style.display = "flex";

    if (counter) {
        counter.style.display = "block";
    }

    showATSTaskImage();

    lightbox.classList.add("active");

    document.body.style.overflow = "hidden";

}


/* SHOW CURRENT ATS TASK IMAGE */

function showATSTaskImage() {

    const image =
        document.getElementById("ats-task-image");

    const counter =
        document.getElementById("ats-task-counter");

    if (!image || !atsTaskImagesList.length) return;

    image.src = atsTaskImagesList[currentATSTaskImage];

    if (counter) {
        counter.textContent =
            (currentATSTaskImage + 1) +
            " / " +
            atsTaskImagesList.length;
    }

}


/* PREVIOUS ATS TASK IMAGE */

function previousATSTaskImage() {

    currentATSTaskImage--;

    if (currentATSTaskImage < 0) {
        currentATSTaskImage =
            atsTaskImagesList.length - 1;
    }

    showATSTaskImage();

}


/* NEXT ATS TASK IMAGE */

function nextATSTaskImage() {

    currentATSTaskImage++;

    if (currentATSTaskImage >= atsTaskImagesList.length) {
        currentATSTaskImage = 0;
    }

    showATSTaskImage();

}

/* =========================================================
   UPS - LEARNING GALLERY
========================================================= */

const upsImagesList = [

    "../Learning-Images/classic_control/UPS/1.png",
    "../Learning-Images/classic_control/UPS/2.png",
    "../Learning-Images/classic_control/UPS/3.png",
    "../Learning-Images/classic_control/UPS/4.png"

];


let currentUPSImage = 0;


/* OPEN UPS GALLERY */

function openUPSImages() {

    const lightbox =
        document.getElementById("task-lightbox");

    const gallery =
        document.getElementById("ups-gallery");

    const counter =
        document.getElementById("ups-counter");


    if (!lightbox || !gallery) return;


    hideAllTaskViews();


    currentUPSImage = 0;


    gallery.style.display = "flex";


    if (counter) {

        counter.style.display = "block";

    }


    showUPSImage();


    lightbox.classList.add("active");


    document.body.style.overflow = "hidden";

}


/* SHOW CURRENT UPS IMAGE */

function showUPSImage() {

    const image =
        document.getElementById("ups-image");

    const counter =
        document.getElementById("ups-counter");


    if (!image || !upsImagesList.length) return;


    image.src =
        upsImagesList[currentUPSImage];


    if (counter) {

        counter.textContent =
            (currentUPSImage + 1) +
            " / " +
            upsImagesList.length;

    }

}


/* PREVIOUS UPS IMAGE */

function previousUPSImage() {

    currentUPSImage--;


    if (currentUPSImage < 0) {

        currentUPSImage =
            upsImagesList.length - 1;

    }


    showUPSImage();

}


/* NEXT UPS IMAGE */

function nextUPSImage() {

    currentUPSImage++;


    if (currentUPSImage >= upsImagesList.length) {

        currentUPSImage = 0;

    }


    showUPSImage();

}



/* =========================================================
   POWER FACTOR - LEARNING GALLERY
========================================================= */

const powerFactorImagesList = [

    "../Learning-Images/classic_control/powerfactor/1.png",
    "../Learning-Images/classic_control/powerfactor/2.png",
    "../Learning-Images/classic_control/powerfactor/3.png",
    "../Learning-Images/classic_control/powerfactor/4.png",
    "../Learning-Images/classic_control/powerfactor/5.png"

];

let currentPowerFactorImage = 0;


/* OPEN POWER FACTOR GALLERY */

function openPowerFactorImages() {

    const lightbox =
        document.getElementById("task-lightbox");

    if (!lightbox) return;

    hideAllTaskViews();

    currentPowerFactorImage = 0;

    const oldGallery =
        document.getElementById("powerfactor-gallery");

    const oldCounter =
        document.getElementById("powerfactor-counter");

    if (oldGallery) oldGallery.remove();
    if (oldCounter) oldCounter.remove();

    const gallery = document.createElement("div");

    gallery.id = "powerfactor-gallery";
    gallery.className = "relay-gallery";
    gallery.style.display = "flex";

    gallery.innerHTML = `
        <button
            class="relay-prev"
            onclick="previousPowerFactorImage()"
            aria-label="Previous Power Factor image"
        >
            ❮
        </button>

        <img
            id="powerfactor-image"
            src=""
            alt="Power Factor Image"
        >

        <button
            class="relay-next"
            onclick="nextPowerFactorImage()"
            aria-label="Next Power Factor image"
        >
            ❯
        </button>
    `;

    const counter = document.createElement("div");

    counter.id = "powerfactor-counter";
    counter.className = "relay-counter";
    counter.style.display = "block";

    lightbox.appendChild(gallery);
    lightbox.appendChild(counter);

    showPowerFactorImage();

    lightbox.classList.add("active");

    document.body.style.overflow = "hidden";

}


/* SHOW CURRENT POWER FACTOR IMAGE */

function showPowerFactorImage() {

    const image =
        document.getElementById("powerfactor-image");

    const counter =
        document.getElementById("powerfactor-counter");

    if (!image || !powerFactorImagesList.length) return;

    image.src =
        powerFactorImagesList[currentPowerFactorImage];

    if (counter) {

        counter.textContent =
            (currentPowerFactorImage + 1) +
            " / " +
            powerFactorImagesList.length;

    }

}


/* PREVIOUS POWER FACTOR IMAGE */

function previousPowerFactorImage() {

    currentPowerFactorImage--;

    if (currentPowerFactorImage < 0) {

        currentPowerFactorImage =
            powerFactorImagesList.length - 1;

    }

    showPowerFactorImage();

}


/* NEXT POWER FACTOR IMAGE */

function nextPowerFactorImage() {

    currentPowerFactorImage++;

    if (
        currentPowerFactorImage >=
        powerFactorImagesList.length
    ) {

        currentPowerFactorImage = 0;

    }

    showPowerFactorImage();

}


/* =========================================================
   SENSOR, TRANSDUCER & ACTUATOR GUIDE GALLERY
========================================================= */

const sensorGuideImagesList = [
    "../Learning-Images/Sensors/Sensor, Transducer & Actuator Guide/1.png",
    "../Learning-Images/Sensors/Sensor, Transducer & Actuator Guide/2.png"
];

let currentSensorGuideImage = 0;


/* OPEN SENSOR GUIDE GALLERY */

function openSensorGuideImages() {

    const lightbox = document.getElementById("task-lightbox");
    const gallery = document.getElementById("sensor-guide-gallery");

    if (!lightbox || !gallery) return;

    hideAllTaskViews();

    currentSensorGuideImage = 0;

    gallery.style.display = "flex";

    showSensorGuideImage();

    lightbox.classList.add("active");

    document.body.style.overflow = "hidden";
}


/* SHOW CURRENT SENSOR GUIDE IMAGE */

function showSensorGuideImage() {

    const image = document.getElementById("sensor-guide-image");

    if (!image || !sensorGuideImagesList.length) return;

    image.src = sensorGuideImagesList[currentSensorGuideImage];
}


/* PREVIOUS IMAGE */

function previousSensorGuideImage() {

    currentSensorGuideImage--;

    if (currentSensorGuideImage < 0) {
        currentSensorGuideImage = sensorGuideImagesList.length - 1;
    }

    showSensorGuideImage();
}


/* NEXT IMAGE */

function nextSensorGuideImage() {

    currentSensorGuideImage++;

    if (currentSensorGuideImage >= sensorGuideImagesList.length) {
        currentSensorGuideImage = 0;
    }

    showSensorGuideImage();
}

/* =========================================================
   PROXIMITY SENSORS GALLERY
========================================================= */

const proximityImages = [
    "../Learning-Images/Sensors/Digital Sensors/Proximity Sensors/1.png",
    "../Learning-Images/Sensors/Digital Sensors/Proximity Sensors/2.png",
    "../Learning-Images/Sensors/Digital Sensors/Proximity Sensors/3.png"
];

let currentProximityImage = 0;

function openProximityImages() {
    const lightbox = document.getElementById("task-lightbox");
    const gallery = document.getElementById("proximity-gallery");

    if (!lightbox || !gallery) return;

    hideAllTaskViews();

    currentProximityImage = 0;

    gallery.style.display = "flex";

    showProximityImage();

    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
}

function showProximityImage() {
    const image = document.getElementById("proximity-image");

    if (!image) return;

    image.src = proximityImages[currentProximityImage];
}

function previousProximityImage() {
    currentProximityImage--;

    if (currentProximityImage < 0) {
        currentProximityImage = proximityImages.length - 1;
    }

    showProximityImage();
}

function nextProximityImage() {
    currentProximityImage++;

    if (currentProximityImage >= proximityImages.length) {
        currentProximityImage = 0;
    }

    showProximityImage();
}

/* =========================================================
   PHOTOELECTRIC SENSORS GALLERY
========================================================= */

const photoelectricImages = [
    "../Learning-Images/Sensors/Digital Sensors/Photoelectric Sensor/1.png",
    "../Learning-Images/Sensors/Digital Sensors/Photoelectric Sensor/2.png"
];

let currentPhotoelectricImage = 0;

function openPhotoelectricImages() {
    const lightbox = document.getElementById("task-lightbox");
    const gallery = document.getElementById("photoelectric-gallery");

    if (!lightbox || !gallery) return;

    hideAllTaskViews();

    currentPhotoelectricImage = 0;
    showPhotoelectricImage();

    gallery.style.display = "flex";
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
}

function showPhotoelectricImage() {
    const image = document.getElementById("photoelectric-image");

    if (!image) return;

    image.src = photoelectricImages[currentPhotoelectricImage];
}

function previousPhotoelectricImage() {
    currentPhotoelectricImage =
        (currentPhotoelectricImage - 1 + photoelectricImages.length)
        % photoelectricImages.length;

    showPhotoelectricImage();
}

function nextPhotoelectricImage() {
    currentPhotoelectricImage =
        (currentPhotoelectricImage + 1)
        % photoelectricImages.length;

    showPhotoelectricImage();
}

/* =========================================================
   LEVEL SWITCHES GALLERY
========================================================= */

const levelSwitchImages = [
    "../Learning-Images/Sensors/Digital Sensors/Level Switches/1.png",
    "../Learning-Images/Sensors/Digital Sensors/Level Switches/2.png",
    "../Learning-Images/Sensors/Digital Sensors/Level Switches/3.png",
    "../Learning-Images/Sensors/Digital Sensors/Level Switches/4.png"
];

let currentLevelSwitchImage = 0;

function openLevelSwitchImages() {
    const lightbox = document.getElementById("task-lightbox");
    const gallery = document.getElementById("level-switch-gallery");

    if (!lightbox || !gallery) return;

    hideAllTaskViews();

    currentLevelSwitchImage = 0;
    showLevelSwitchImage();

    gallery.style.display = "flex";
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
}

function showLevelSwitchImage() {
    const image = document.getElementById("level-switch-image");

    if (!image) return;

    image.src = levelSwitchImages[currentLevelSwitchImage];
}

function previousLevelSwitchImage() {
    currentLevelSwitchImage =
        (currentLevelSwitchImage - 1 + levelSwitchImages.length)
        % levelSwitchImages.length;

    showLevelSwitchImage();
}

function nextLevelSwitchImage() {
    currentLevelSwitchImage =
        (currentLevelSwitchImage + 1)
        % levelSwitchImages.length;

    showLevelSwitchImage();
}

/* =========================================================
   FLOW SWITCH GALLERY
========================================================= */

const flowSwitchImages = [
    "../Learning-Images/Sensors/Digital Sensors/Flow Switch/1.png",
    "../Learning-Images/Sensors/Digital Sensors/Flow Switch/2.png",
    "../Learning-Images/Sensors/Digital Sensors/Flow Switch/3.png"
];

let currentFlowSwitchImage = 0;

function openFlowSwitchImages() {
    const lightbox = document.getElementById("task-lightbox");
    const gallery = document.getElementById("flow-switch-gallery");

    if (!lightbox || !gallery) return;

    hideAllTaskViews();

    currentFlowSwitchImage = 0;
    showFlowSwitchImage();

    gallery.style.display = "flex";
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
}

function showFlowSwitchImage() {
    const image = document.getElementById("flow-switch-image");

    if (!image) return;

    image.src = flowSwitchImages[currentFlowSwitchImage];
}

function previousFlowSwitchImage() {
    currentFlowSwitchImage =
        (currentFlowSwitchImage - 1 + flowSwitchImages.length)
        % flowSwitchImages.length;

    showFlowSwitchImage();
}

function nextFlowSwitchImage() {
    currentFlowSwitchImage =
        (currentFlowSwitchImage + 1)
        % flowSwitchImages.length;

    showFlowSwitchImage();
}

/* =========================================================
   AC DRIVE FUNDAMENTALS GALLERY
========================================================= */

const acDriveFundamentalsImages = [
    "../Learning-Images/AC Drive/working principle/1.png",
    "../Learning-Images/AC Drive/working principle/2.png"
];

let currentACDriveFundamentalsImage = 0;


/* OPEN AC DRIVE FUNDAMENTALS */

function openACDriveFundamentals() {

    const lightbox = document.getElementById("task-lightbox");
    const gallery = document.getElementById("ac-drive-fundamentals-gallery");

    if (!lightbox || !gallery) return;

    hideAllTaskViews();

    currentACDriveFundamentalsImage = 0;

    gallery.style.display = "flex";

    showACDriveFundamentalsImage();

    lightbox.classList.add("active");

    document.body.style.overflow = "hidden";
}


/* SHOW CURRENT IMAGE */

function showACDriveFundamentalsImage() {

    const image = document.getElementById("ac-drive-fundamentals-image");

    if (!image || !acDriveFundamentalsImages.length) return;

    image.src = acDriveFundamentalsImages[currentACDriveFundamentalsImage];
}


/* PREVIOUS IMAGE */

function previousACDriveFundamentalsImage() {

    currentACDriveFundamentalsImage--;

    if (currentACDriveFundamentalsImage < 0) {
        currentACDriveFundamentalsImage =
            acDriveFundamentalsImages.length - 1;
    }

    showACDriveFundamentalsImage();
}


/* NEXT IMAGE */

function nextACDriveFundamentalsImage() {

    currentACDriveFundamentalsImage++;

    if (currentACDriveFundamentalsImage >= acDriveFundamentalsImages.length) {
        currentACDriveFundamentalsImage = 0;
    }

    showACDriveFundamentalsImage();
}

/* =========================================================
   AC DRIVE WIRING GALLERY
========================================================= */

const acDriveWiringImages = [
    "../Learning-Images/AC Drive/wiring/1.png",
    "../Learning-Images/AC Drive/wiring/2.png",
    "../Learning-Images/AC Drive/wiring/3.png",
    "../Learning-Images/AC Drive/wiring/4.png",
    "../Learning-Images/AC Drive/wiring/5.png",
    
];

let currentACDriveWiringImage = 0;


/* OPEN AC DRIVE WIRING */

function openACDriveWiring() {

    const lightbox = document.getElementById("task-lightbox");
    const gallery = document.getElementById("ac-drive-wiring-gallery");

    if (!lightbox || !gallery) return;

    hideAllTaskViews();

    currentACDriveWiringImage = 0;

    gallery.style.display = "flex";

    showACDriveWiringImage();

    lightbox.classList.add("active");

    document.body.style.overflow = "hidden";
}


/* SHOW CURRENT IMAGE */

function showACDriveWiringImage() {

    const image = document.getElementById("ac-drive-wiring-image");

    if (!image || !acDriveWiringImages.length) return;

    image.src = acDriveWiringImages[currentACDriveWiringImage];
}


/* PREVIOUS IMAGE */

function previousACDriveWiringImage() {

    currentACDriveWiringImage--;

    if (currentACDriveWiringImage < 0) {
        currentACDriveWiringImage = acDriveWiringImages.length - 1;
    }

    showACDriveWiringImage();
}


/* NEXT IMAGE */

function nextACDriveWiringImage() {

    currentACDriveWiringImage++;

    if (currentACDriveWiringImage >= acDriveWiringImages.length) {
        currentACDriveWiringImage = 0;
    }

    showACDriveWiringImage();
}


/* =========================================================
   AC DRIVE PARAMETERS GALLERY
========================================================= */

const acDriveParametersImages = Array.from(
    { length: 24 },
    (_, i) => `../Learning-Images/AC Drive/parameters/${i}.png`
);

let currentACDriveParametersImage = 0;


/* OPEN AC DRIVE PARAMETERS */

function openACDriveParameters() {

    const lightbox = document.getElementById("task-lightbox");
    const gallery = document.getElementById("ac-drive-parameters-gallery");

    if (!lightbox || !gallery) return;

    hideAllTaskViews();

    currentACDriveParametersImage = 0;

    gallery.style.display = "flex";

    showACDriveParametersImage();

    lightbox.classList.add("active");

    document.body.style.overflow = "hidden";
}


/* SHOW CURRENT IMAGE */

function showACDriveParametersImage() {

    const image = document.getElementById("ac-drive-parameters-image");

    if (!image || !acDriveParametersImages.length) return;

    image.src = acDriveParametersImages[currentACDriveParametersImage];
}


/* PREVIOUS IMAGE */

function previousACDriveParametersImage() {

    currentACDriveParametersImage =
        (currentACDriveParametersImage - 1 + acDriveParametersImages.length)
        % acDriveParametersImages.length;

    showACDriveParametersImage();
}


/* NEXT IMAGE */

function nextACDriveParametersImage() {

    currentACDriveParametersImage =
        (currentACDriveParametersImage + 1)
        % acDriveParametersImages.length;

    showACDriveParametersImage();
}

/* =========================================================
   AC DRIVE MASTER / SLAVE GALLERY
========================================================= */

const acDriveMasterSlaveImages = [
    "../Learning-Images/AC Drive/master_slave/1.png",
    "../Learning-Images/AC Drive/master_slave/2.png",
    "../Learning-Images/AC Drive/master_slave/3.png",
    "../Learning-Images/AC Drive/master_slave/4.png"
];

let currentACDriveMasterSlaveImage = 0;


/* OPEN MASTER / SLAVE GALLERY */

function openACDriveMasterSlave() {

    const lightbox = document.getElementById("task-lightbox");
    const gallery = document.getElementById("ac-drive-master-slave-gallery");

    if (!lightbox || !gallery) return;

    hideAllTaskViews();

    currentACDriveMasterSlaveImage = 0;

    gallery.style.display = "flex";

    showACDriveMasterSlaveImage();

    lightbox.classList.add("active");

    document.body.style.overflow = "hidden";
}


/* SHOW CURRENT IMAGE */

function showACDriveMasterSlaveImage() {

    const image = document.getElementById("ac-drive-master-slave-image");

    if (!image || !acDriveMasterSlaveImages.length) return;

    image.src = acDriveMasterSlaveImages[currentACDriveMasterSlaveImage];
}


/* PREVIOUS IMAGE */

function previousACDriveMasterSlaveImage() {

    currentACDriveMasterSlaveImage--;

    if (currentACDriveMasterSlaveImage < 0) {
        currentACDriveMasterSlaveImage =
            acDriveMasterSlaveImages.length - 1;
    }

    showACDriveMasterSlaveImage();
}


/* NEXT IMAGE */

function nextACDriveMasterSlaveImage() {

    currentACDriveMasterSlaveImage++;

    if (currentACDriveMasterSlaveImage >= acDriveMasterSlaveImages.length) {
        currentACDriveMasterSlaveImage = 0;
    }

    showACDriveMasterSlaveImage();
}


/* Smooth Internal Page Navigation */
document.addEventListener("click", function (event) {
    const link = event.target.closest("a");

    if (!link) return;

    if (
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey ||
        event.altKey ||
        event.button !== 0 ||
        link.target === "_blank" ||
        link.hasAttribute("download") ||
        event.defaultPrevented
    ) {
        return;
    }

    const destination = new URL(link.href, window.location.href);

    if (destination.origin !== window.location.origin) return;

    if (
        destination.pathname === window.location.pathname &&
        destination.search === window.location.search
    ) {
        return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
    }

    event.preventDefault();
    document.body.classList.add("page-leaving");

    setTimeout(function () {
        window.location.href = destination.href;
    }, 280);
});

window.addEventListener("pageshow", function () {
    document.body.classList.remove("page-leaving");
});
