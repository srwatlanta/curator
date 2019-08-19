class BackgroundsController < ApplicationController
  def create
    Background.create(flash_card_params)
  end

  private

  def flash_card_params
    params.require(:background).permit(:user_id, :url)
  end
end
