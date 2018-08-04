var myClasses = document.querySelectorAll('.fb-comments');
    function hilang(classes){
      i = 0,
      l = classes.length;
      for (i; i < l; i++) {
        myClasses[i].style.display = 'none';
      }
    }
    hilang(myClasses);