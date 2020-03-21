class MoviesController < ApplicationController
    def index
        movies = Movie.all
        
        render json: MovieSerializer.new(movies).to_serialized_json
    end

    def show
        movie = Movie.find(params[:id])

        render json: MovieSerializer.new(movie).to_serialized_json
    end

    private

    def movie_params
        params.require(:movie).permit(:title, :image, :sinopsis)
    end

end
