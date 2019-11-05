AOS.init();
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Hi I am <b>Manav Sambyal</b>')
    .pauseFor(2000)
    .deleteAll()
    .typeString('I am a <b>Programmer</b>')
    .pauseFor(1000)
    .deleteChars(10)
    .typeString('<b>Learner<b>')
    .pauseFor(1000)
    .deleteChars(7)
    .typeString('<b>Student</b>')
    .pauseFor(1000)
    .deleteChars(8)
    .typeString('<b>Problem Solver</b>')
    .pauseFor(1000)
    .deleteChars(17)
    .typeString('creative')
    .pauseFor(2000)
    .deleteAll()
    .start();
