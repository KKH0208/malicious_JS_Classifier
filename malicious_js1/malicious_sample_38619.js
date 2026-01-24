var monthArray=new Array("janvier","f&eacute;vrier","mars","avril","mai","juin","juillet","ao&ucirc;t","septembre","octobre","novembre","d&eacute;cembre");
                                var today = new Date();
                                var month= today.getMonth();
                                var year = today.getFullYear()%100;
                                var fullYear=today.getFullYear();
                                year=new String(year);
                                year=addzero(year);
                                var countMonth=month;
                                for(var i=0;i<12;i++,countMonth++){
                                    if(countMonth%12==0 && i>0){
                                        countMonth=0;
                                        year++;
                                        year=new String(year);
                                        year=addzero(year);
                                        fullYear++;
                                    }
                                    document.writeln("<option value=\""+fullYear+"-"+(countMonth+1)+"\">"+monthArray[countMonth]+" "+fullYear);
                                }