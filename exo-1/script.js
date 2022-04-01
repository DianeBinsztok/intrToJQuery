/* La différence entre JS et JQuery:
JQuery est une librairie JS: des moreceaux de codes prêts à l'emploi, mis à disposition par d'autre développeurs, à réutiliser et modifier.

   Ajout des scripts:
Comme mon script JS fera appel à cette librairie, je doit placer le script jquery en amont, afin que la syntaxe jquery que j'utilisera en JS soit reconnue.
*/

$(document).ready(function(){
	console.log('Je peux maintenant écrire du code jQuery');
});