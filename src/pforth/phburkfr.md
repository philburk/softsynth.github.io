---
layout: base.njk
---

<center>&lt;h1&gt;Phil Burk&lt;/h1&gt;</center>

## Biographie

Phil Burk a développé des outils pour des compositeurs expérimentaux depuis 20 ans. Il a commencé par la création de synthétiseurs analogiques "fait maison" et par des systèmes sur ordinateur en se focalisant sur le traitement analogique des guitares. En 1981, il a démarré une collaboration avec [Larry Polansky](http://music.dartmouth.edu/~polansky) et [David Rosenboom](http://music.calarts.edu/~david/) au Mills College , au centre pour la musique contemporaine [(Center for Contemporary Music)](http://www.mills.edu/LIFE/CCM/CCM.homepage.html) . Ensembles, ils ont développé un langage de spécification hiérarchique de la musique [(HMSL, the Hierarchical Music Specification Language)](/hmsl), qui a été utilisé par des compositeurs du monde entier de façon à explorer les frontières de la musique en temps réel sur ordinateur. Le HMSL est basé sur le langage Forth, orienté objet, est un langage de composition qui supporte le MIDI et la synthèse DSP.   Différentes parties du HMSL ont été impliquées dans des ["cloches de jardin"](#cloches), des systèmes expérimentaux destinés à accorder des instruments, de la vidéo en temps réel, et des ["interactions avec les poissons"](#poissons). Phil à travaillé pour la compagnie 3DO [(3DO)](http://www.3do.com) en développant la première architecture de synthèse sonore basée sur un DSP destinée à des systèmes de jeux vidéo personnels. A CagEnt, une filiale 3DO, Phil a développé un processeur de traitement de signal digital (DSP) personnalisé de type RISC conçu tout particulièrement pour la synthèse musicale et les effets sonores. Il est actuellement en train de développer une API de synthèse musicale pour Java [(JSyn)](/jsyn), qui permettra aux compositeurs d'inclure de la musique intéractive faite sur ordinateur dans leurs pages Web. Il développe aussi des systèmes client/server pour des intéractions multi-player sur le Web, et travaille avec Nick Didkovsky au développement de JMSL, un successeur du HMSL basé sur Java.

Pour plus d'information, vous pouvez voir son curriculum vitae (à la page [Burk Resume](/burk_resume/), en anglais).

* * *

Quelques éclaircicements :

<a name="cloches"></a>**"Cloches de jardin" :**

> Un compositeur à Seattle nommé David Mahler avait collecté quelques 30 grandes cloches aux alentours de Washington. Ceci comprenait des cloches de bâteaux, des cloches d'école, ainsi même que des cloches faites à partir de réservoirs de scaphandres. Il les avait suspendues à l'extérieur sous forme de chapelet et les avait connectés à des solénoïdes. J'ai alors construit une boite qui autorisait le contrôle des solénoïdes à partir du HMSL qui fonctionnait alors sur Amiga. Le HMSL est une boite à outils musicale d'utilisation générale basé sur le langage Forth. J'ai alors écrit un logiciel qui affichait des informations sous forme d'historique sur un moniteur vidéo et qui utilisait un algorithme afin de jouer des compositions musicales sur les cloches. David avait appelé ça des "cloches de jardin".

<a name="poissons"></a>**"Intéractions avec des poissons" :**

> Larry Polansky à écrit un petit programme en HMSL où trois caméras vidéo suivaient la position d'un poisson rouge nageant dans un aquarium. Au fur et à mesure de l'évolution du poisson rouge, sa position contrôlait divers synthétiseurs ainsi que des processeurs d'effets vocaux. La composition de la musique était faite par un humain, mais c'est le poisson qui co-ordinait l'ensemble.