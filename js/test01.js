//基本用法测试
//			var a = true;
//			var b = 3;
//			var c = "hello";
//			var d = 2.5;
//			alert(a); 
//			alert(b); 
//			alert(c); 
//			alert(parseInt("1234de12"));
//			alert(parseFloat("13.2.5.d"));
//			alert(isNaN(c));//是否是非数字值
//			alert(typeof(3));
//			alert(c+b);
//			var i = 1;
//			var sum = 0;
//			while(i<11){
//				sum  += i;
//				i++;
//			}
//			alert(sum);
//			
//			sum = 0;
//			i=1;
//			do{
//				sum  += i;
//				i++;
//			}while(i<11)
//			alert(sum);
//			for(;i<11;i++){
//				sum+=i;
//			}
//			alert(sum);
//			var myArray = [1,2,3];
//			alert(myArray[1]);
//			alert(myArray.length);
//			myArray[4]=8;
//			alert(myArray.length);
//			alert(myArray[3]);
//			myArray.push(5);
//			var x = myArray.pop();
//			alert(myArray);
//			alert(x);
//var myArray = [];
//var myArray = new Array();
//-----------------
//var orArray = [1,3,6,8,4];
//输出偶数
//for (var i = 0; i < orArray.length; i++) {
//	myArray.push(orArray[i]);
//}
//------------
//myArray.push(1,3,6,8,4);
//for (var i = 0; i < myArray.length; i++) {
//	var key = myArray[i]%2;
//	if(key == 0){
//		alert(myArray[i]);
//	}
//}
//var a1 = [1,2,3,40];
//alert(a1.shift());
//alert(a1.unshift(66,55,14));//返回长度7
//alert(a1);//返回数组 66,55,14,1,2,3,40
//alert(a1.splice(1));
//alert(a1);//返回数组 
//          var a1=[1,2,3,4,5];
//          alert(a1.slice(1,3)); //输出2,3
//          alert(a1.slice(1));   //输出2,3,4,5
//          alert(a1.slice(1,-1)); //输出2,3,4
//          alert(a1.slice(-3,-2)); //输出3
//var a1=[1,4,2,3,14]; 
//alert("默认的排序结果："+a1.sort());
//函数入口点
//alert("冒泡排序的结果"+a1.sort(myArraySortFun));  //输出1，14，2，3，4
//函数------------------------
//function Add (a,b){
//	//如果a和b的值都在才执行
//	if(a&&b){
//		return a+b;
//	}
//	
//}
//alert(Add(2,6,8));
//匿名函数---------------------
//定义完成之后立刻执行
//(function(a,b){
//	alert(a+b);
//})(2,3);

//冒泡排序
//function myArraySortFun(a,b){
//	console.log("my Array sort");
//	return a-b;
//}
//a1.sort(myArraySortFun);
//function showMsg(){
//	console.log('测试执行');
//}
//间隔
//setInterval(showMsg,2000);//间隔多次执行的时候只能使用函数入口点，如果加括号表示立即执行的函数，只执行一遍。
//setInterval("alert('hello')",30000);//间隔执行某条语句
//var sit = setInterval(myArraySortFun(3,4),3000);
//var sit = setInterval(function(){
//	alert('kaixinjiuhao');
//},3000);
//clearInterval(sit);//清除间隔
//延时:与间隔用法相似
//setTimeout(showMsg,2000);
//if(confirm("are you sure")){
//			alert("Delet...");
//		}else{
//			alert("cancel...");
//		}

//针对:jstest.html

//var oInput = document.getElementById("myname");
//console.log("id为myname 的 input 当前值为" + oInput.value);
//oInput.value="HTML5";
//console.log("id为myname 的 input 修改后值为" + oInput.value);

//var oinput1 = document.getElementsByTagName("input");
//alert(oinput1.length);
//alert(oinput1[0].value);

//var oinput2 = document.getElementsByClassName("myclass");
//console.log(oinput2.length);
//var oinput3 = document.querySelector('input');
//console.log(oinput3);
//alert(oinput3);
//var oinput4 = document.querySelectorAll('input');
//console.log(oinput4.length);

//动态附加事件：便于增加参数。效果333
//var oInput = document.getElementById("btn_submit");
//oInput.onclick = function(){
//	alert("hello");
//}
//oInput.onclick = showMsg;//同时给一个结点赋值多次点击事件：执行的是最后的事件
//oInput.addEventListener("click",showMsg,false);//同时给一个结点赋值多次点击事件：所有事件都执行
//oInput.removeEventListener("click",showMsg)//匿名函数无法移除，通过函数入口点添加的事件可以移除

//小游戏：点击开始在控制台一直打印，点击暂停停止打印

