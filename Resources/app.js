//将来的にxmlにパスワードとusernameを保存する
//他のwindowへのアクセス方法　Ti.App.scrollview.views[index]

(function(){
	
	///////////
	// require('lib/vineAPI').vineNewLogin('e.takumi.89@gmail.com','techcamptech','TechcampTakumi');
	// require('lib/vineAPI').vineNewLogin('higezizii-tansoku-choko-about@about-hiroppy.com','about19920429','about_hiroppy_test');
	// var b = require('com.HjAboutHiroppy.VineCamera');
	// var v = b.createView();
	// console.log(v);
	
	
	var a = require('UI/signSelect').signSelect();
	//require('lib/vineAPI').vineLogin('dreams.come.true.about@gmail.com','about19920429');
	// require('lib/vineAPI').vineLogin('e.takumi.89@gmail.com','8Gatu9Ka');
	console.log("=================");
	console.log(a);
	console.log("=================");
	Ti.App.disableNetworkActivityIndicator = true; //ネットワークインジゲータを消す
	
	tab_group = Ti.UI.createTabGroup();
	
	//一番下のベースLayer
	Ti.App.win_base = Ti.UI.createWindow({
		// backgroundImage: 'image/background.jpg',
		backgroundColor:"#eeeeee",
		navBarHidden: true,
		tabBarHidden: true,
		fullscreen : false,  
	});
	
	Ti.App.win_base.add(a);
	
	var tab = Ti.UI.createTab({ window: Ti.App.win_base });
	tab_group.addTab(tab);
	tab_group.open();
	
	var dummyWindow = [];
	
	//この個数は変動
	for(var i=0;i<4;i++){
		var w = Ti.UI.createWindow({
			width:"100%",
			height:Ti.UI.FILL,
			backgroundColor:"#ddd",
		});
		dummyWindow.push(w);	
	}

	//スクロールビューの挿入
	Ti.App.scrollview = Ti.UI.createScrollableView({
		// left:"10%",
		top:"10%",
		width:"100%",
		height:"80%",
		// left:"20%",
		views:dummyWindow,
		horizontalBounce:false,
		cacheSize:6,
		// showPagingControl: true,
        // pagingControlHeight: 30,
	});
	
	Ti.App.win_base.add(Ti.App.scrollview);
	
	
	
	//Button の　追加
	createImages = function(image,size){
		var button = Ti.UI.createButton({
			color : "#ffffff",
			backgroundImage : image,
			left:size,
			width:20,
		    height:20,
		});
		return button;
	};
	
	var homeButton = createImages("images/uniF489_.png",17);
	var listButton = createImages("images/list.png",17);
	var cameraButton = createImages("images/videocamera.png",153);
	var searchButton = createImages("images/search.png",285);
	
	listButton.addEventListener('singletap',function(){
		require('UI/leftList').list();	
	});
	
	cameraButton.addEventListener('singletap',function(){
		require('UI/post').postWindow();
	});
	
	//可視化用
	var buttonBar = Ti.UI.createView({
		width:"100%",
		height:"10%",
		bottom:0,
		backgroundColor:"#00a478",
		color:"#fff",
		textAlign:'center'
	});
	
	//buttonBar.add(homeButton);
	buttonBar.add(listButton);
	buttonBar.add(cameraButton);
	buttonBar.add(searchButton);

	var homebuttonBar = Ti.UI.createView({
		width:"20%",
		height:"100%",
		top:0,
		left:0,
		image:"images/uniF489.png",
		bubbleParent:false
	});
	
	homebuttonBar.addEventListener('singletap',function(){
		Ti.App.scrollview.scrollToView(0);
	});
	

	// homebuttonBar.add(homeButton);

	//上部ラベル
	var topLabel = Ti.UI.createLabel({//Label
		width:"100%",
		height:"10%",
		top:0,
		backgroundColor:"#00a478",
		text:"TIMELINE",
		font:{
			fontWeight: "normal", 
			fontSize: 25, 
			fontFamily: 'AppleGothic'
		},
		color:"#fff",
		textAlign:'center',
		bubbleParent:false
	});
	
	topLabel.add(homebuttonBar);
	homebuttonBar.add(homeButton);
	
	homebuttonBar.addEventListener('singletap',function(e){
		
		//Ti.UI.ScrollableView. scrollToView(dummyWindow = [0]);
	});
	
	
	topLabel.addEventListener('singletap',function(e){
	});
	
	///////////////////////////////////////////////
	//Labelとscrollableview
	var topLabelNameArray = [];
	topLabelNameArray[0]= "TIMELINE";
	topLabelNameArray[1]= "ACTIVITY";
	topLabelNameArray[2]= "EXPLOPE";
	topLabelNameArray[3]= "PROFILE";
	
	
	Ti.App.scrollview.addEventListener('scroll',function(e){
		if(e.currentPage != undefined){
			topLabel.text = topLabelNameArray[e.currentPage];	
		}
	});
	
	///////////////////////////////////////////////
	
    // 	
	Ti.App.win_base.add(buttonBar);
	Ti.App.win_base.add(topLabel);
	// require('lib/camera').camera();
	//これに入ったら各処理させる

	Ti.App.addEventListener('loginComplete',function(){
		console.log('login');
		
		// require('lib/vineAPI').vinePopularTimeLine();
		
		// Ti.App.scrollview.views[0].add(require('UI/myTimeline').myTimeline());
		//test
		//require('UI/newLogin').newLogin();
<<<<<<< HEAD


		// require('UI/signIn').signIn();
		// require('UI/myProfile').myProfile();
		// require('lib/vineAPI').myProfile();	
		// require('lib/vineAPI').vineGraphTimeLine();


		//require('lib/vineAPI').userData();
		//require('lib/vineAPI').vineLogin();
		
		require('UI/signSelect').signSelect();

		
=======
		require('UI/myProfile').myProfile();
		require('lib/vineAPI').myProfile();
		
		require('lib/vineAPI').vineGraphTimeLine();
		//require('lib/vineAPI').userData();		
>>>>>>> 1df317b98dd30967e77a4d65ef3b755050cee117
	});
	
})();
