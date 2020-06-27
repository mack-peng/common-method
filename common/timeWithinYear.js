        /*判断传入的两个时间点是否一年之内
		*@param  Date (beginDate ,endDate) { new Date() }
		*@return Boolean {false, true}
		*
		**/
        function getPassYearFormatDate(beginDate,endDate) {
            if(beginDate && endDate &&  beginDate.getTime()<endDate.getTime()){
               const date = new Date();
               date.setDate(date.getDate()+365);
               const seperator = "-";
               const year = date.getFullYear();
               const month = date.getMonth() + 1;
               const strDate = date.getDate();
               let monthStr ='';
               let strDateStr ='';
               let currentdate ='';
               if (month >= 1 && month <= 9) {
                   monthStr = "0" + month;
               }
               if (strDate >= 0 && strDate <= 9) {
                   strDateStr = "0" + strDate;
               }
               if(month >= 10 && strDate <= 9){
                   currentdate = year + seperator + month + seperator + strDateStr;
               }else if(strDate >= 10 && month <= 9){
                   currentdate = year + seperator + monthStr + seperator + strDate;
               }else if(strDate >= 10 && month >= 9){
                   currentdate = year + seperator + month + seperator + strDate;
               }else{
                   currentdate = year + seperator + monthStr + seperator + strDateStr;

               }
               const currentdateTimesTamp = new Date(currentdate).getTime();
               const endDateTimesTamp = endDate.getTime();
               const timeJudgment = currentdateTimesTamp > endDateTimesTamp
               return timeJudgment
            }else{
               return false

            }
       }

