---
layout: base.njk
---

<center>&lt;h5&gt;&lt;a href="http://www.softsynth/pforth/pf_faq.htm"&gt;This page is originally in english...&lt;/a&gt;&lt;/h5&gt;&lt;h1&gt;FAQ PForth&lt;/h1&gt;</center>

[Où puis-je télécharger pForth ?](#telecharger)  
[Combien ça coûte ?](#coute)  
[Est-ce que pForth fonctionnera sur ma machine ?](#machine)  
[Est-ce que pForth peut faire des applications indépendantes sous Windows et Unix ?](#independantes)  
[Est-ce que pForth a accès aux fonctions API Win32 ?](#Win32)  
[Comment puis-je appeler mon propre code 'C' ?](#code_c)

Où puis-je <a name="telecharger"></a>télécharger pForth ?"

> La home page de pForth se trouve à:   [/pforth](/pforth) (en anglais)  
> Elle est aussi disponible en français à:   [/pforth/pforthfr.htm](/pforth/indexfr/)

Combien ça <a name="coute"></a>coûte ?

> PForth a été placé dans le domaine publique par Phil Burk, Larry Polansky, David Rosenboom et 3DO. Aussi il est gratuit et vaut bien l'argent qu'il vous en coûtera. ;-)

Est-ce que pForth fonctionnera sur ma <a name="machine"></a>machine?

> J'ai réalisé des versions de pForth pour les  PCs, Macintosh, et Linux sous plate-forme Intel. Cependant pForth est facilement portable aussi vous pourrez probablement le compiler sur toute machine respectant ces conditions pré-requises:
> 
> *   avoir un compilateur 'C' compatible ANSI (par exemple "gcc"),
> *   supporter des entiers 32 bit,
> *   posséder des fonctions d'entrées/sorties,
> *   posséder quelques centaines de Kilo octets de RAM.
> 
> Pour plus d'information, veuillez vous référer à la section concernant la [compilation de pForth](/pforth/manuelpf/#Compiling_pForth) dans le manuel de référence.

Est-ce que pForth peut faire des applications indépendantes <a name="independantes"></a> sous Windows et sous Unix ?

> Normalement pForth lis son dictionnaire d'un fichier qui est flexible mais peu pratique pour une application indépendante. Cependant, vous pouvez convertir le dictionnaire en zone statique et le compiler avec pForth. Vous auriez alors simplement besoin du fichier exécutable afin de faire tourner pForth. C'est ce qui est fait habituellement lorsque l'on vise à utiliser des systèmes embarqués qui ne supportent pas les fichiers d'entrées/sorties. Cependant, j'en ai fait l'essai, et vous vous retrouveriez alors sous Forth lorsque vous auriez exécuté votre application. Effrayant ! Aussi, j'ajouterais le support d'applications indépendantes lors d'une future version.

Est-ce que pForth a accès aux fonctions <a name="Win32"></a> API Win32 ?

> pForth a été conçu afin d'être aussi portable que c'était possible et afin d'avoir aussi peu de dépendances vis à vis du système d'exploitation sur lequel il tourne que c'était possible de le faire. Il est capable de fonctionner sur un système qui NE SUPPORTE RIEN D'AUTRE que les fonctions charIn() et charOut(). Il fonctionne sur n'importe quoi. Par conséquent, j'ai évité tout support direct pour Win32 ou toute autre APIs. Néanmoins, vous pouvez y [incorporer des appels à vos propres fonctions 'C'](/pforth/manuelpf/#Link_Custom_C) si c'est nécessaire. Un gars a même préparé une interface OpenGL. Si vous souhaitez développer pour faire du code Win32, vous devriez prendre un autre Forth. pForth est vraiment conçu pour les systèmes embarqués ou pour des développements en Forth ANS sur des machines développant pour des plate-formes autres que la leur.

Comment puis-je appeler mon  <a name="code_c"></a>propre code 'C' ?

> Vous pouvez faire cela en consultant la section [appel de fonctions 'C'](/pforth/manuelpf/#Link_Custom_C), du manuel de référence.