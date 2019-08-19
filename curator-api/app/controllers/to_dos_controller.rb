class ToDosController < ApplicationController
  def create
    ToDo.create(to_do_params)
  end

  def update
    to_do = ToDo.find_by(id: params[:id])
      .updato_dote(to_do_params)
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
