angular.module('starter.controllers', ['ionic', 'ionic.native'])


.controller('IntroCtrl', function($scope, $state, $ionicSlideBoxDelegate) {
  $scope.slideChanged = function(index) {
    $scope.slideIndex = index;
  };
})





.controller('LoginCtrl', function($scope, $state, $location, $stateParams, $ionicModal, $ionicActionSheet,$ionicPopup, $http, $cordovaLocalNotification) {
 

  $scope.submitlogin = function () {
    var data1 = {
      staffUsername:$scope.submitlogin.username,
      staffPassword:$scope.submitlogin.password
    };

    if (data1.staffUsername===undefined || data1.staffPassword===undefined) {
      var alertPopup = $ionicPopup.alert({
        title: 'pamsh3',
        template: 'sorry, username or password cannot be empty'
      });
    } else{
      var finalUri = String($stateParams.finalurilink);
      // console.log(data1.staffUsername);
      $http.post(finalUri,data1)
      .then(function(response){
          // The function for loading progress.
          // $timeout(function () {
          //     if ($scope.isAndroid) {
          //         jQuery('#mobile-contract-list-loading-progress').show();
          //     }
          //     else {
          //         jQuery('#mobile-contract-list-loading-progress').fadeIn(700);
          //     }
          // }, 400);
          // $timeout(function () {
              //console.log(response.data.msg);
              if (response.data.status_code==500) { //message of success
                var alertPopup = $ionicPopup.alert({
                  title: 'pamsh3',
                  template: response.data.msg+response.data.status_code
                });

                
              } else {
                var alertPopup = $ionicPopup.alert({
                  title: 'pamsh3',
                  template: response.data.msg
                });

                // alertPopup.then(function(){
                //   var confirmPopup = $ionicPopup.confirm({
                //     title: '',
                //     template: 'You are sure you want to confirm this submission?'
                //   })
                // });
              } //EOF if::

          //     jQuery('#mobile-contract-list-loading-progress').hide();
          //     jQuery('#social-sign-up-content').fadeIn();
          //     //$scope.isLoading = false;
          // }, 3000);// End loading progress.
      }) //success
    }
    
  }; //EOF submit

})




.controller('AppCtrl', function($scope, $http, $ionicModal, $timeout, $cordovaCamera,$cordovaSQLite) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
 $http.get("http://localhost:8012/phpmyadmin/customer.php")
.success(function (response) {$scope.categories = response.records;});


// Create the shirt measurement modal
  $scope.shirtData = {};

 $ionicModal.fromTemplateUrl('templates/shirt.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.shirtmodal = modal;
  });

  $scope.shirt = function() {
    $scope.shirtmodal.show();
  };

   $scope.closeShirt = function() {
    $scope.shirtmodal.hide();
  };

$scope.addShirt = function() {
    console.log('Adding shirt', $scope.shirtData);

    // Simulate an adding delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeShirt();
    }, 1000);
  };


// Create the trousers measurement modal
   $scope.trousersData = {};

 $ionicModal.fromTemplateUrl('templates/trousers.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.trousersmodal = modal;
  });

  $scope.trousers = function() {
    $scope.trousersmodal.show();
  };

   $scope.closeTrousers = function() {
    $scope.trousersmodal.hide();
  };


   $scope.addTrousers = function() {
    console.log('Adding Trousers', $scope.trousersData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeTrousers();
    }, 1000);
  };

 

   $scope.kabaData = {};

 $ionicModal.fromTemplateUrl('templates/kaba_slit.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.kabamodal = modal;
  });

  $scope.kaba = function() {
    $scope.kabamodal.show();
  };

   $scope.closeKaba = function() {
    $scope.kabamodal.hide();
  };


   $scope.addKaba = function() {
    console.log('Adding kaba', $scope.kabaData);

    // Simulate a adding delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeKaba();
    }, 1000);
  };


   $scope.shortsData = {};

 $ionicModal.fromTemplateUrl('templates/shorts.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.shortsmodal = modal;
  });

  $scope.shorts = function() {
    $scope.shortsmodal.show();
  };

   $scope.closeShorts = function() {
    $scope.shortsmodal.hide();
  };


$scope.addShorts = function() {
    console.log('Adding shorts', $scope.shortsData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeShorts();
    }, 1000);
  };


  $scope.overallData = {};

 $ionicModal.fromTemplateUrl('templates/overall.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.overallmodal = modal;
  });

  $scope.overall = function() {
    $scope.overallmodal.show();
  };

   $scope.closeOverall = function() {
    $scope.overallmodal.hide();
  };


