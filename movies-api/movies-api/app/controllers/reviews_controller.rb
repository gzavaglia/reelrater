class ReviewsController < ApplicationController
    def index
        movie = Movie.find(params[:movie_id])
        reviews = movie.reviews

        render json: reviews, status: 200
    end

    def show
        movie = Movie.find(params[:movie_id])
        review = movie.reviews.find(params[:id])

        render json: review, status: 200
    end

    def create
        review = Review.create(review_params)
        if review.save
            render json: review, status: 200
        else
            render json: {message: "failed to create review"}, status: 400
        end

    end

    private

    def review_params
        params.require(:review).permit(:name, :stars, :movie_id, :body)    
    end


end
