var randomquotes = []
randomquotes[0] = "“The happiness of your life depends upon the quality of your thoughts.” ― Marcus Aurelius" ;
randomquotes[1] = "“If it is not right do not do it; if it is not true do not say it.” ― Marcus Aurelius" ;
randomquotes[2] = "“Don’t go on discussing what a good person should be. Just be one.” ― Marcus Aurelius" ;
randomquotes[3] = "“Man is not worried by real problems so much as by his imagined anxieties about real problems.” ― Epictetus" ;
randomquotes[4] = "“He who laughs at himself never runs out of things to laugh at.” ― Epictetus" ;
randomquotes[5] = "“It’s not what happens to you, but how you react to it that matters.” ― Epictetus" ;
randomquotes[6] = "“He suffers more than necessary, who suffers before it is necessary.” ― Seneca" ;
randomquotes[7] = "“We suffer more often in imagination than in reality.” ― Seneca" ;
randomquotes[8] = "“Associate with people who are likely to improve you.” ― Seneca" ;
randomquotes[9] = "“Luck is what happens when preparation meets opportunity.” ― Seneca" ;
randomquotes[10] = "“He who is brave is free.” ― Seneca" ;
randomquotes[11] = "“To wish to be well is a part of becoming well.” ― Seneca" ;

function randomQuotes() {
    var randomQ = Math.floor(Math.random()*(randomquotes.length));
    document.getElementById('rquotes').innerHTML = randomquotes[randomQ]

}