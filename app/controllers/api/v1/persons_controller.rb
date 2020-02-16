class Api::V1::PersonsController < ApplicationController
	def index
		render json: Person.all
	end

	def create
		person = Person.create(person_params)
		render json: person
	end

	def destroy
		Person.destroy(params[:id])
	end

	def update
		person = Person.find(params[:id])
		person.update_attributes(person_params)
		render json: person
	end

	private def person_params
		params.require(:person).permit(:fname, :lname, :city, :member1, :member2)
	end
end