var exec = require('child_process').exec
, fs = require('fs');
var myIPFile = "../client/IPAddress.txt";
function getMyIP(error, stdout, stderr) {
	console.log("IP Address: "+stdout);
	var fileStream = fs.createWriteStream(myIPFile);
	fileStream.write(stdout);
	fileStream.end();
}

var command = "ip addr | egrep -i \"inet.+wlan0\" | awk -F[\\ /] '{print $6}' | tr -d \\n"
var command1 = "ip addr | egrep -i \"inet.+wlan0\" | awk -F[\\ /] '{print $6}' | tr -d [:space:]"
var command2 = "hostname --all-ip-addresses";
var command3 = "hostname -I";

//exec(command1, getMyIP);
var myIP = exec(command1);
myIP.stdout.on('data', function(data) {
	console.log("stdout: "+data);
});
myIP.stderr.on('data', function(data) {
	console.log("stderr: "+data);
});
/* myIP.on('close', function(data) {
	console.log("Closing Code: "+data);
}); */

//var myIP = childProcess.exec(command);
/* myIP.stdout.on('data', function(data) {
	console.log("stdout: "+data);
	sysIP = data;
}); */