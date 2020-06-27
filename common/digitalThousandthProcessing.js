        /**
		*数字的千分位处理
		*对于数字的千分位处理的问题
		*@param Nmuber(nums) {1000.12}
		*@return String {1,000.12}
		*/
		function digitalThousandthProcessing(nums){
			if(nums && String(nums).includes(".")){
				const str = String(nums);
				const subNumber  = String(nums).indexOf(".");
				const intStr = parseInt(str.substring(0,subNumber),10).toLocaleString()
				const floatStr = str.substring(subNumber);
				return `${intStr}${floatStr}`
			}else if(nums){
				return nums.toLocaleString()
			}else{
				return nums
			}
		 }