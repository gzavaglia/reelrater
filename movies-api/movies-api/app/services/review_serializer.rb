class ReviewSerializer
    def initialize(review_object)
        @review = review_object
    end

    def to_serialized_json
        options = {
            include: {
                movie: {
                    except: [:created_at, :updated_at]
                    }},
                     except: [:created_at, :updated_at]
                    }

        @review.to_json(options)
    end

end