const btn = document.getElementById('genMsg');
const monMessage = document.getElementById('monMessage');
let randomMessages=
[
    "À vaillant coeur rien d’impossible. -Jacques Cœur",
    "Dans une grande âme tout est grand. -Blaise Pascal",
    "Chacun voit midi à sa porte. -French proverb",
    "Je pense, donc je suis. -Rene Descartes",
    "On ne change pas une équipe qui gagne. -Inspirational French proverb",
    "Prouver que j’ai raison serait accorder que je puis avoir tort. -Pierre Augustin Caron de Beaumarchais",
    "On n’est point toujours une bête pour l’avoir été quelquefois. -Denis Diderot",
    "Il n’y a pas de verités moyennes. -Georges Bernanos",
    "Chassez le naturel, il revient au galop. -French proverb",
    " Il vaut mieux prévenir que guérir. -French proverb",
    "Le temps est un grand maître, dit-on. Le malheur est qui’il tue ses élèves. -Hector Berlioz",
];

genMsg.addEventListener('click', function(){
    let randomMessage = randomMessages[Math.floor(Math.random()*randomMessages.length)]
    monMessage.innerText("radomMessage");
});