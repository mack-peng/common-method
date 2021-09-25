
		// /**
		// *小数处理成百分数不能直接用乘法的方式进行小数的处理
		// *因为在js的数据计算中存在很大的计算精度问题0.14*100 = 14.000000002
		// *切记不能用浮点型计算之后用于等于的计算0.1+0.2 ===0.3
		// *浮点型数据的最高精度是17位，多的就会被取消掉（字符串都没办法拼接，因为传值的时候就被截去）
		// *如果转化成科学技术法的形式那么将会有多少位，保留多少位（因为转化成科学计数法的形式可用字符串进行拼接）
		// *@param  Number (nums) {0.00023}
		// *@return  String {0.023%}
		// */
		function float(nums){
			let str=''
			//如果是字符串就不需要
			if((nums || nums===0) && Object.prototype.toString.call(nums) ==='[object Number]'){
				//数字转化成字符串
			    str = nums.toString();
			}else{
				str = nums
			}
			//是否是负数
			let negative = false
			debugger
			if(str.indexOf('-') === 0){
				negative = true
				str = str.substring(1)
			}
			//判断是否是科学技术法
			const eNum = str.indexOf("e")
			if(eNum !== -1  ){
				const numEnd = str.substring(eNum+2);
				const numStart = str.substring(0,eNum)
				const strAll = numStart.replace(/\./g,'')
				//数字过长出现科学技术法
				//整数
				if(str.split('').includes('+')){
					const strAlls = strAll.padEnd(Number(numEnd)+(strAll.length-1),'0')
					str = `${strAlls}`
					return `${str}00%`
				}else{
					//小数
					const strAlls = strAll.padStart(Number(numEnd)+(strAll.length-1),'0')
					str = `0.${strAlls}`
				}
			}
			//判断有没有小数点
			if(str.indexOf(".") === -1 ){
				//整数
				//0
				if(Number(nums)===0){
					return `0%`
				}else{
					return `${nums}00%`
				}
			}else{
				const strNum = str.indexOf(".")
				//小数部分
				let strNM = str.substring(strNum+1);
				//整数部分
				let strNMInt = str.substring(0,strNum);
				//判断小数的位数
				switch(strNM.length){
					//一位后位补齐
					case 1:
						strNM = strNMInt>0?`${strNMInt}${strNM}0%` :`${strNM}0%` 
					break;
					case 2:
					if(strNM.substr(0,1) === "0"){
						strNM =strNMInt>0?`${strNMInt}0${strNM.substring(1)}%` :`${strNM.substring(1)}%` 
					}else{
						strNM =strNMInt>0?`${strNMInt}${strNM}%` :`${strNM}%` 
					}
					break;
					default:
					if(strNM.substr(0,1) === "0"){
						strNM = strNMInt>0? `${strNMInt}0${strNM.substr(1,1)}.${strNM.substring(2)}%`:`${strNM.substr(1,1)}.${strNM.substring(2)}%`
					}else{
						strNM =strNMInt>0? `${strNMInt}${strNM.substr(0,2)}.${strNM.substring(2)}%`: `${strNM.substr(0,2)}.${strNM.substring(2)}%`
					}
					break;
				}
				
				if(negative){
					return `-${strNM}`
				}else{
					return strNM
				}
			}
		}

		