
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', 
  	{ 
  		title: 'Edgar\'s timeline', 
  		data: 
  		{ 
  			header: 'At the restaurant', 
  			subtitle: 'Your first meal out at a restaurant was a roaring success!',
  			datetime: '2013-10-19',
  			content: 'Today we went out with Grandma for lunch in town at a restaurant called Piccolo. You were really well behaved, despite suffering from a cold which made you cough and sneeze a lot. You sat in a high chair and sucked on a piece of cucumber that Mummy and Daddy gave to you. You had a big poo as well, and when Daddy was changing your nappy he found evidence that you\'d eaten some carrot and some apple the previous day, so we were very excited!'
  		} 
 	 })
};