$scope.addOverall = function() {
    console.log('Adding overall', $scope.overallData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeOverall();
    }, 1000);
  };
  

  $scope.pic = function() {
            var options = { 
            quality : 75, 
            destinationType : Camera.DestinationType.DATA_URL, 
            sourceType : Camera.PictureSourceType.SAVEDPHOTOALBUM, 
            allowEdit : true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 300,
            targetHeight: 300,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false
        };
 
        $cordovaCamera.getPicture(options).then(function(imageData) {
            $scope.imgURI = "data:image/jpeg;base64," + imageData;
        }, function(err) {
            // An error occured. Show a message to the user
        });
    
        };

  $scope.closePic = function() {
    $scope.moda.hide();
  };

 $scope.insert = function(firstname, lastname) {
//alert('check: ' + $scope.aaa);
        var query = "INSERT INTO customers (firstname, lastname) VALUES (?,?)";
        $cordovaSQLite.execute($scope.db, query, [firstname, lastname]).then(function(res) {
            var message = "INSERT ID -> " + res.insertId;
            console.log(message);
            alert(message);
        }, function (err) {
            console.error(err);
            alert(err);
        });
    }
 
 
    $scope.select = function() {
        var query = "SELECT firstname, lastname FROM customers";
        $scope.categories = [];
        $cordovaSQLite.execute($scope.db, query, []).then(function(res) {
           var len = results.rows.length;
      for (var i = 0; i < len; i++) {
        $scope.categories.push({
          
          firstname: res.rows.item(i).firstname,
          lastname: res.rows.item(i).lastname
        });
        // Make sure to apply scope change so that ng-repeat updates
        $scope.$apply();
      }
    });
  }, function(error) {
    console.log(error)
  }

          







})

 /* $scope.customers = function() {
    var query = "SELECT firstname, phone FROM client";
    $cordovaSQLite.execute(db, query);
  }*/
 

/*$scope.customers = [];
  db.transaction(function(tx) {
    tx.executeSql('DROP TABLE clients');
    tx.executeSql('CREATE TABLE IF NOT EXISTS clients (firstname, phone, email)');
    tx.executeSql('INSERT INTO clients (firstname, phone, email) VALUES (?, ?, ?)', [1, 'samuel', '0543343266']);
    tx.executeSql('INSERT INTO clients (firstname, phone, email) VALUES (?, ?, ?)', [2, 'wonder', '0543343556']);
    tx.executeSql('SELECT * FROM clients', [], function (tx, results) {
      var len = results.rows.length;
      for (var i = 0; i < len; i++) {
        $scope.customers.push({
          firstname: results.rows.item(i).firstname,
          phone: results.rows.item(i).phone,
          email: results.rows.item(i).email
        });
        // Make sure to apply scope change so that ng-repeat updates
        $scope.$apply();
      }
    });
  }, function(error) {
    console.log(error)
  });
})

    //var query = "INSERT INTO client (firstname, phone, email, address, item) VALUES (?, ?, ?, ?)";
    //$cordovaSQLite.execute(db, query, [$scope.firstnameText, $scope.phoneInt, $scope.emailText, $scope.addressText, $scope.itemText])

 
  


                  
  

 /*$scope.addMeasurement = function(){
   $scope.bustInt='';
    $scope.highInt='';
    $scope.inseamInt='';
    $scope.neckInt='';
    $scope.sleeveInt='';
    $scope.waistInt='';

    var query = "INSERT INTO mesureTable ( bust, high, inseam, neck, sleeve, waist ) VALUES (?, ?, ?, ?, ?, ?,)";
    $cordovaSQLite.execute(db, query, [$scope.bustInt, $scope.highInt, $scope.inseamInt, $scope.neckInt, $scope.sleeveInt, $scope.waistInt])

     .then(function(res) {
                alert('HURREY ! INSERTED');
          
            }, function (err) {
                alert('ERROR IN INSERTION ->'+ JSON.stringify(err));
            });
   

  }

  $scope.measurement = function() {
    var query = "SELECT * FROM measureTable";
    $cordovaSQLite.execute(db, query);
  }*/




//DetailsCtrl
.controller('detailsCtrl', function($scope,  $state) {
 // $http.get('js/customers.json').success(function(data) {
  //  $scope.customers = data.Customers;
  //  $scope.items = data.Items;
  //  $scope.whichcustomer = $state.params.aId;

    
 // });





  //$scope.details = {};

    $scope.submit = function() {
  
   console.log($scope.customers);
 };

 $scope.verify = function(opt) {
  $scope.act = opt;
  if ($scope.act === "shirt"){
    $scope.shirtmodal.show();
  }
  else if ($scope.act === "trousers"){
    $scope.trousersmodal.show();
  }
  else if ($scope.act === "kaba"){
    $scope.kabamodal.show();
  }
  else if ($scope.act === "overall"){
    $scope.overallmodal.show();
  }
  else if ($scope.act === "shorts"){
    $scope.shortsmodal.show();
  }
  else { alert('Please choose an item');}

  console.log($scope.shortsData);
  console.log($scope.items);

};



$scope.show = 'false';

$scope.showOptions = function () {
  $scope.show = $scope.show == 'true' ? 'false' : 'true';
};



})



