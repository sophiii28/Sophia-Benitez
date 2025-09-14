function ocult($idprov, $idciud){
var prov, ciud, ocult;
ciud= document.getElementById($idciud);
ocult=ciud.style.getPropertyValue('visibility');
if (ocult == '') {
     ocult = ciud.style.visibility = 'hidden';
    prov = document.getElementById($idprov);
    prov.style.textDecoration = 'underline';
    }
    else if (ocult == 'hidden') {
    ocult = ciud.style.visibility = '';
    prov = document.getElementById($idprov);
    prov.style.textDecoration = '';
}
}