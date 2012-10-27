// JavaScript Document
function deviceinfo(){
	$('#devic table td').eq(1).text(device.name);
	$('#devic table td').eq(3).text(device.phonegap);
	$('#devic table td').eq(5).text(device.plataform);
	$('#devic table td').eq(7).text(device.version);
	$('#devic table td').eq(9).text(device.uuid);
}
$(document).ready(function(){
	deviceinfo();
	document.addEventListener("deviceready",function(){
	deviceinfo()
	},false);
});