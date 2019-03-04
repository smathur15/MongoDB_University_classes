db.movies.aggregate([
{
	$project :{
				movie_title:{$split:['$title',' ']}, _id:0}
},
{
	$project :{
				movie_Title:{$size:'$movie_title'}}
},
{
	$match:{
				movie_Title :{$eq:1}
			}
}
]).itcount();