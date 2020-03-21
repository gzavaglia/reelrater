class MovieSerializer
    def initialize(movie_object)
        @movie = movie_object
    end

    def to_serialized_json
        options = {
            include: {
                reviews: {
                    except: [:created_at, :updated_at]
                    }},
                     except: [:created_at, :updated_at]
                    }

        @movie.to_json(options)
    end
end