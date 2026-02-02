//days  >  maxdays
 
if  (( access == 1 ||  days  >  maxdays)  && i_access==1  &&  (up_down==0 || up_down==2)){

document.write('<table border="0">');
for(z1=0;z1<4;z1++){

  z2= Math.floor((imgads.length)*Math.random());

  document.write('<tr><td><img src="'+imgads[z2]+'" border="1" width="50" height="50" ></td></tr>');
}
document.write('</table>');

}