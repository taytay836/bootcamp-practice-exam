/////////////////////////////////////////////////////////////////
///////////////////////////// BOOTCAMP //////////////////////////
////////////////////// REQUIRED PRACTICE EXAM ///////////////////
/////////////////////////////////////////////////////////////////

let subscriptions = [
    {  // 0
      name: "HBOMax",
      type: 'streaming',
      costPerMonth: 14.99,
      cancel: false,
      users: [
        {
          ip: '184.190.92.50',
          lastAccessed: '5/22/2023'
        },
        {
          ip: '175.100.90.40',
          lastAccessed: '5/18/2023'
        }
      ]
    },
    { // 1
      name: 'Hulu',
      type: 'streaming',
      costPerMonth: 7.99,
      cancel: false,
       users: [
        {
          ip: '184.190.92.50',
          lastAccessed: '5/22/2023'
        },
      ]
    },
    { // 2
      name: 'Netflix',
      type: 'streaming',
      costPerMonth: 9.99,
      cancel: false,
       users: [
        {
          ip: '184.190.92.50',
          lastAccessed: '5/22/2023'
        },
        {
          ip: '175.100.90.40',
          lastAccessed: '5/18/2023'
        },
         {
           ip: '180.145.75.25',
           lastAccessed: '5/20/2023'
         }
      ]
    },
    { // 3
      name: 'Express VPN',
      type: 'software',
      costPerMonth: 12.95,
      cancel: false,
       users: [
        {
          ip: '184.190.92.50',
          lastAccessed: '5/22/2023'
        },
      ]
    },
    { // 4
      name: 'Adobe Premiere Pro',
      type: 'software',
      costPerMonth: 20.99,
      cancel: false,
       users: [
        {
          ip: '184.190.92.50',
          lastAccessed: '5/22/2023'
        },
      ]
    },
  ];
  
  
  
  /////////////////////////////////////////////////////////////////
  // PROBLEM #1 ///////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  
  
  let cancelSubscriptions = function(array){
    //iterate using for loop
  for (var i = 0; i < array.length; i += 2) {
    //if cost greater than 10 cancel every other one
        if (array[i].costPerMonth > 10) {
          array[i].cancel = true;
        }
      }
    
    
  };
  
  
  /*
  NOTE: If you test this function in the console, remember to comment 
  out the test because this function will DESTRUCTIVELY alter the subscriptions 
  array.
  */
  
  
  /////////////////////////////////////////////////////////////////
  // PROBLEM #2 ///////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  
  
  let subscriptionList = function(array){
      return array.reduce(function(acc, sub) {
        //get number to correct decimal place then use reduce to fomat answer with only name amd price..
        return acc + sub.name + ' - ' + sub.costPerMonth.toFixed(2) + '\n';
      }, '');
    
  };
  
  
  
  
  /////////////////////////////////////////////////////////////////
  // PROBLEM #3 ///////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  
  let getSubscriptionObject = function(array, name){
      // help function 
      function findSubscription(index) {
        // base case
        if (index >= array.length) {
          return { name: null, costPerMonth: null };
        }
        // if the current subscription matches the name
        if (array[index].name === name) {
          return { name: array[index].name, costPerMonth: array[index].costPerMonth };
        }
        // recursive call 
        return findSubscription(index + 1);
      }
      
      // search at 0
      return findSubscription(0);
    
    
  };
  
  
  
  /////////////////////////////////////////////////////////////////
  // PROBLEM #4 ///////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  
  
  
  let updateSubscription = function(object, updates){
      for (var i = 0; i < updates.length; i++) {
        //update using index and iterate with for loop
        var key = updates[i][0];
        var value = updates[i][1];
        //if has property object key = the value
        if (object.hasOwnProperty(key)) {
          object[key] = value;
        }
      }
      return object;
    
  };
  
  
  
  /////////////////////////////////////////////////////////////////
  // PROBLEM #5 ///////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  
  let getMultipleUsers = function(array){
    // use native filter method to return object with multiple users
      return array.filter(function(sub) {
        return sub.users.length > 1;
      });
    
  }; 
  
  
  
  
  /////////////////////////////////////////////////////////////////
  // PROBLEM #6 ///////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  
  let getUsersArray = function(array){
      return array.map(function(sub) {
        //return onlt name property and users prop pointing array of users
        return {
          name: sub.name,
          users: sub.users
        };
      });
  };
  
  
