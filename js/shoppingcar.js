$(function(){
	var sum = 0;
	var totalMoney = 0;
	$(".btnadd").each(function(){
		$(this).click(function(){
			sum =$(this).prev().val();
			sum++;
			if(sum>=10){
				sum=10;
			}
			$(this).prev().val(sum);
			totalMoney = sum*$(this).parent().parent().children().eq(3).html();
			$(this).parent().next().html(totalMoney);
			$("#countmoney").html(totalMoney);
			if(totalMoney!=0){
				$("#countMoney").css({"background":"orange"});
			}
		});
	});
	$(".btnred").each(function(){
		$(this).click(function(){
			sum =$(this).next().val();
			sum--;
			if(sum<=0){
				sum=0;
			}
			$(this).next().val(sum);
			totalMoney = sum*$(this).parent().parent().children().eq(3).html();
			$(this).parent().next().html(totalMoney);
			$("#countmoney").html(totalMoney);
			if(totalMoney!=0){
				$("#countMoney").css({"background":"orange"});
			}
		});
	});
jQuery.fn.extend({
    "checkAll":function (isChecked) {
        //this是jQuery对象
        this.each(function () {
            this.checked = isChecked;
        })
    },

    "uncheck":function () {
        //this是jQuery对象
        this.each(function () {
            this.checked = !this.checked;
        })
    },
    //全选的复选框和子复选框的关联
    "checkRelation":function ($sub) {
        $parent = this;
        //全选的功能（父控制子）
        this.click(function () {
            $sub.checkAll($parent[0].checked);
            //$("#list :checkbox").checkAll(this.checked);
        });
        //联动（子控制父：子复选框有改变，那么父复选框也要有对应的改变）
        $sub.click(function () {
            //1、遍历所有的子复选框
            let isChecked = true;
            $sub.each(function () {
                if(this.checked==false){
                    isChecked = false;
                }
            })
            //2、改变父复选框的状态
            $parent[0].checked = isChecked;
        });
    }
});
	
	
	$("#checkedAllId").checkRelation($("#list :checkbox"));

    $("#btnUnCheckId").click(function () {
        $("#list :checkbox").uncheck();
    });
    
   




});








