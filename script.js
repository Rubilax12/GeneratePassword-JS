function random(max){
    return Math.floor(Math.random() * max);
}

function random_letter(length) {
    let resultat = '';
    const characteres = "býÀÈ`}m¥«1?xh3þLú¤¦ÉÊü}bq§ÿÒÖZCìTrú{Ðo=Ìåbw«E^h¤3mÍF:Ggñ÷ÀaººkíËÅ'*ÇRÇß.ÑGØVÚ|¾,ïq=&§ãÀ0¤4Roæof";
    const charactereLength = characteres.length;
    let i = 0;
    while (i < length) {
      resultat += characteres.charAt(Math.floor(Math.random() * charactereLength));
      i++;
    }
    return resultat;
}

function generatePassword(){
    let a = random(1000.13);
    let b = random(10000);
    let c = random(100.55);
    let d = random(666);
    let e = random(3,1415926535897932384626433832795);
    let f = random_letter(10);
    let modulo = a % e;
    let mdp = f+a+b+f+modulo+c+d+e+f;
    document.getElementById("invisible").innerHTML = "Mot de passe: " + mdp;
    return mdp;
}

function choixUser(){
    let userValue = document.getElementById("input").value;
    if (userValue <= 0){
        alert("Votre mot de passe n'est pas sécurisé, rien ne sera généré.");
    }
    else {
        console.log("Vous avez choisi un mdp de: "+ userValue + " charactères.");
        let compteur = 0;
        let motdepasse = '';
        let stockage;
        while (compteur < userValue){
            stockage = generatePassword();
            stockage.charAt(random(20));
            motdepasse += stockage;
            compteur++;
        }
        
        console.log(motdepasse);
    }
}
