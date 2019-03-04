db.movies.aggregate(
[
{$match:{"imdb.rating":{$gt:0},
		 "metacritic":{$gt:0}
		}
},
{$facet:{
	"topTenRating":[{$sort:{"imdb.rating":-1}},
					{$limit:10} ],
	
	"topTenMetaCritic":[{$sort:{"metacritic":-1}},
					{$limit:10} ]
}
},
{ $project : {
	    "commonTopFilms" : {
			$size : {
				$setIntersection : [ "$topTenRating", "$topTenMetaCritic" ]
			}
		}	
	}
}
]
).itcount();