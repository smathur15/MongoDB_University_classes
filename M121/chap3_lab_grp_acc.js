db.movies.aggregate([
    {
        $match: {
            'awards': /Won \d{1,2} Oscars?/
        }
    },
    {
        $group: {
            _id: null,
            highest_rating: { $max: '$imdb.rating' },
            lowest_rating: { $min: '$imdb.rating' },
            average_rating: { $avg: '$imdb.rating' },
            deviation: { $stdDevSamp: '$imdb.rating' }
        }
    }
]);