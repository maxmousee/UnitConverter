var admobid = {};

// TODO: replace the following ad units with your own
if( /(android)/i.test(navigator.userAgent) ) { 
  admobid = { // for Android
    banner: 'ca-app-pub-8848243490881110/1479064183',
    interstitial: 'ca-app-pub-8848243490881110/5769662989'
  };
} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
  admobid = { // for iOS
    banner: 'ca-app-pub-8848243490881110/1416528585',
    interstitial: ''
  };
} else {
  admobid = { // for Windows Phone
    banner: '',
    interstitial: ''
  };
}

function initApp() {
  if (! AdMob ) { alert( 'admob plugin not ready' ); return; }

  // this will create a banner on startup
  AdMob.createBanner ({
    adId: admobid.banner,
    position: AdMob.AD_POSITION.BOTTOM_CENTER,
    autoShow: true
  });

  // // this will load a full screen ad on startup
  // AdMob.prepareInterstitial({
  //   adId: admobid.interstitial,
  //   isTesting: true, // TODO: remove this line when release
  //   autoShow: true
  // });
}

if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
    document.addEventListener('deviceready', initApp, false);
} else {
    initApp();
}
