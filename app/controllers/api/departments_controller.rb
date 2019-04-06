class Api::DepartmentsController < ApplicationController
  def index
    render json: Department.all
  end

  def create
    @department = Department.new(dept_params[:id])
      if @department.save
        render json: @department
      else
        render json: { errors: @department.errors }, status: :unprocessable_entity
      end
  end

  def update
    @department = Department.find(dept_params[:id])
    if @department.update(dept_params)
      render json: @department
    else
      render json: {errors: @department.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    Department.find(params[:id]).destroy
    render json: {message: 'Department has been deleted'}
  end

  private
    def dept_params
      params.require(:department).permit(:name)
    end
end
