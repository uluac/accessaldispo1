// JavaScript Document
function deviceinfo(){
	$('#device table td').eq(1).text(device.name);
	$('#device table td').eq(3).text(device.phonegap);
	$('#device table td').eq(5).text(device.plataform);
	$('#device table td').eq(7).text(device.version);
	$('#device table td').eq(9).text(device.uuid);
}
$(document).ready(function(){
	deviceinfo();
	document.addEventListener("deviceready",function(){
	deviceinfo()
	},false);
});