//var sit;
//function playgame(){
//	console.log("开始游戏");
//	if(sit==null){
//		sit=setInterval(showMsg,300);
//	}
//	
//}
//function Pausegame(){
//	console.log("暂停游戏");
//	if(sit!=null){
//		clearInterval(sit);
//		sit=null;
//	}
//}
//var play = document.getElementById("btn_Play");
//play.addEventListener("click",playgame,false);
//var pause = document.getElementById("btn_Pause");
//pause.addEventListener("click",Pausegame,false);

//对象使用
//var myobject ={};
//myobject.name="Amy";
//myobject.gender = "girl";
//alert("myobject.name="+myobject.name+"\nmyobject.gender="+myobject.gender);

//对象结合数组使用
//var myobject =[{}];
//myobject.name="Amy";
//myobject.gender = "girl";
//alert("myobject.name="+myobject.name+"\nmyobject.gender="+myobject.gender);

//正则表达式
//验证邮箱的正则表达式
//var reg = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
//var emailString = "abc@123.com";
//alert(reg.test(emailString));

//定义类
//function Person(name,age){
//	this.name= name;
//	this.age=age;
//}
//var person = new Person("小明",42);
//等效于var person = new window.Person("小明",42);
//alert(person.name);

//alert(this);
//在java中，this指代当前对象
//在脚本中，this可指代当前对象，也可指代当前窗口对象

//alert(this.innerWidth);//当前窗口的宽度


//原型法实现继承
//var reg = "happy time";
//String.prototype.print =  function(){
//	alert(this);
//}
//reg.print();
//------------------------------
/*function Person(name,age){
	this.name= name;
	this.age=age;
}
Person.prototype.sayName = function(){
	alert("个人姓名:"+this.name);
}
var person = new Person("小明",42);
person.sayName();

function Student(stuNo,stuName,stuAge){
	this.stuNo = stuNo;
	Person.call(this,stuName,stuAge);//方法回掉
}
Student.prototype=new Person();//要定义在类中方法前面
Student.prototype.sayStuNo = function(){
	alert("学生学号:"+this.stuNo+this.name);
}
var stu = new Student("1234","小米","15");
stu.sayStuNo();
stu.sayName();*/
//---------------------------------

/*function Person(name,age){
        this.name = name;
        this.age = age;
}
Person.prototype.showInfo = function(){
	alert(this.name+" " +this.age);
}
function Stu(name,age){
    Person.call(name,age);
}
Stu.prototype = new Person();
var stu = new Stu("wang",16);
stu.showInfo();*/
//---------------------------

//练习：
//定义个类myClass，它有２个属width
//和height,２个方法showHeight(显示height)和
//showWidth(显示width)

//function myClass(width,height){
//	this.width = width;
//	this.height = height;
//	
//}
//myClass.prototype.showHeight = function(){
//	alert(this.height);
//}
//myClass.prototype.showWidth = function(){
//	alert(this.width);
//}
//var my = new myClass("25cm","35cm");
//my.showHeight();
//my.showWidth();

//----------------------
//练习
//按下面的类图继承关系设计Shape类
//和Square类

//function Shape(color,borderThickness){
//	this.color = color;
//	this.borderThickness=borderThickness;
//}
//Shape.prototype.describe = function(){
//	alert("显示形状的颜色和边框粗细："+this.color+","+this.borderThickness);
//}
//function Square(sideLength,color,borderThickness){
//	this.sideLength=sideLength;
//	Shape.call(this,color,borderThickness);
//}
//Square.prototype= new Shape();
//Square.prototype.getArea = function(){
//	alert("面积："+this.sideLength);
//}
//var square = new Square(10,"red","粗边框");
//square.getArea();
//square.describe();
//---------------------------

//Square.prototype = new Shape("red","1");
//Square.prototype.getArea = function(){
//	alert(this.sideLength*this.sideLength);
//}
//var mySquare = new Square(10);
//mySquare.getArea();
//命名空间--用于团队协作
//var book={};
//book.html5games = {};//只有顶级包名需要var
//book.html5games.pingpong = function(version){//在包名下定义类
//	this.version = version;
//}
//var game = new book.html5games.pingpong("1.0");
//alert(game.version);

//json对象
//var ostu = {"name":"Amy","age":42};
//alert(ostu.name);

//json对象数组
//var ostu = [{"name":"Amy","age":42},{"name":"Tom","age":24}];
//alert(ostu[0].name+"比"+ostu[1].name+"相差"+(ostu[0].age-ostu[1].age)+"岁");

//字符串转json
//var oStuString = '{"name":"Amy","age":42}';
//var oStuJson=JSON.parse(oStuString);//字符串反序列化转为json,用于和服务器之间的交互
//alert(oStuJson.name);

//var date = Date();//日期对象
//alert(date);

//var round = Math.round(4.6);//Math对象(四舍五入)
//alert(round);
//alert("hello,world".length);

