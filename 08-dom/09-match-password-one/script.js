/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

document.getElementById('run').onclick = () => {
if (document.getElementById('pass-one').value == document.getElementById('pass-two').value)
    {document.getElementById('pass-one').style["border-color"] = "green";
    document.getElementById('pass-two').style["border-color"] = "green";
    }
 else
 {document.getElementById('pass-one').style["border-color"] = "red";
 document.getElementById('pass-two').style["border-color"] = "red"
 }
}

})();