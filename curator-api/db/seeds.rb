# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User.create(username: "srwatlanta")
# User.create(username: "ehawkins")

ToDo.create(item: "Buy groceries", comment: "broccoli, tomato soup", urgency: "green", user_id: 1)
ToDo.create(item: "Do laundry", comment: "you smell", urgency: "red", user_id: 1)
ToDo.create(item: "book flight to Austin", comment: "May 7", urgency: "yellow", user_id: 2)
ToDo.create(item: "do homework", comment: "ruby and js", urgency: "yellow", user_id: 2)
ToDo.create(item: "return jacket to zara", comment: "receipt in backpack", urgency: "grey", user_id: 1)
ToDo.create(item: "send card to mom", comment: "get new florida address", urgency: "red", user_id: 1)
ToDo.create(item: "find place to watch the game on saturday", comment: "ask Chris?", urgency: "yellow", user_id: 2)

FlashCard.create(clue: "Mitochondria", answer: "The powerhouse of the cell", user_id: 1)
FlashCard.create(clue: "Alex Trebek", answer: "Host of Jeopardy", user_id: 1)
FlashCard.create(clue: "Newton's Third Law", answer: "For every action there is an equal and opposite reaction", user_id: 1)
FlashCard.create(clue: "Peridoic Element #57", answer: "Lanthanam", user_id: 2)
FlashCard.create(clue: "Homer's Works", answer: "Iliad, Oddysey", user_id: 2)
FlashCard.create(clue: "Yukihiro Matsumoto", answer: "Inventor and creator of Ruby", user_id: 2)

Video.create(video_url: "https://www.youtube.com/watch?v=sbkz3n2pYSg", user_id: 1)
Video.create(video_url: "https://www.youtube.com/watch?v=iWYm4322RYI", user_id: 1)
Video.create(video_url: "https://www.youtube.com/watch?v=ByqBBaN6Uw4", user_id: 1)
Video.create(video_url: "https://www.youtube.com/watch?v=4NrTEM0uezw", user_id: 2)
Video.create(video_url: "https://www.youtube.com/watch?v=05fCNM9f0ic", user_id: 2)
Video.create(video_url: "https://www.youtube.com/watch?v=W8rKww2nxgI", user_id: 2)
