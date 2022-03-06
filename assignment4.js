var names=new Array();
names[0]="Yaakov";
names[1]="Keerat";
names[2]="jaiswal";
names[3]="jimbei";
names[4]="boobie";
names[5]="frank";
names[6]="larry";
names[7]="paula";
names[8]="lauren";
names[9]="jim";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}