db.movies.aggregate([
	{$match:
		{"languages":"English",
		 "imdb.rating":{$gte: 0}}
},
{$unwind: '$cast'},
{$group:
		{_id:"$cast",
		 numFilms:{$sum:1},
		 average:{$avg:"$imdb.rating"}
		}
	},
{$sort:
	{"numFilms":-1}
},
{
        $project: {
            average: { $divide: [{ $trunc: { $multiply: ['$average', 10] } }, 10] },
            numFilms: 1
        }
    }
]
);