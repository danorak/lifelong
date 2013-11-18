var moments = [
  { 
        id: 1,
        header: 'At the restaurant', 
        subtitle: 'Your first meal out at a restaurant was a roaring success!',
        datetime: '2013-10-19',
        content: 'Today we went out with Grandma for lunch in town at a restaurant called Piccolo. You were really well behaved, despite suffering from a cold which made you cough and sneeze a lot. You sat in a high chair and sucked on a piece of cucumber that Mummy and Daddy gave to you. You had a big poo as well, and when Daddy was changing your nappy he found evidence that you\'d eaten some carrot and some apple the previous day, so we were very excited!'
  },
  {
        id: 2,
        header: 'We love our Edgar', 
        subtitle: 'He\'s the greatest little boy in the world',
        datetime: '2013-10-18',
        content: 'Oh yes he is!'

  }
];


function lookup(id){
  for(var i=-1, l = moments.length;++i<l;){
    if(moments[i].id == id){
      return moments[i];
    }
  }
}

exports.select = function(req, res) {
	var id = req.params.id; // rebase
  console.log('id = ' + id);
  
  var matchedMoment = lookup(id);

  if(!matchedMoment){
    console.log('no match');
  }

  // matchedMoment = { 
  //       id: 1,
  //       header: 'At the restaurant', 
  //       subtitle: 'Your first meal out at a restaurant was a roaring success!',
  //       datetime: '2013-10-19',
  //       content: 'Today we went out with Grandma for lunch in town at a restaurant called Piccolo. You were really well behaved, despite suffering from a cold which made you cough and sneeze a lot. You sat in a high chair and sucked on a piece of cucumber that Mummy and Daddy gave to you. You had a big poo as well, and when Daddy was changing your nappy he found evidence that you\'d eaten some carrot and some apple the previous day, so we were very excited!'
  // };

  console.log(typeof matchedMoment);
  console.log('matched moment' + matchedMoment[0]);
	res.render('moment', {
		title: 'Edgar\'s timeline',
		data:  matchedMoment 		
	});
}

exports.put = function(req, res) {
	res.render('edit-moment', { title: 'Editing', user: req.user });
}

exports.create = function(req, res) {
  console.log('Create method in moments');
  res.render('create', {title: 'Create', user: req.user });
}

exports.all = function(req, res) {
	res.render('index',   	{ 
  		title: 'Edgar\'s timeline', 
  		data: moments
 	 });
}