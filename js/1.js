(function(){
   var app=angular.module("quizapp", []);
   app.controller("techno",popup);
   function popup(){
   	var app=this;
   	this.popups=null;
   	this.popfun=function(x){
   		this.popups=x;
   	}
	     
	app.technames=[
        
       		{
           	title:"Html5",
           logo:"img/logo1.png",
           description:" HTML 5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and current major version of the HTML standard."
       		},
       		{
           	title:"css3",
           logo:"img/logo2.png",
           description:" CSS3 is the latest evolution of the Cascading Style Sheets language.It brings a lot of long-awaited novelties, like rounded corners, shadows, gradients, transitions or animations, as well as new layouts."
       		},
       		{
           	title:"JavaScript",
           logo:"img/logo3.png",
           description:" JavaScript, often abbreviated as JS, is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm."
       		},
       		{
           	title:"Jquery",
           logo:"img/logo4.png",
           description:" jQuery is not a language, but it is a well written JavaScript code.It is a fast and concise JavaScript Library that simplifies HTML document traversing, event handling and Ajax interactions for rapid web development."
       		},
       		{
           	title:"Bootstrap",
           logo:"img/logo5.png",
           description:" Bootstrap is a front-end framework for designing websites and web applications. It contains HTML- and CSS-based design templates.Unlike many web frameworks, it concerns itself with front-end development only."
       		},
       		{
           	title:"Php5",
           logo:"img/logo6.png",
           description:" PHP is a server scripting language, and a powerful tool for making dynamic and interactive Web pages. PHP is a widely-used, free, and efficient alternative to competitors such as Microsoft's ASP."
       		},
       		{
           	title:"Angularjs",
           logo:"img/logo7.png",
           description:"AngularJS is a JavaScript-based open-source front-end web application framework mainly maintained by Google and by a community of individuals and corporations to address many of the challenges encountered in developing single-page applications."
       		},
       		{
           	title:"Nodejs",
           logo:"img/logo8.png",
           description:" Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser."
       		}
     	];
     }
     app.controller("qctrl",function($scope) {
  	var index=0; 
  	$scope.questions=[
			{
				question:'What does HTML stand for?',
				o1:'Hyper Text Markup Language',
				o2:'Home Tool Markup Language',
				o3:'Hyperlinks and Text Markup Language',
				o4:'none'
			},
			{
				question:'Who is making the Web standards?',
					o1:'client side',
					o2:'serverside',
					o3:'database',
					o4:'none'
			},
			{
				question:'How can you make a numbered list?',
					o1:'<dl>',
					o2:'<ol>',
					o3:' <ul>',
					o4:'none'
			},
			{
				question:'How can you make a bulleted list?',
					o1:'<dl>',
					o2:'<ol>',
					o3:' <ul>',
					o4:'none'
			},
			{
				question:'Which CSS property controls the text size?',
					o1:'text-size',
					o2:'text-style',
					o3:'font-size',
					o4:'font-style'
			},
			{
				question:'Which HTML tag is used to define an internal style sheet?',
					o1:'<script>',
					o2:'<css>',
					o3:'<style>',
					o4:'none'
			},
			{
				question:'Which HTML attribute is used to define inline styles?',
					o1:'font',
					o2:'class',
					o3:'style',
					o4:'styles'
			},
			{
				question:'What is the correct HTML for making a text area?',
					o1:'<input type="textbox">',
					o2:'<input type="textarea">',
					o3:'<textarea>',o4:'none'
			},
			{
				question:'What is the correct HTML for making a drop-down list?',
					o1:'<list>',
					o2:'<select>',
					o3:'<input type="list">',
					o4:'none'
			},
			{
				question:'What is the correct HTML for making a checkbox?',
				o1:'<checkbox>',
				o2:'<check>',
				o3:' <input type="check">',
				o4:'<input type="checkbox">'
			},
			{
				question:'Inline elements are normally displayed without starting a new line.',
				o1:'False',
				o2:'True',
				o3:'database',
				o4:'none'
			},
			{
				question:'Which of these elements are all <table> elements?',
					o1:'<table><head><tfoot>',
					o2:'<table><tr><tt>',
					o3:'<table><tr><td>',
					o4:'none'
			},
			{
				question:'Choose the correct HTML element to define emphasized text',
				o1:'italic',
				o2:'em',
				o3:'i',
				o4:'none'
			},
			{
				question:'What is the correct HTML for creating a hyperlink?',
					o1:'italic',
					o2:'em',
					o3:'i',
					o4:'none'
			
			},
			{
				question:'Choose the correct HTML element to define important text',
					o1:'client side',
					o2:'serverside',
					o3:'database',
					o4:'none'
			},
			{
				question:'What is the correct HTML for adding a background color?',
					o1:'client side',
					o2:'serverside',
					o3:'database',
					o4:'none'
			},
			{
				question:'Choose the correct HTML element for the largest heading:',
					o1:'client side',
					o2:'serverside',
					o3:'database',
					o4:'none'
			},
			{
				question:'What is the correct HTML element for inserting a line break?',
					o1:'client side',
					o2:'serverside',
					o3:'database',
					o4:'none'
			},
			{
				question:'What does CSS stand for?',
					o1:'client side',
					o2:'serverside',
					o3:'database',
					o4:'none'
			},
			{
				question:'Inside which HTML element do we put the JavaScript?',
					o1:'client side',
					o2:'serverside',
					o3:'database',
					o4:'none'
			},
			{
				question:'Bootstrap 3 is mobile-first',
					o1:'client side',
					o2:'serverside',
					o3:'database',
					o4:'none'
			},
			{
				question:'Which of the following is correct?',
					o1:'client side',
					o2:'serverside',
					o3:'database',
					o4:'none'
			},
			{
				question:'What does PHP stand for?',
				 o1:'client side',
				 o2:'serverside',
				 o3:'database',
				 o4:'none'
			},
			{
				question:'AngularJS extends HTML with new attributes.',
				 o1:'client side',
				 o2:'serverside',
				 o3:'database',
				 o4:'none'
			},
			{
				question:'What Is Java?',
					o1:'client side',
					o2:'serverside',
					o3:'database',
					o4:'none'
			}
			];

	      $scope.currentque=$scope.questions[index];
          $scope.currentq=function(code){
          	index=code;
     	  $scope.currentindex=index;
     	  $scope.currentque=$scope.questions[index];
           }

          $scope.next=function() {
          	if (index<$scope.questions.length-1) {
          		index++;
          		$scope.currentindex=index;
     	        $scope.currentque=$scope.questions[index];

          	}
          }

          $scope.prev=function(){
          	if(index){
          		index--;
          		$scope.currentindex=index;
     	        $scope.currentque=$scope.questions[index];
          	}
          }
          
          $scope.finish=function(){
             $window.alert("alert");
          }

  	
  });
  
  })();
  