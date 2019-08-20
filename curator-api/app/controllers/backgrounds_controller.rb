class BackgroundsController < ApplicationController
  def create
    background = Background.create(flash_card_params)
  end

  def destroy
    background = Background.find_by(id: params[:id])
    background.delete
  end

  private

  def flash_card_params
    params.require(:background).permit(:user_id, :url)
  end
end
