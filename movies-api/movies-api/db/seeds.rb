require 'faker'

shrek = Movie.create({title: "Shrek", image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/140ewbWv8qHStD3mlBDvvGd0Zvu.jpg", sinopsis: "It ain't easy bein' green -- especially if you're a likable (albeit smelly) ogre named Shrek. On a mission to retrieve a gorgeous princess from the clutches of a fire-breathing dragon, Shrek teams up with an unlikely compatriot -- a wisecracking donkey."})
kb = Movie.create({title: "Kill Bill: Vol. 1", image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/1MsMlCpinrJJd1f6EQYLuKjU27R.jpg", sinopsis: "An assassin is shot by her ruthless employer, Bill, and other members of their assassination circle – but she lives to plot her vengeance."}) 

Review.create(
    [
        {name: Faker::JapaneseMedia::DragonBall.character, stars: 5, body: Faker::Quotes::Shakespeare.as_you_like_it_quote, movie: kb},
        {name: Faker::JapaneseMedia::DragonBall.character, stars: 5, body: Faker::Quotes::Shakespeare.as_you_like_it_quote, movie: kb},
        {name: Faker::JapaneseMedia::DragonBall.character, stars: 5, body: Faker::Quotes::Shakespeare.as_you_like_it_quote, movie: kb},
        {name: Faker::JapaneseMedia::DragonBall.character, stars: 5, body: Faker::Quotes::Shakespeare.as_you_like_it_quote, movie: kb},
        {name: Faker::JapaneseMedia::DragonBall.character, stars: 5, body: Faker::Quotes::Shakespeare.as_you_like_it_quote, movie: shrek},
        {name: Faker::JapaneseMedia::DragonBall.character, stars: 5, body: Faker::Quotes::Shakespeare.as_you_like_it_quote, movie: shrek},
        {name: Faker::JapaneseMedia::DragonBall.character, stars: 5, body: Faker::Quotes::Shakespeare.as_you_like_it_quote, movie: shrek}
    ]
)