//服务器只接受字符串和二进制流

//json转字符串
//var oStuString = '{"name":"Amy","age":42}';
//var theStuString=JSON.stringify(oStuString);
//alert(theStuString);

//复杂的字符串取某一个属性
//var dataString='{"teachers":[{"name":"黄波","course":"网页高级设计"},{"name":"贺敏","course":"Java程序设计"},{"name":"毛丽娟","course":"JavaScript程序设计"}],"students":[{"name":"张三","age":20},{"name":"李四","age":21},{"name":"王五","age":19}]}';
//var dataJson = JSON.parse(dataString);
//alert(dataJson.teachers[1].course);

//for (var i = 0; i < dataJson.students.length; i++) {
//	alert(dataJson.students[i].name);
//}

//--------------------有问题
////标准Js DOM 对象
//var odiv = document.getElementById("#mydiv");
//alert(odiv);
//var $odiv=$(odiv);//js对象转jQuery对象
//
////jQuery 包装集
//var $jdiv= $('#mydiv');
//alert(odiv);
//odiv=$jdiv[0];//jQuery对象转js对象
//-----------------------有问题


//$(function(){
//	alert("DOM树构建完成之后再运行");
//	$("#btn_submit").click
//});


$(function(){
	
//	$('input').focus(function(){
//		$(this).addClass('setGreen');
//	});
//	$('input').blur(function(){
//		$(this).addClass('setYellow');
//	});
//	alert($('input:checked').length);//checked过滤器。
//	$(":enabled").addClass('setGreen');//enabled过滤器
//	$(':text').addClass('setGreen');//text选择器
//	$(':input').addClass("setGreen");//input选择器
//	$("#btn_submit").bind(function(){})//可以一次绑定多个点击事件
//	定义jQuery变量：var $jdiv便于编程人员识别
//	ancestor descendant选择器 后代选择器
//	alert($('form input').length);
//	alert($('div+input').length);
//	alert($('div~input').length);//选择div后面所有的input
//	alert($("input:first").val());//first过滤器
//	var result=$(':header').text();//找标题
//	var result=$('p:contains("生物")').text();//contains过滤器
//	var result=$('div:has(p)').addClass('setGreen');//parent过滤器
//	var result=$('p:hidden').length;//hidden过滤器
//	var result=$('[id="myname1"]').length;
//	alert(result);
//	$('select').change(function(){
//		var str = "";
//		$('select option:checked').each(function(){
//			str+=$(this).text()+" ";
//		})
//		$('body').append(str);
//	})
//	$(document).mousemove(function(e){//监听鼠标
//		$('#pagex').text(e.pageX);
//		$('#pagey').text(e.pageY);
//	});
//	$('#myname1').keypress(function(){//监听键盘
//		alert("handler for .keypress() call");
//	})
//	$('a').click(function(e){
//		e.preventDefault();//阻止默认绑定的事件
//	});
//	$('input').bind("click",{foo:"hello"},handler);//事件处理之前附加数据，bind()方法绑定事件处理函数
//	function handler(e){
//		alert(e.data.foo);
//	}
//	$('a').click(function(){
//		$('li').toggle();
//	})
	
//	$("input").on("click dblclick mouseover mouseout",function(event){
//	$("div").html("Event: " + event.type);
//	});
//	$('input').keypress(function(e){
//		$('a').text(" "+e.which);
//	})
//	i=0;
//	function scroll(){
//		i++;
//		return i;
//	}
//	$('#div1').scroll(function(){
//		$('input:eq(0)').val(scroll())
//	})
//$('#btn_submit').click(function(){
//	$('#div1').animate({//自定义动画效果
//		"heigh":"200px",
//		"width":"200px"
//	})
//})
//$('#btn_cancel').click(function(){
//	$('#div1').fadeOut(300);
//})
//$('#btn_submit').click(function(){
//	$('#div1').fadeIn(500);
//})
var div = $('#div1');
$('#btn_submit').click(function(){
		div.animate({height:300},"slow");
		div.animate({width:300},"slow").delay(3000);
		div.queue(function () {
			div.css("background-color","red");  
			div.dequeue();//执行并将其出队
		});
		div.animate({height:100},"slow");
		div.animate({width:100},"slow");
		console.log('动画个数'+div.queue("fx").length);
})	
$('#btn_cancel').click(function(){
	div.clearQueue();
})
	
});
//function setfous(){
//	$('#myname1').focus();
//}
//function lostfous(){
//	$('#myname1').blur();
//}
//			制作视频进度条，事件参数对象
//			var video = document.getElementById('video');
//			video.onclick = function(e){
//				console.log('e.pageX:'+e.pageX);
//				alert('e'+e);
//				alert(e.offsetX);//相对于video的偏移量
//				alert(e.offsetY);
//			}