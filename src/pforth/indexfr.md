---
layout: base.njk
---

<center>&lt;h5&gt;&lt;a href="/pforth/index.php"&gt;This page is originally in english...&lt;/a&gt;&lt;/h5&gt;</center>

<center>&lt;h1&gt;&lt;font color="#000000"&gt;&lt;font size="+4"&gt;&lt;= pForth =&gt;&lt;/font&gt;&lt;/font&gt;&lt;/h1&gt;</center>

PForth est un Forth conforme à l'ANS (American National Standard, organisme de certification américain), **portable**, et placé dans le  [domaine publique](#Legal).Il est basé sur un noyau écrit en 'C' ANSI. Ceci rend le portage de pForth sur de multiples plates-formes facile. Dès à présent, pForth fonctionne sur Macintosh, sur des PCs, sur des stations SUNs, Amigas, Linux, SGI Indys, des systèmes 3DO ARM, des systèmes 3DO PowerPC, des systèmes WebTV, Hitachi SH4, des prototypes OpenTV, et quelques projets internes à Lucent.  Si vous faites fonctionner pForth sur un autre système, veuillez m'en faire part, afin que je puisse ajouter votre machine à la liste des machines sur lesquelles pForth est apte à fonctionner.

Dernière mise à jour: **V21 distribuée le 16/09/98 pour PC.**

PForth a été développé par [Phil Burk](/pforth/phburkfr/). Phil Burk est disponible comme sous-traitant (cf page ["contractor"](/contractor/) , en anglais) pour développer des classes pForth, pour des développements d'applications, ou afin de porter pForth sur de nouvelles plates-formes.

## Caractéristiques de PForth

*   Support du standard ANS pour les mots concernant les sections suivantes : Base (Core), Base Etendue (Core extensions), Accès aux fichiers (File-Access), Nombres en virgule flottante (Floating point), Variables et objets locaux (Locals), Outils de programmation (Programming tools), Manipulation de chaînes (String word set).
*   Se compile à partir d'un simple code 'C' ANSI sans aucune préparation nécessaire.
*   INCLU la lecture de source à partir de fichiers standards, pas à partir de fichiers binaires (BLOCKS files).
*   Des dictionnaires précompilés peuvent être sauvegardés et rechargés.
*   Son propre code 'C' peut être facilement lié avec pForth.
*   Intègre des mots pratiques comme ANEW INCLUDE? SEE WORDS.LIKE FILE?
*   Deboggueur pas à pas.
*   Sauts conditionnels.  10 0 DO I . LOOP fonctionne à l'extérieur de l'interpréteur.
*   Compilation conditionnelle.  \[IF\]   \[ELSE\]   \[THEN\]
*   Variables locales utilisant { }
*   Structure de d&finition de mots comme en language 'C'.
*   Exécution vectorisée en utilisant la fonction DEFER
*   Peut être compilé sans aucun appel à une bibliothèque standard (stdlib) pour les systèmes embarqués. Nécessite uniquement les équivalents 'C' des fonctions KEY et EMIT.

## Enregistrez-vous et téléchargez pForth

Des versions de pForth pour UNIX, PC et Macintosh sont disponibles. Pour les systèmes embarqués, téléchargez la version correspondant à votre machine et modifiez les fichiers de compilation (Makefiles). Avant de télécharger pForth, veuillez, s'il vous plaît, **vous enregistrer** en remplissant ce formulaire. Votre nom sera uniquement utilisé pour des annonces de mises à jour gratuites de pForth ou des rapports de bugs.

## [Download pForth ici.](/pforth/download/)

## Documentation pForth

*   Veuillez consulter le fichier LisezMoi.txt dans le répertoire d'installation de pForth pour des informations concernant la version que vous possédez. Pour votre convenance, vous pouvez trouver ici le fichier ["lisezmoi"](/pforth/lisezmoi.txt) de la version 21 traduit en français.
*   Pour une information complète sur pForth, consultez le [manuel de référence de pForth](/pforth/manuelpf/).
*   Pour apprendre le language Forth, consultez le [Tutoriel Forth](/pforth/pf_tutfr/).
*   Veuillez prendre connaissance de la [FAQ pForth](/pforth/pf_faqfr/) (Questions fréquemment posées, Foire aux questions pour nos amis Canadiens).
*   Pour un **glossaire** des mots Forth, veuillez vous référer au brouillon des spécifications ANS du language Forth [ANS Forth spec (en anglais)](http://www.taygeta.com/forthlit.html).
*   Vous pourriez aussi être interressé par ces quelques liens sur le Forth [(Forth Related Links, en anglais)](/forthlinks/)

## Liens d'utilisateurs de pForth

*   [PCI card debugger for DOS with embedded pForth](http://www.probo.com/debugger.htm) by [Providenza & Boekelheide, Inc.](http://www.probo.com/)
*   [Veuillez envoyer vos liens sur votre code relatif à pForth.](/contacts/)

Pour mentionner des bugs, ou afin de poser des questions spécifiques sur pForth, envoyez un e-mail en anglais à [Phil Burk](/contacts/).  
Phil Burk est disponible comme sous-traitant (cf page ["contractor"](/contractor/) , en anglais) pour développer des classes pForth, pour des développements d'applications, ou afin de porter pForth sur de nouvelles plates-formes.  

* * *

### <a name="Legal"></a>Dispositions Légales

Copyright 1994-7 3DO, Phil Burk, Larry Polansky, David Rosenboom

Le code du logiciel pForth est déposé dans le domaine publique, toute tierce partie a la possibilité de reproduire, de distribuer et de modifier le code du logiciel pForth ou un de ses dérivés sans aucune contrepartie ou droit de license. Le code du logiciel est fourni "tel quel", sans aucune garantie d'aucune sorte, incluant, sans limitation, les garanties commerciales ci-inclues et la correspondance à une application particulière ou à leurs équivalents soumis à des lois de n'importe quelle juridiction.  

* * *

Cette page est hébergée par [SoftSynth.com](/). Vous êtes le  14,146ème visiteur depuis le 25/08/97.

  Si vous désirez des informations sur la traduction, c'est [ici](/pforth/infotrad/)