class ToDosController < ApplicationController
  def create
    newLi = ToDo.create(to_do_params)
    render json: newLi
  end

  def update
    to_do = ToDo.find_by(id: params[:id])
    to_do.update(to_do_params)
    render json: to_do
  end

  def destroy
    to_do = ToDo.find_by(id: params[:id])
    to_do.delete
  end

  private

  def to_do_params
    params.require(:to_do).permit(:user_id, :item, :comment, :urgency)
  end
end
