function lebel_logo(etiqueta) {
imagenes = new Array();
imagenes[1] = "<img src='http://4.bp.blogspot.com/-dG_Mj_ve38w/Tpk1nppvxUI/AAAAAAAAC7c/neOx825AOYU/s000/s1.png' style='width:20%;' title='Score1'/>"

imagenes[2] = "<img src='http://3.bp.blogspot.com/-f5zjpIyRh9c/Tpk1nnAQcnI/AAAAAAAAC7o/Q9K5buo1w9g/s000/s2.png' style='width:40%;' title='Score2'/>"

imagenes[3] = "<img src='http://2.bp.blogspot.com/-vEF_p-zwyhw/Tpk1oA5p0kI/AAAAAAAAC7w/oz1MLt5dQWc/s000/s3.png' style='width:60%;' title='Score3'/>"

imagenes[4] = "<img src='http://4.bp.blogspot.com/-N3et12bvgjA/Tpk1oQagrxI/AAAAAAAAC74/i_mraQdB1eE/s000/s4.png' style='width:80%;' title='Score4'/>"

imagenes[5] = "<img src='http://2.bp.blogspot.com/-ohTI0tRCKbk/Tpk1onX0paI/AAAAAAAAC8A/dzRvpbPYMqw/s000/s5.png' style='width:100%;' title='Score5'/>"
 
if (etiqueta == "Score1")
{document.write(imagenes[1]);}

if (etiqueta == "Score2")
{document.write(imagenes[2]);} 

if (etiqueta == "Score3")
{document.write(imagenes[3]);} 

if (etiqueta == "Score4")
{document.write(imagenes[4]);} 

if (etiqueta == "Score5")
{document.write(imagenes[5]);} 

}