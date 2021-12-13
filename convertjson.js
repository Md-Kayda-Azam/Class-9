
    const Student = [

        {
           id       : 1,
           name     : 'Aazam',
           roll     : 145687,
           reg      : 45879658423,
           age      : 30,
           fname    : 'Asraf',
           mname    : 'Rohima',
           location : 'Banani',
           gender   : 'male'
       },
   
        {
           id       : 2,
           name     : 'sadiq',
           roll     : 145687,
           reg      : 45879658423,
           age      : 25,
           fname    : 'Asraf',
           mname    : 'Rohima',
           location : 'Mirpur',
           gender   : 'male'
       },
   
        {
           id       : 3,
           name     : 'Ava',
           roll     : 145687,
           reg      : 45879658423,
           age      : 30,
           fname    : 'Asraf',
           mname    : 'Rohima',
           location : 'Banani',
           gender   : 'female'
       },
   
        {
           id       : 4,
           name     : 'Korim',
           roll     : 145687,
           reg      : 45879658423,
           age      : 23,
           fname    : 'Asraf',
           mname    : 'Rohima',
           location : 'Dhaka',
           gender   : 'male'
       },
   
        {
           id       : 5,
           name     : 'Sophia',
           roll     : 145687,
           reg      : 45879658423,
           age      : 22,
           fname    : 'Asraf',
           mname    : 'Rohima',
           location : 'Mirpur',
           gender   : 'female'
       },
   
        {
           id       : 6,
           name     : 'Jobbar',
           roll     : 145687,
           reg      : 45879658423,
           age      : 21,
           fname    : 'Asraf',
           mname    : 'Rohima',
           location : 'Dhaka',
           gender   : 'male'
       },
   
        {
           id       : 7,
           name     : 'Amelia',
           roll     : 145687,
           reg      : 45879658423,
           age      : 20,
           fname    : 'Asraf',
           mname    : 'Rohima',
           location : 'Banani',
           gender   : 'female'
       },
   
        {
           id       : 8,
           name     : 'Arif',
           roll     : 145687,
           reg      : 45879658423,
           age      : 18,
           fname    : 'Asraf',
           mname    : 'Rohima',
           location : 'Dhaka',
           gender   : 'male'
       },
        {
           id       : 9,
           name     : 'Isabella',
           roll     : 145687,
           reg      : 45879658423,
           age      : 18,
           fname    : 'Asraf',
           mname    : 'Rohima',
           location : 'Gazipur',
           gender   : 'female'
       },
        {
           id       : 10,
           name     : 'Miana',
           roll     : 145687,
           reg      : 45879658423,
           age      : 18,
           fname    : 'Asraf',
           mname    : 'Rohima',
           location : 'Mirpur',
           gender   : 'female'
       },]



const Developer = [
    {
      id        : 1,
      name      : 'Md Kayda Azam',
      age       : 18,
      skill     : 'Laravel',
      income    : 1000,
      location  : 'Dhaka',
      gender    : 'male'
    },
    {
      id        : 2,
      name      : 'Liam',
      age       :  20,
      skill     : 'Django',
      income    : 2000,
      location  : 'Chittagong',
      gender    : 'male'
    },
    {
      id        : 3,
      name      : 'Noah',
      age       : 24,
      skill     : 'Golan',
      income    : 3000,
      location  : 'Rajshahi',
      gender    : 'male'
    },
    {
      id        : 4,
      name      : 'Oliver',
      age       : 26,
      skill     : 'JavaScript',
      income    : 4000,
      location  : 'Rangpur',
      gender    : 'male'
    },
    {
      id        : 5,
      name      : 'William',
      age       : 30,
      skill     : 'mern',
      income    : 5000,
      location  : 'Dinajpur',
      gender    : 'male'
    },
    {
      id        : 6,
      name      : 'Elijah',
      age       : 33,
      skill     : 'Wordpress',
      income    : 6000,
      location  : 'Gazipur',
      gender    : 'male'
    },
   
    {
      id        : 7,
      name      : 'Benjamin',
      age       : 18,
      skill     : 'Laravel',
      income    : 1000,
      location  : 'Dhaka',
      gender    : 'male'
    },
    {
      id        : 8,
      name      : 'Lucas',
      age       :  20,
      skill     : 'Django',
      income    : 2000,
      location  : 'Chittagong',
      gender    : 'male'
    },
    {
      id        : 9,
      name      : 'Mason',
      age       : 24,
      skill     : 'Golan',
      income    : 3000,
      location  : 'Rajshahi',
      gender    : 'male'
    },
    {
      id        : 10,
      name      : 'Ethan',
      age       : 26,
      skill     : 'JavaScript',
      income    : 4000,
      location  : 'Rangpur',
      gender    : 'male'
    },]
    const Family = [
    
        {
          id       : 1,
          name     : 'Azam',
          phone    : '01324516475',
          location : 'Dhaka'
    
        },
        {
          id       : 2,
          name     : 'Sawon',
          phone    : '01324516475',
          location : 'Dhaka'
    
        },
        {
          id       : 3,
          name     : 'Tareq',
          phone    : '01324516475',
          location : 'Dhaka'
    
        },
        {
          id       : 4,
          name     : 'Sadiq',
          phone    : '01324516475',
          location : 'Dhaka'
    
        },
        {
          id       : 5,
          name     : 'Mijan',
          phone    : '01750910188',
          location : 'Dhaka',
    
        },
    ];







let Objectstudent = JSON.stringify(Student);
localStorage.setItem('Student', Objectstudent);



let Objectdevs = JSON.stringify(Developer);

localStorage.setItem('Developer', Objectdevs);


let Objectfamily = JSON.stringify(Family);

localStorage.setItem('Family', Objectfamily);