//Calender Controller
.controller('calendarCtrl', ['$scope', '$http', '$state', function($scope, $http, $state) {
   //$http.get('js/items.json').success(function(data) {
   // $scope.items = data;
   // $scope.whichitem = $state.params.aId;
   

 // });


}])
.controller('connectCtrl',function($scope,$ionicActionSheet) {
$scope.triggerActionsheet = function() {
     var clientact = $ionicActionSheet.show({
         buttons: [
            { text: '<i class="fa fa-file-movie-o"></i> Create gif' },
           
         ],
      
        
         titleText: 'Media',
         cancelText: 'Cancel',
      
         cancel: function() {
            // add cancel code...
         },
      
         buttonClicked: function(index) {
            if(index === 0) {
             
            $scope.gif();

               // add edit 1 code
            }

        
            if(index === 1) {
               // add edit 2 code
               
            }
            return true;
         },
      
      });
     }

 $scope.gif=function(){
  document.addEventListener('deviceready', function () {

  window.plugins.gif.init();
  
  var base64 = "" ;

  window.plugins.gif.addFrame(base64,{
      type : "base64" 
  });

  window.plugins.gif.finish(successCallback,errorCallback);

  function successCallback(src){
    var img = new Image();
    img.src = src ;
    document.body.appendChild(img) ;
  }

  function errorCallback(err){
    alert(err);
  }

})}









   $scope.whatsappShare=function(){
    window.plugins.socialsharing.shareViaWhatsApp('Digital Signature Maker', null /* img */, "https://play.google.com/store/apps/details?id=com.prantikv.digitalsignaturemaker" /* url */, null, function(errormsg){alert("Error: Cannot Share")});
  }
   $scope.twitterShare=function(){
    window.plugins.socialsharing.shareViaTwitter('Digital Signature Maker', null /* img */, 'https://play.google.com/store/apps/details?id=com.prantikv.digitalsignaturemaker', null, function(errormsg){alert("Error: Cannot Share")});
  }
   $scope.OtherShare=function(){
     window.plugins.socialsharing.share('Digital Signature Maker', null, null, 'https://play.google.com/store/apps/details?id=com.prantikv.digitalsignaturemaker');
  }
 
})

.controller('measurementCtrl',function($scope,$ionicActionSheet) {
$scope.measurementActionsheet = function() {
     var clientact = $ionicActionSheet.show({
         buttons: [
            { text: '<i class="fa fa-file-movie-o"></i> Create gif' },
           
         ],
      
        
         titleText: 'Media',
         cancelText: 'Cancel',
      
         cancel: function() {
            // add cancel code...
         },
      
         buttonClicked: function(index) {
            if(index === 0) {
             
            $scope.gif();

               // add edit 1 code
            }

        
            if(index === 1) {
               // add edit 2 code
               
            }
            return true;
         },
      
      });
     }
})




.controller('galleryCtrl', function($scope, $http, $ionicBackdrop, $ionicModal, $ionicSlideBoxDelegate, $ionicScrollDelegate) {
  
  $http.get('js/images.json').success(function(data) {
    $scope.allMaleImages = data.Male;
    $scope.allFemaleImages = data.Female;
    $scope.whichitem = $state.params.aId;
    $scope.onItemDelete = function(item) {
   $scope.items.splice($scope.items.indexOf(item),1);
}

  });



  $scope.zoomMin = 1;

  $scope.showImages = function(index) {
    $scope.activeSlide = index;
    $scope.showModal('templates/gallery-zoomview.html');
  };

  $scope.showImage = function(index) {
    $scope.activeSlide = index;
    $scope.showModal('templates/gallery-zoomview-female.html');
  };

  $scope.showModal = function(templateUrl) {
    $ionicModal.fromTemplateUrl(templateUrl, {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
      $scope.modal.show();
    });
  }

  $scope.closeModal = function() {
    $scope.modal.hide();
    $scope.modal.remove();
  };

  $scope.updateSlideStatus = function(slide) {
    var zoomFactor = $ionicScrollDelegate.$getByHandle('scrollHandle' + slide).getScrollPosition().zoom;
    if (zoomFactor == $scop.zoomMin) {
      $ionicSlideBoxDelegate.enableSlide(true);
    } else {
      $ionicSlideBoxDelegate.enableSlide(false);
    }
  };
});











